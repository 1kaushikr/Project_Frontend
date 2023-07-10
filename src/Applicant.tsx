export interface Edu
{
  org:string,
  deg:string,
  major:string,
  startDate:string,
  endDate:string
}
export interface Exp
{
  org:string,
  role:string,
  startDate:string,
  endDate:string,
  respon:string
}
export interface Pro
{
  name:string,
  startDate:string,
  endDate:string,
  respon:string
}
export interface Applicant {
    _id:string,
    firstName:string,
    lastName:string,
    dob:string,
    emailList:string[],
    phoneList:string[],
    eduList:Edu[],
    expList:Exp[],
    proList:Pro[],
    skill:string
  }

