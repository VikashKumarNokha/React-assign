import { useEffect, useState } from "react";

 

    export const SHOWDATA = ()=>{
         const [details, setDetails]= useState([]);
          useEffect(()=>{
              getdata();
          },[]);
         
        async function getdata(){
            const data = await fetch("http://localhost:8080/UserDetails")
            .then((d)=> d.json());
            console.log("DATA",data);
            setDetails(data);
          }
          return (
              <div>
                  {
                           <table>
                            <tr id="header">
                             <th>Name</th>
                             <th>Address</th>
                             <th>Age</th>
                             <th>Department</th>
                             <th>Salary</th>
                             <th>Marital</th>
                             </tr>
                             {
                             details.map((e)=>(
                             <tr id="details">
                             <td>{e.name}</td>
                             <td>{e.address}</td>
                             <td>{e.age}</td>
                             <td>{e.Department}</td>
                             <td>{e.salary}</td>
                             <td>{e.unmaried}</td>
                             </tr>
                             ))
                              }                           
                          </table>    
                  }
              </div>
          )
    }