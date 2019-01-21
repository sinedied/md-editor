<template>
  <div class="container">
    <AceEditor
      :value="content"
      @input="$emit('change', $event)"
      @init="init"
      lang="markdown"
      theme="monokai"
    />
  </div>
</template>

<script>
import AceEditor from "vue2-ace-editor";
import "brace/mode/markdown";
import "brace/theme/monokai";

export default {
  components: {
    AceEditor
  },
  model: {
    prop: "content",
    event: "change"
  },
  props: {
    content: { type: String, default: "" }
  },
  methods: {
    init(editor) {
      editor.renderer.setScrollMargin(6, 0);
      editor.setOptions({
        printMargin: false,
        wrap: true,
        scrollPastEnd: 0.5,
        fontSize: "16px"
      });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex: 1;
}
</style>
