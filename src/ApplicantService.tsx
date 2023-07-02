import Axios from "axios"
import { log } from "console"



export class ApplicantService 
{
    private static URL:string ='https://localhost:7265'
    public static getAllApplicant()
    {
        let ApplicantURL:string = this.URL+'/Applicant'
        let res = Axios.get(ApplicantURL)
        return res
    }
    public static getApp(appId:string)
    {
      console.log(appId)
      let ApplicantURL:string = this.URL+'/Applicant/'+appId
      return Axios.get(ApplicantURL)
    }
    public static post(x:any)
    {
        var payload={
        firstName:x.firstName,
        lastName:x.lastName,
        dob:x.dob,
        phoneList:x.phoneList,
        emailList:x.emailList,
        eduList:x.eduList,
        expList:x.expList,
        proList:x.proList,
        skill:x.skill
    }
    let ApplicantURL:string = this.URL+'/Applicant'
        Axios.post(ApplicantURL, payload
          )
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          })
    }
  public static SendQuery(query:string){
    var payload={
      _query:query   
  }
  let ApplicantURL:string = this.URL+'/Applicant/Query'
      var v =  Axios.post(ApplicantURL, payload)
      console.log(v);
      return v;
    }
  }
