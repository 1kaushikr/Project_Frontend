import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { Applicant } from './Applicant'
import { ApplicantService } from './ApplicantService'

interface IParams{
    id:string
}
interface IState{
  loading:boolean,
  applicant:Applicant,
  errorMsg:string
}
const About: React.FC=()=>
{
  const {id}=useParams<IParams|any>()
  const [state,setState]=useState<IState>({
    loading:true,
    applicant:{} as Applicant,
    errorMsg:""
  })
  useEffect(()=>{
    if(id)
    {
      ApplicantService.getApp(id)
      .then(res=>setState({
        ...state,loading:false,applicant:res.data
      }))
      .catch(err=>setState({
        ...state,loading:false,errorMsg:err.message
      }))
    }
  },[id])
  const {loading, applicant,errorMsg}=state
  const {firstName,lastName,dob,emailList,phoneList,eduList,expList,proList,skill}=applicant
  return (
    <>
        <h1>Single User Detail Page</h1>
        { loading? <h1>Loading...</h1>: errorMsg? <h1>{errorMsg}</h1>:
          <div className="row">
            <ul className="list-group">
              <li className="list-group-item">
                First Name: {firstName}
              </li>
              <li className="list-group-item">
                Last Name: {lastName}
              </li>
              <li className="list-group-item">
                D.O.B.: {dob}
              </li>
        
              <li className="list-group-item">
                  <h2>Phone Numbers: </h2>
              </li>
              { phoneList?.length>0 && phoneList.map(ele=>(
                <li className="list-group-item">
                {ele}
              </li>
              ))}
              <li className="list-group-item">
                  <h2>Emails:</h2>
              </li> 
              { emailList?.length>0 && emailList.map(ele=>(
            <li className="list-group-item">
            {ele}
          </li>
              ))} 
              <li className="list-group-item">
                  <h2>Educations:</h2>
              </li> 

              { eduList?.length>0 && eduList.map(ele=>(
                <li className="list-group-item">
                  Degree: {ele.deg}
                  <br></br>
                  Major: {ele.major}
                  <br></br>
                  Institution:{ele.org}
                  <br></br>
                  Start Date: {ele.startDate}
                  <br></br>
                  End Date: {ele.startDate}
                </li>
              ))} 

              <li className="list-group-item">
                  <h2>Experiences:</h2>
              </li> 
              { expList?.length>0 && expList.map(ele=>(
                <li className="list-group-item">
                  Organisation: {ele.org}
                  <br></br>
                  Designation: {ele.role}
                  <br></br>
                  Start Date: {ele.startDate}
                  <br></br>
                  End Date: {ele.endDate}
                  <br></br>
                  Institution: {ele.respon}
                  <br></br>
                </li>
              ))} 
              <li className="list-group-item">
                  <h2>Projects:</h2>
              </li>
              { proList?.length>0 && proList.map(ele=>(
                <li className="list-group-item">
                  Title: {ele.name}
                  <br></br>
                  Start Date: {ele.startDate}
                  <br></br>
                  End Date: {ele.endDate}
                  <br></br>
                  Description: {ele.respon}
                  <br></br>
                </li>
              ))} 
              <li className="list-group-item">
                  <h2>Skills:</h2>
              </li>
              <li>
                {skill}
              </li>
              
            </ul>
          </div>
        }
    </>
  )
}
export default About;