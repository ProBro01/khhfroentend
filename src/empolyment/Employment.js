import React, { useState, useEffect } from 'react'

export const Employment = () => {

    const [users, setusers] = useState([])
    console.log(users)
    useEffect(() => {
        var getuser = async () => {
            console.log("hello")
            var resp = await fetch("http://192.168.185.14:4000/farmer/allfarmer")
                .then(response => response.json())
                .then(json => json)
            setusers(resp)
        }
        getuser()
        console.log("hello")
    }, [])

    return (
        <div>
            {users.map((element, index) => {
                return (
                    <div>
                        <img src={`http://192.168.185.14:4000/image/getimage/user/${element.images.image_id}`}/>
                        <div>{element.username}</div>
                    </div>
                )
            })}
        </div>
    )
}
