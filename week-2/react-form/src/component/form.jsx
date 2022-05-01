
      import {useState} from "react";
  export const FORM = ()=>{
       const [formData, setFormData] = useState({});  
           const handlechange = (e)=>{
                 const {id, value} = e.target;

                   setFormData(
                       {
                        ...formData,
                        [id] : value, 
                       }
                        );
           }

             const handlesubmit = (e)=>{
                   e.preventDefault();
                   console.log( "data",formData)

                   fetch("http://localhost:8080/UserDetails",{
               method:"POST",
               headers : {
                "content-type" : "application/json"
               },
               body: JSON.stringify(formData),
               });

             }
        return (
            <div>
                  {formData.name}
               <form  onSubmit={handlesubmit} >
                   <input type="text" placeholder="Enter Your Name" id="name" onChange={handlechange} /><br />
                   <input type="text" placeholder="Enter Your Age" id="age" onChange={handlechange} /><br />
                   <input type="text" placeholder="Enter Your Address Details" id="address" onChange={handlechange} /><br />
                   <select name="" id="Department" onChange={handlechange}>
                       <option value="">Department</option>
                       <option value="Accountant">Accountant</option>
                       <option value="Admin">Admin</option>
                       <option value="Cashier">Cashier</option>
                   </select><br />
                   <input type="text" placeholder=" Enter Your Salary" id="salary" onChange={handlechange}/><br />
                   <input type="checkbox" value="maried" name="maried" id="maried" onChange={handlechange}/>
                   <label htmlFor="maried"> Are you maried ? </label><br />
                   <input type="checkbox" value="Unmaried" name="Unmaried"  id="unmaried" onChange={handlechange}/>
                   <label htmlFor="unmaried" >Are You unmaried ?</label><br />

                    <input type="submit" value="submit" />

               </form>
            </div>
        )   
  }




//  <-------- problem statement ---------->


// Create a react app.
// Create a form that accepts employee details
// Name
// Age
// Address
// Department ( select tag )
// Salary
// marital state ( check box )
// on submit save the data into a database
// retrieve the data when user lands on the page and show it in a table