"use client"
import { Provider } from "react-redux";
import store from "@/lib/store";

const dashboard = () => {
  return (
    <Provider store={store}>
      <>
        <h1>Dashboard</h1>
      </>
    </Provider>
  );
};

export default dashboard;
