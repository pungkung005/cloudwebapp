import { useNavigate } from 'react-router-dom'
import React, { useState } from "react";
import { Header } from './Header'
import './App.css';
import Axios from 'axios';


const api_url = "http://localhost:38080/"

function Main() {
    let navigate = useNavigate()

    // var image_height;
    // var image_width;

    const [image, setimage] = useState("");

    var formdata = new FormData()

    formdata.append("image", image)



    const upload = () => {

        var img = new Image()

        img.src = window.URL.createObjectURL(image)

        img.onload = async function () {

            const image_height = img.naturalHeight
            const image_width = img.naturalWidth
            const image_size = image.size
            const image_type = image.type

            window.URL.revokeObjectURL(img.src)

            if (image_height > 200) {
                alert("Dimention of height over 200px")
            }

            else if (image_width > 200) {
                alert("Dimention of width over 200px ")
            }

            else if (image_size >= 51200) {
                alert("this file is size over 50KB")
            }

            else if (image_type != "image/jpeg") {
                alert("this file isn't a jpg")
            }
            else {
                Axios.post(api_url + "upload",
                    formdata
                ).then((response) => {
                    console.log(response)
                })
                console.log(image)
            }
        }
    }

    return (

        <div className='body1 '>
            <h1 className='header'>Main</h1>
            <br></br>
            <input type={"file"} onChange={(e) => setimage(e.target.files[0])} ></input><br></br><br></br>
            <button onClick={(upload)}>upload</button>  <br></br><br></br>
            <button onClick={() => navigate('/Login')}>ออกจากระบบ</button>
        </div>
    )
}
export default Main;