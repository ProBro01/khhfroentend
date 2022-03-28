import { combineReducers } from "redux";
import { languagereducer, innerhtmlcontroller } from "./languagereducer";
import { cropreducer } from "./cropsreducer";
import { districtreducer } from "./districtreducer";
import { currentcropreducer } from "./currentcropreducer";
import { setcropnotfound } from  "./cropnotfoundreducer";
import { blogreducer } from "./blogreducer";
import { searchcropreducer } from "./searchcrop";

const rootreducer = combineReducers({
    languagereducer : languagereducer,
    innerhtmlcontroller : innerhtmlcontroller,
    cropreducer : cropreducer,
    districtreducer : districtreducer,
    currentcropreducer : currentcropreducer, // currentcropsetter args - object to be setted
    setcropnotfound : setcropnotfound,
    blogreducer : blogreducer,
    searchcropreducer : searchcropreducer // searchcropsetter args - object to be setted
})

export default rootreducer