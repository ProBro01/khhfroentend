import { combineReducers } from "redux";
import { languagereducer, innerhtmlcontroller } from "./languagereducer";
import { cropreducer } from "./cropsreducer";
import { districtreducer } from "./districtreducer";
import { currentcropreducer } from "./currentcropreducer";
import { setcropnotfound } from  "./cropnotfoundreducer";
import { blogreducer } from "./blogreducer";

const rootreducer = combineReducers({
    languagereducer : languagereducer,
    innerhtmlcontroller : innerhtmlcontroller,
    cropreducer : cropreducer,
    districtreducer : districtreducer,
    currentcropreducer : currentcropreducer,
    setcropnotfound : setcropnotfound,
    blogreducer : blogreducer
})

export default rootreducer