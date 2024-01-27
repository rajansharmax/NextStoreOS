import ConfigState from "./interface"
export { default as initialize } from "./initialize.case";

const initialState: ConfigState = {
    initialized: false,
}

export default initialState;