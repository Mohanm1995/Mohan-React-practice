import React from 'react'

const Users = (props) => {
  let data = props.data
  return (
    <div>
        <table border="2px" style={{textAlign:"center", fontWeight:"bold"}}>
          <tr>
            <th>UserName</th>
            <th>Age</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Occupation</th>
            <th>Salary</th>
            <th>Photo</th>
            <th>Phone No</th>
          </tr>
          {data.map((x)=>{
              return( <tr>
              <td>{x.userName}</td>
              <td>{x.age}</td>
              <td>{x.gender}</td>
              <td>{x.dob}</td>
              <td>{x.occupation}</td>
              <td>{x.salary}</td>
              <td><img src={x.photo} alt=""  style={{height:"50px", width:"50px"}}/></td>
              <td><ol>{x.phone.map((x)=>{
                return <li>{x}</li>
              })
                }</ol></td>
              </tr>)
            })
          }
        </table>
    </div>
  )
}

export default Users