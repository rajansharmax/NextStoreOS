import { createReducer } from "@reduxjs/toolkit";
import actions from "@/lib/redux/actions";
import * as configCase from "./config";
import configInitialState from "./config";

const intialState = {
  config: configInitialState,
};

const reducer = createReducer(intialState, (builder) => {
    builder.addCase(actions.config.initialize, configCase.initialize);
});

export default reducer;