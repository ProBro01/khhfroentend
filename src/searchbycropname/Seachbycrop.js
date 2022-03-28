import React from 'react'
import searchcropnameimg from "../images/searchcropname.png"
// hooks
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
// actions
import { searchcropsetter } from '../actions/searchcropaction'

export const Seachbycrop = () => {

  var dispatch = useDispatch()
  var searchcrop = useSelector(state => state.searchcropreducer)
  var language = useSelector(state => state.languagereducer)
  const innerhtml = useSelector(state => state.innerhtmlcontroller)
  const [showsearchcrop, setshowsearchcrop] = useState('')
  async function getcropbyname() {
    var cropname = document.getElementById('cropnameinput').value
    cropname = cropname.toUpperCase()
    var resp = await fetch("http://192.168.185.14:4000/crop/filter", {
      method: 'post',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ language: language, crop: cropname, district: "" })
    })
      .then(response => response.json())
      .then(json => json)
    console.log(resp)
    if (Object.keys(resp).length !== 0) {
      dispatch(searchcropsetter(resp[0]))
      setshowsearchcrop(true)
    }
  }

  if (showsearchcrop === true) {
    return (<>
      <div>
        <input type={"text"} placeholder={innerhtml.searchcropname} id="cropnameinput" />
        <button onClick={() => {
          getcropbyname()
        }}>{innerhtml.search}</button>
        <div>
          <div>
            <img src={`http://192.168.185.14:4000/image/getimage/crop/${searchcrop.banner_image}`} />
            <h1>{searchcrop.cropName}</h1>
          </div>
          <div>
            <h1>{innerhtml.cropdescription}</h1>
            <p>{searchcrop.description}</p>
          </div>
          <div>
            <h1>{innerhtml.typeofcrop}</h1>
            <p>{searchcrop.typeofcrop}</p>
          </div>
          <div>
            <h1>{innerhtml.districts}</h1>
            {
              searchcrop.districts.map((element, index) => {
                return <li key={index}>{element}</li>
              })
            }
          </div>
          {searchcrop.seedrate !== "" ? <div>
            <h1>{innerhtml.seedrate}</h1>
            <div>{searchcrop.seedrate}</div>
          </div> : null}
          {searchcrop.seedsowingperiod !== "" ? <div>
            <h1>{innerhtml.seedsowingperiod}</h1>
            <p>{searchcrop.seedsowingperiod}</p>
          </div> : null}
          {searchcrop.cropcultivationperiod !== "" ? <div>
            <h1>{innerhtml.cropcultivationperiod}</h1>
            <p>{searchcrop.cropcultivationperiod}</p>
          </div> : null
          }
          {searchcrop.variety.length !== 0 ? <div>
            <h1>{innerhtml.variety}</h1>
            {
              searchcrop.variety.map((element, index) => {
                return <li>{element}</li>
              })
            }
          </div> : null}
          {searchcrop.climate !== "" ? <div>
            <h1>{innerhtml.climate}</h1>
            <p>{searchcrop.climate}</p>
          </div> : null
          }
          {searchcrop.temprature !== "" ? <div>
            <h1>{innerhtml.temprature}</h1>
            <p>{searchcrop.temprature}</p>
          </div> : null
          }
          {searchcrop.soildescription !== "" ? <div>
            <h1>{innerhtml.soildescription}</h1>
            <p>{searchcrop.soildescription}</p>
          </div> : null
          }
          {searchcrop.soilph !== "" ? <div>
            <h3>{innerhtml.soilph}</h3>
            <p>{searchcrop.soilph}</p>
          </div> : null
          }
          {searchcrop.seedprocessing.length !== 0 ? <div>
            <h1>{innerhtml.seedprocessing}</h1>
            {
              searchcrop.seedprocessing.map((element, index) => {
                return <li key={index}>{element}</li>
              })
            }
          </div> : null
          }
          {searchcrop.landdescription !== "" ? <div>
            <h1>{innerhtml.landdescription}</h1>
            <p>{searchcrop.landdescription}</p>
          </div> : null
          }
          {searchcrop.perprationoffield.length !== 0 ? <div>
            <h1>{innerhtml.perprationoffield}</h1>
            {
              searchcrop.perprationoffield.map((element, index) => {
                return <li key={index}>{element}</li>
              })
            }
          </div> : null}
          {searchcrop.fertilizer !== "" ? <div>
            <h1>{innerhtml.fertilizer}</h1>
            {searchcrop.fertilizer.map((element, index) => {
              return <li key={index}>{element}</li>
            })
            }
          </div> : null
          }
          {searchcrop.irrigation !== "" ? <div>
            <h1>{innerhtml.irrigation}</h1>
            <p>{searchcrop.irrigation}</p>
          </div> : null}
          {searchcrop.harvesting.length !== 0 ? <div>
            <h1>{innerhtml.harversting}</h1>
            {
              searchcrop.harvesting.map((element, index) => {
                return <li key={index}>{element}</li>
              })
            }
          </div> : null}
          {searchcrop.plantprotection.length !== 0 ? <div>
            <h1>{innerhtml.plantprotection}</h1>
            {searchcrop.plantprotection.map((element, index) => {
              return <li key={index}>{element}</li>
            })}
          </div> : null}
          {searchcrop.storage !== "" ? <div>
            <h1>{innerhtml.storage}</h1>
            <p>{searchcrop.storage}</p>
          </div> : null}
          {searchcrop.extrainfo.length !== 0 ? <div>
            <h1>{innerhtml.extrainfo}</h1>
            {searchcrop.extrainfo.map((element, index) => {
              return <li key={index}>{element}</li>
            })}
          </div> : null}
        </div>
      </div>
    </>
    )
  }
  else if(!showsearchcrop === false) {
    return <div> <input type={"text"} placeholder={innerhtml.searchcropname} id="cropnameinput" />
      <button onClick={() => {
        getcropbyname()
      }}>{innerhtml.search}</button><div>No Crop To Show</div></div>
  }
  else{
    return <div><input type={"text"} placeholder={innerhtml.searchcropname} id="cropnameinput" />
    <button onClick={() => {
      getcropbyname()
    }}>{innerhtml.search}</button>
      <img src={searchcropnameimg}/>
    </div>
  }
}