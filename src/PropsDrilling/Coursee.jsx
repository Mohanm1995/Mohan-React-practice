import React from 'react'

const Coursee = (props) => {
  if(props.courseDetails.courseAvail == false)
  {
    return(
        <>
        <h1>{props.courseDetails.courseName}</h1>
        <h2>{props.courseDetails.courseDuration}</h2>
        <button style={{color : "green"}}> AVAILABLE </button>
        </>
    )
  }
  else
  {
    return(
        <>
        <h1>{props.courseDetails.courseName}</h1>
        <h2>{props.courseDetails.courseDuration}</h2>
        <button style={{color : "red"}}> NOT AVAILABLE </button>
        </>
    )
  }
}

export default Coursee