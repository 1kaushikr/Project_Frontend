import { useState } from "react"
import { ApplicantService } from "./ApplicantService"

const Query: React.FC=(props)=>
{
    const [query,setQuery] = useState("")
    const handleChange =(event:React.ChangeEvent<HTMLInputElement>):void=>{
        setQuery(event.target.value)
      }
    const handleSubmit = ():void =>{
        ApplicantService.SendQuery(query)
        setQuery("")
    }
    return (
        <>
            <label>Query:
                <input  type="text" value={query} onChange={handleChange}  className="form-label" />
            </label>
            <button className="btn btn-primary" onClick={()=>handleSubmit()}>Fetch</button>
        </>
    )
}
export default Query;