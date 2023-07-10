import Axios from "axios"

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
      return Axios.post(ApplicantURL, payload)
    }
    public static SendQuery(query:string)
    {
      var payload={
        _query:query   
      }
      let ApplicantURL:string = this.URL+'/Applicant/Query'
      return Axios.post(ApplicantURL, payload)
    }
}
