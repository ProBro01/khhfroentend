import userpicture from "../images/user-picture.png"
import "./blog.css"
// dependencies
import React from 'react'
// hooks
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// actions
import { blogappender } from '../actions/blogaction'

export const Blog = () => {

    const dispatch = useDispatch()
    const [blogpagenumber, setblogpagenumber] = useState(1)
    var blogs = useSelector(state => state.blogreducer)
    const [showblogs, setshowblogs] = useState(true) // tell wheater to show the blog or not

    async function getBlogs() {
        console.log("blog")
        var resp = await fetch(`http://192.168.185.14:4000/blog/getblog/${blogpagenumber}`)
            .then(response => response.json())
            .then(json => json)
        if (resp.length !== 0) {
            dispatch(blogappender(resp))
            setblogpagenumber(blogpagenumber + 1)
        }
    }

    console.log(blogs)
    return (
        <div onLoad={() => {
            getBlogs()
        }}>
            {showblogs ? blogs.map((element, index) => (
                <div>
                    <div className="card">
                        {element.blog_owner_image !== undefined ? <div className="image">
                            <img src={`http://192.168.185.14:4000/image/getimage/user/${element.blog_owner_image}`} />
                        </div> : <img src={userpicture} />}
                        <h6>{element.blog_owner_name}</h6>
                        <h6>{element.submissiondate}</h6>
                    </div>
                    <div className="heading">
                        <h1>{element.blog_topic}</h1>
                    </div>
                    <div className="contents">

                        <div className="description">
                            <p>{element.blog_data}</p>
                        </div>
                    </div>
                </div>
            )
            ) : <div>Blogs Not Available</div>}
            <button onClick={() => {
                getBlogs()
            }}>getblog</button>
        </div>
    )
}

// import './App.css';
// import pic from './randomimage.jpg'
// function App() {
//     return (
//         <div className="card">



//             <div className="readmore">
//                 <button>Readmore</button>

//             </div>
//         </div>
//     );
// }

// export default App;