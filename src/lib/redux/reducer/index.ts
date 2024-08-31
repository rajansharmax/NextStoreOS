import { createReducer } from "@reduxjs/toolkit";
import actions from "@/lib/redux/actions";
import * as configCase from "./config";
import configInitialState from "./config";

const intialState = {
  config: configInitialState,
};

const reducer = createReducer(intialState, (builder) => {
    builder.addCase(actions.config.initialize, configCase.initialize);
    builder.addCase(actions.config.updateCartItem, configCase.updateCartItem); 
    builder.addCase(actions.config.deleteCartItem, configCase.deleteCartItem); 
    builder.addCase(actions.config.addCartItem, configCase.addCartItem); 
});

export default reducer;