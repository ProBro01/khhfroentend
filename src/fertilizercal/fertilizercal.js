import React from 'react'
// hooks
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

export const Fertilizercal = () => {

    const [district, setdistrict] = useState([])
    const [nitrogen, setnitrogen] = useState(0)
    const [phosporus, setphospours] = useState(0)
    const [potash, setpotash] = useState(0)
    const [urea, seturea] = useState(0)
    const [amountofcrop, setamountofcrop] = useState(0)
    const [showfertilizer, setshowfertilizer] = useState(false)
    const [fertilizerlist, setfertilizerlist] = useState([])

    const language = useSelector(state => state.languagereducer)

    useEffect(() => {
        console.log("thisis is thasd kfj")
        setshowfertilizer(true)
    }, [potash])
    async function calculate() {
        var resp = await fetch("http://192.168.185.14:4000/crop/filter", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ language: language, crop: document.getElementById("cropinput").value.toUpperCase(), district: "" })
        })
            .then(response => response.json())
            .then(json => json)
        console.log(resp)
        resp = resp[0]


        if (resp.length !== 0) {
            setdistrict(resp.districts)
            setnitrogen(resp.nitrogen_per_hacter)
            setphospours(resp.phosphrus_per_hacter)
            seturea(resp.urea_per_hacter)
            setpotash(resp.potash_per_hacter)
            setfertilizerlist([nitrogen, phosporus, potash, urea])
            setamountofcrop(resp.amountofcrop)
        }
        console.log(fertilizerlist)
        console.log(amountofcrop)
    }

    return (
        <div>
            <div>
                <label>Crop Name</label>
                <input type={"text"} id="cropinput" />
            </div>
            <div>
                <label>Land Area</label>
                <input type={"text"} />
            </div>
            <div>
                <button onClick={(event) => calculate(event)}>calculate</button>
            </div>
            <div>
                {showfertilizer ? 
                    fertilizerlist.map((element, index) => {
                        return <li key={index}>{element}</li>
                    }):null
                }
            </div>
        </div>
    )
}
