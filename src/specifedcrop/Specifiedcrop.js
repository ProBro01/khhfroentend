import React from 'react'
// hooks
import { useSelector } from 'react-redux'

export const Specifiedcrop = () => {

    const innerhtml = useSelector(state => state.innerhtmlcontroller)
    const cropnotfound = useSelector(state => state.setcropnotfound)
    const currentcrop = useSelector(state => state.currentcropreducer)
    console.log(cropnotfound)
    var t = !cropnotfound ?
            <div>
                <div>
                    <img src={`http://192.168.113.14:4000/image/getimage/crop/${currentcrop.banner_image}`} />
                    <h1>{currentcrop.cropName}</h1>
                </div>
                <div>
                    <h1>{innerhtml.cropdescription}</h1>
                    <p>{currentcrop.description}</p>
                </div>
                <div>
                    <h1>{innerhtml.typeofcrop}</h1>
                    <p>{currentcrop.typeofcrop}</p>
                </div>
                <div>
                    <h1>{innerhtml.districts}</h1>
                    {
                        currentcrop.districts.map((element, index) => {
                            return <li key={index}>{element}</li>
                        })
                    }
                </div>
                {currentcrop.seedrate !== "" ? <div>
                    <h1>{innerhtml.seedrate}</h1>
                    <div>{currentcrop.seedrate}</div>
                </div> : null}
                {currentcrop.seedsowingperiod !== "" ? <div>
                    <h1>{innerhtml.seedsowingperiod}</h1>
                    <p>{currentcrop.seedsowingperiod}</p>
                </div> : null}
                {currentcrop.cropcultivationperiod !== "" ? <div>
                    <h1>{innerhtml.cropcultivationperiod}</h1>
                    <p>{currentcrop.cropcultivationperiod}</p>
                </div> : null
                }
                {currentcrop.variety.length !== 0 ? <div>
                    <h1>{innerhtml.variety}</h1>
                    {
                        currentcrop.variety.map((element, index) => {
                            return <li>{element}</li>
                        })
                    }
                </div> : null}
                {currentcrop.climate !== "" ? <div>
                    <h1>{innerhtml.climate}</h1>
                    <p>{currentcrop.climate}</p>
                </div> : null
                }
                {currentcrop.temprature !== "" ? <div>
                    <h1>{innerhtml.temprature}</h1>
                    <p>{currentcrop.temprature}</p>
                </div> : null
                }
                {currentcrop.soildescription !== "" ? <div>
                    <h1>{innerhtml.soildescription}</h1>
                    <p>{currentcrop.soildescription}</p>
                </div> : null
                }
                {currentcrop.soilph !== "" ? <div>
                    <h3>{innerhtml.soilph}</h3>
                    <p>{currentcrop.soilph}</p>
                </div> : null
                }
                {currentcrop.seedprocessing.length !== 0 ? <div>
                    <h1>{innerhtml.seedprocessing}</h1>
                    {
                        currentcrop.seedprocessing.map((element, index) => {
                            return <li key={index}>{element}</li>
                        })
                    }
                </div> : null
                }
                {currentcrop.landdescription !== "" ? <div>
                    <h1>{innerhtml.landdescription}</h1>
                    <p>{currentcrop.landdescription}</p>
                </div> : null
                }
                {currentcrop.perprationoffield.length !== 0 ? <div>
                    <h1>{innerhtml.perprationoffield}</h1>
                    {
                        currentcrop.perprationoffield.map((element, index) => {
                            return <li key={index}>{element}</li>
                        })
                    }
                </div> : null}
                {currentcrop.fertilizer !== "" ? <div>
                    <h1>{innerhtml.fertilizer}</h1>
                    {currentcrop.fertilizer.map((element, index) => {
                        return <li key={index}>{element}</li>
                    })
                    }
                </div> : null
                }
                {currentcrop.irrigation !== "" ? <div>
                    <h1>{innerhtml.irrigation}</h1>
                    <p>{currentcrop.irrigation}</p>
                </div> : null}
                {currentcrop.harvesting.length !== 0 ? <div>
                    <h1>{innerhtml.harversting}</h1>
                    {
                        currentcrop.harversting.map((element, index) => {
                            return <li key={index}>{element}</li>
                        })
                    }
                </div> : null}
                {currentcrop.plantprotection.length !== 0 ? <div>
                    <h1>{innerhtml.plantprotection}</h1>
                    {currentcrop.plantprotection.map((element, index) => {
                        return <li key={index}>{element}</li>
                    })}
                </div> : null}
                {currentcrop.storage !== "" ? <div>
                    <h1>{innerhtml.storage}</h1>
                    <p>{currentcrop.storage}</p>
                </div> : null}
                {currentcrop.extrainfo.length !== 0 ? <div>
                    <h1>{innerhtml.extrainfo}</h1>
                    {currentcrop.extrainfo.map((element, index) => {
                        return <li key={index}>{element}</li>
                    })}
                </div> : null}
            </div> : <div>crop not found</div>
            return t
}