<template>
  <div class="container">
    <div class="viewer" v-html="html"></div>
  </div>
</template>

<script>
import marked from "marked";

export default {
  name: "MdViewer",
  props: {
    content: { type: String, default: "" }
  },
  computed: {
    html() {
      return marked(this.content);
    }
  }
};
</script>

<style scoped>
.container {
  flex: 1;
  overflow: auto;
}

.viewer {
  padding: 0 1rem;
}

>>> blockquote {
  -webkit-margin-start: 0;
  -webkit-margin-end: 0;
  padding: 0 1em;
  border-left: 3px solid #999;
  color: #999;
}
</style>
