import { useState } from "react"
import { ApplicantService } from "./ApplicantService"
import { Applicant } from "./Applicant";
import { Link } from "react-router-dom";
interface IState
{
    loading:boolean,
    applicant:Applicant[],
    errorMsg:string
}
const Query: React.FC=(props)=>
{
    const [query,setQuery] = useState("")
    const [clicked, setclicked] = useState(false)
    const [state,setState] = useState<IState>({
        loading:false,
        applicant:[],
        errorMsg:''
      })
    const handleChange =(event:React.ChangeEvent<HTMLInputElement>):void=>{
        setQuery(event.target.value)
      }
    const handleSubmit = ():void =>{
        setState({loading:true,errorMsg:"",applicant:[]})
        ApplicantService.SendQuery(query).then(res=>setState({
            ...state,loading:false,applicant:res.data
          }))
          .catch(err=>setState({
            ...state, loading:false, errorMsg:err.message
          }))
        setclicked(true)
        setQuery("")
    }
    if (clicked)
    {
        return(
            <>
                <h1>Applicants</h1>
                {state.errorMsg && (<p>Error: {state.errorMsg}</p>)}
                {state.loading && (<h1>Loading....</h1>)}
                <table>
                    <tbody>
                    {
                        state.applicant.length>0 && state.applicant.map(user=>(
                        <tr>
                            <td>
                            <Link to={'user/'+user._id} className="text-decoration-none">{user.firstName} {user.lastName}</Link>
                            </td>
                        </tr>
                        ))
                    }
                    </tbody>
                    </table>
            </>
        )
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