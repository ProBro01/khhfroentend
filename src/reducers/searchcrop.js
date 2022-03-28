const initalsearchcrop = ''
export const searchcropreducer = (state=initalsearchcrop, action) => {
    switch(action.type) {
        case "SETSEARCHCROP" : return action.searchcrop
        default : return state
    }
}