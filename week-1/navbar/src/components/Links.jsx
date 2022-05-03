import "./all.css"

export const Links=()=>{
    
    const links =[{link:"Services"},{link:"Projects"},{link:"About"}]
    return(
       <div className="Navl">
           {links.map((el,id)=>(                        
               <div key={id}>{el.link}</div>
           ))}
       </div>
    )
}