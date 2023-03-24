import React from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Toast1 = () =>{
    let handleSubmit=()=>{
    toast.success("Logged In Successfully", {
    position : toast.POSITION.TOP_CENTER
    })
}

return(
    <div>
        <ToastContainer/>
        <button onClick={handleSubmit}> Click For Message </button>
    </div>
)}
export default Toast1