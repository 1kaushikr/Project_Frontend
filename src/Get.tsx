import { Applicant } from "./Applicant";
import React,{useState,useEffect} from "react";
import { ApplicantService } from "./ApplicantService";
import { Link } from "react-router-dom";
interface IState
{
    loading:boolean,
    applicant:Applicant[],
    errorMsg:string
}
const   Get: React.FC=()=>
{
  const [state,setState] = useState<IState>({
    loading:false,
    applicant:[],
    errorMsg:''
  })
  useEffect(()=>{
    setState({loading:true,errorMsg:"",applicant:[]})
    ApplicantService.getAllApplicant().then(res=>setState({
      ...state,loading:false,applicant:res.data
    }))
    .catch(err=>setState({
      ...state, loading:false, errorMsg:err.message
    }))
  },[])
  return (
    <>
    <h1>Applicants</h1>
    {state.errorMsg && (<p>Error: {state.errorMsg}</p>)}
    {state.loading && (<h1>Loading......</h1>)}
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
  );
}

export default Get;