<template>
  <div id="app">
    <HeaderBar @reset="onReset()" />
    <div class="split-view">
      <MdEditor v-model="content" />
      <MdViewer :content="content" />
    </div>
    <StatusBar :stats="stats" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import HeaderBar from "@/components/HeaderBar";
import StatusBar from "@/components/StatusBar";
import MdViewer from "@/components/MdViewer";
import MdEditor from "@/components/MdEditor";
import { LOAD_CONTENT, RESET_CONTENT } from "@/store/actions.type";
import { SET_CONTENT } from "@/store/mutations.type";

export default {
  components: {
    HeaderBar,
    StatusBar,
    MdViewer,
    MdEditor
  },
  beforeCreate() {
    this.$store.dispatch(LOAD_CONTENT);
  },
  computed: {
    content: {
      get() {
        return this.$store.state.editor.content;
      },
      set(value) {
        this.$store.commit(SET_CONTENT, value);
      }
    },
    ...mapGetters(["stats"])
  },
  methods: {
    ...mapActions({
      onReset: RESET_CONTENT
    })
  }
};
</script>

<style>
@import url("https://use.fontawesome.com/releases/v5.0.13/css/all.css");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400|Ubuntu:300");

html,
body,
#app {
  font-family: "Open Sans", sans-serif;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0;
  height: 100%;
}

.split-view {
  display: flex;
  flex: 1;
}
</style>
