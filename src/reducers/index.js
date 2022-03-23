import { combineReducers } from "redux";
import { languagereducer, innerhtmlcontroller } from "./languagereducer";
import { cropreducer } from "./cropsreducer";
import { districtreducer } from "./districtreducer";

const rootreducer = combineReducers({
    languagereducer : languagereducer,
    innerhtmlcontroller : innerhtmlcontroller,
    cropreducer : cropreducer,
    districtreducer : districtreducer
})

export default rootreducer