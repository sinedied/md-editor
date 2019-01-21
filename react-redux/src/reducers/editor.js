import { SET_CONTENT, RESET_CONTENT } from "../constants/actionTypes";

const defaultState = { content: "" };

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_CONTENT:
      return {
        ...state,
        content: action.content
      };
    case RESET_CONTENT:
      return {
        ...state,
        content: "# Welcome!\n\nType markdown *here* to start..."
      };
    default:
      return state;
  }
};
