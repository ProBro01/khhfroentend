import { combineReducers } from "redux";
import { languagereducer, innerhtmlcontroller } from "./languagereducer";

const rootreducer = combineReducers({
    languagereducer : languagereducer,
    innerhtmlcontroller : innerhtmlcontroller
})

export default rootreducer