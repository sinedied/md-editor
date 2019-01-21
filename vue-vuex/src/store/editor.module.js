import { LOAD_CONTENT, RESET_CONTENT } from "./actions.type";
import { SET_CONTENT } from "./mutations.type";

const CONTENT_KEY = "content";

const state = {
  content: ""
};

const getters = {
  stats(state) {
    const content = state.content;
    const matches = content.match(/[\w\d]+/gi);
    return {
      words: matches ? matches.length : 0,
      lines: content.split("\n").length
    };
  }
};

const actions = {
  [LOAD_CONTENT]({ commit, dispatch }) {
    const savedContent = localStorage.getItem(CONTENT_KEY);
    if (savedContent) {
      commit(SET_CONTENT, savedContent);
    } else {
      dispatch(RESET_CONTENT);
    }
  },
  [RESET_CONTENT]({ commit }) {
    commit(SET_CONTENT, "# Welcome!\n\nType markdown *here* to start...");
  }
};

const mutations = {
  [SET_CONTENT](state, content) {
    state.content = content;
    localStorage.setItem(CONTENT_KEY, content);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
