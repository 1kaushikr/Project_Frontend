import Axios from "axios"
import { Applicant } from "./Applicant";
import { useState } from "react";
import { error } from "console";

interface IState 
{
    loading:boolean,
    applicant:Applicant[],
    errorMsg:string
}
export class ApplicantService 
{
    private static URL:string ='https://localhost:7265'
    public static getAllPersons()
    {
        const [state,setState] = useState<IState>({
            loading:false,
            applicant:[] as Applicant[],
            errorMsg:""
        })
        let ApplicantURL:string = this.URL+'/Applicant'
        return Axios.get(ApplicantURL);
    }
    public static post(x:Applicant)
    {
        const [data,setData]= useState([])
        
    }
}