import { SET_CONTENT, RESET_CONTENT } from "../constants/actionTypes";

export const resetContent = () => ({ type: RESET_CONTENT });
export const setContent = content => ({ type: SET_CONTENT, content });
