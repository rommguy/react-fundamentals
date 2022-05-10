import { AppState } from "./types";
import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState: AppState = {
  userName: "visitor",
};

export const updateNameAction = createAction<string>("updateName");

export const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateNameAction, (state, action) => {
    state.userName = action.payload;
  });
});
