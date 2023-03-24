import React from "react";
import {faker} from "@faker-js/faker"
import { useState } from "react";

const Faker = () =>{
    let[img, setImg] = useState(faker.image.avatar())

    let handleChange = () =>{
        setImg(faker.image.avatar())
    }
    return(
        <>
        <img src={img} alt="" />
        <button onClick={handleChange}> Change </button>
        </>
    )
}
export default Faker