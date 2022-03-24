import { combineReducers } from "redux";
import { languagereducer, innerhtmlcontroller } from "./languagereducer";
import { cropreducer } from "./cropsreducer";
import { districtreducer } from "./districtreducer";
import { currentcropreducer } from "./currentcropreducer";
import { setcropnotfound } from  "./cropnotfoundreducer"

const rootreducer = combineReducers({
    languagereducer : languagereducer,
    innerhtmlcontroller : innerhtmlcontroller,
    cropreducer : cropreducer,
    districtreducer : districtreducer,
    currentcropreducer : currentcropreducer,
    setcropnotfound : setcropnotfound
})

export default rootreducer