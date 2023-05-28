import Multiselect from "multiselect-react-dropdown";
import { ChangeEvent, useState } from "react";
import {Pro,Exp,Edu} from './Applicant';
import { ApplicantService } from "./ApplicantService";
import App from "./App";

export interface IUser {
    firstName:string,
    lastName:string,
    dob:string
}
interface clicked {
  yes:boolean
}

const Create: React.FC=()=>
{
  const handleSubmit = ():void =>{
    const model ={
      firstName:user.firstName,
      lastName:user.lastName,
      dob:user.dob,
      emailList:emailList,
      phoneList:phoneList,
      eduList:eduList,
      expList:expList,
      proList:proList,
      skill:skill
    }
    setclicked({yes:true})
    ApplicantService.post(model)
  }
  const [clicked,setclicked] = useState<clicked>({yes:false})
  const [user, setUser] = useState<IUser>({
      firstName:"First Name",
      lastName:"Last Name",
      dob:"1000-01-01"
  })
  const handleChange =(event:React.ChangeEvent<HTMLInputElement>):void=>{
    setUser({
        ...user,
        [event.target.name]:event.target.value,
    })
  }
  const [emailList, setEmailList] = useState(['Your_Email@example.com'])
  const handleChange1=(value: ChangeEvent<HTMLInputElement>,i: number)=>
  {
    const inputNow = [...emailList];
    inputNow[i] = value.target.value;
    setEmailList(inputNow);
  }
  const handleAdd1=()=>{
    const abc = [...emailList,'Your_Email@example.com']
    setEmailList(abc)
  }
  const [phoneList, setPhoneList] = useState(['0000000000'])
  
  const handleChange2=(value: ChangeEvent<HTMLInputElement>,i: number)=>
  {
    const inputNow = [...phoneList];
    inputNow[i] = value.target.value;
    setPhoneList(inputNow);
  }
  const handleAdd2=()=>{
    const abc = [...phoneList,'0000000000']
    setPhoneList(abc)
  }
  const i1={org:"Institute/University Name",deg:"Degree",major:"Major",startDate:"1000-01-01",endDate:"1000-01-01"}
  const [eduList,setEduList] = useState<Edu[]>([i1])

  const handleChange3=(value: ChangeEvent<HTMLInputElement>, i: number)=>
  {
    const inputNow = [...eduList];
    const id = value.target.id 
    if (id=="1")
    {
      inputNow[i].org=value.target.value
    }
    else if (id=="2")
    {
      inputNow[i].deg=value.target.value
    }
    else if (id=="3")
    {
      inputNow[i].major=value.target.value
    }
    else if (id=="4")
    {
      inputNow[i].startDate=value.target.value
    }
    else if (id=="5")
    {
      inputNow[i].endDate=value.target.value
    }
    setEduList(inputNow)
  }
  const handleAdd3=()=>{
    const abc = [...eduList,i1]
    setEduList(abc)
  }
  const i2={org:"Name of Organization",role:"Designation",startDate:"1000-01-01",endDate:"1000-01-01",respon:"Responsibilities"}
  const [expList,setExpList] = useState<Exp[]>([i2])
  const handleAdd4=()=>{
    const abc = [...expList,i2]
    setExpList(abc)
  }
  const handleChange4=(value: ChangeEvent<HTMLInputElement>, i: number)=>
  {
    const inputNow = [...expList];
    const id = value.target.id 
    if (id=="1")
    {
      inputNow[i].org=value.target.value
    }
    else if (id=="2")
    {
      inputNow[i].role=value.target.value
    }
    else if (id=="3")
    {
      inputNow[i].startDate=value.target.value
    }
    else if (id=="4")
    {
      inputNow[i].endDate=value.target.value
    }
    else if (id=="5")
    {
      inputNow[i].respon=value.target.value
    }
    setExpList(inputNow)
  }
  const i3={name:"Name of Project",startDate:"1000-01-01",endDate:"1000-01-01",respon:"Responsibilities"}
  const [proList,setProList] = useState<Pro[]>([i3])
  const handleAdd5=()=>{
    const abc = [...proList,i3]
    setProList(abc)
  }
  const handleChange5=(value: ChangeEvent<HTMLInputElement>, i: number)=>
  {
    const inputNow = [...proList];
    const id = value.target.id 
    if (id=="1")
    {
      inputNow[i].name=value.target.value
    }
    else if (id=="2")
    {
      inputNow[i].startDate=value.target.value
    }
    else if (id=="3")
    {
      inputNow[i].endDate=value.target.value
    }
    else if (id=="4")
    {
      inputNow[i].respon=value.target.value
    }
    setProList(inputNow)
  }
  const skills = ["ReactJS", "bootstrap", "html","css", "typerscript", ".net core", "C#", "mongodb", "Machine Learning", "NLP"]
  const [skill, setSkill] = useState(["c"]) 
  const handle=(value: string[])=>
  {
    setSkill(value)
  }
  return (
    <>
     {clicked.yes?<h1>Submitted Successfully!</h1>:<h1>Not Submitted Yet!</h1>}
     
      <form >
        <label>First Name:
          <input  type="text" value ={user.firstName} onChange={handleChange} name="firstName"/>
        </label>
        <br></br>
        <label>Last Name:
          <input type="text" value={user.lastName} onChange={handleChange} name="lastName"/>
        </label>
        <br></br>
        <label>Date of birth:
          <input  type="text" value={user.dob} onChange={handleChange} name="dob"  />
        </label>
        <br></br>
      </form>
        Emails:
            {
              emailList.map((item,i)=>{
                return <div>
                  <input value={item} onChange={e=>handleChange1(e,i)}/>
                </div>
              })
            }
            <button onClick={()=>handleAdd1()}>+</button>
            <br></br>
            <br></br>
        Phones:
            {
              phoneList.map((item,i)=>{
                  return <div>
                  <input value={item} onChange={e=>handleChange2(e,i)}/>
                  </div>
                })
            }
            <button onClick={()=>handleAdd2()}>+</button>
            <br></br>
            <br></br>
        Education_Detail:
            {
              eduList.map((item,i)=>{
                return <div>
                <br></br>
                  <input id ="1" value={item.org} onChange={e=>handleChange3(e,i)}/>
                <br></br>
                  <input id ="2" value={item.deg} onChange={e=>handleChange3(e,i)}/>
                <br></br>
                  <input id ="3" value={item.major} onChange={e=>handleChange3(e,i)}/>
                <br></br>
                  <input id ="4" value={item.startDate} onChange={e=>handleChange3(e,i)}/>
                <br></br>
                  <input id ="5" value={item.endDate} onChange={e=>handleChange3(e,i)}/>
                <br></br>
                </div>
              })
            }
            <button onClick={()=>handleAdd3()}>+</button>
            <br></br>
            <br></br>
        Experiences:
            {
              expList.map((item,i)=>{
                return <div>
                <br></br>
                  <input id ="1" value={item.org} onChange={e=>handleChange4(e,i)}/>
                <br></br>
                  <input id ="2" value={item.role} onChange={e=>handleChange4(e,i)}/>
                <br></br>
                  <input id ="3" value={item.startDate} onChange={e=>handleChange4(e,i)}/>
                <br></br>
                  <input id ="4" value={item.endDate} onChange={e=>handleChange4(e,i)}/>
                <br></br>
                  <input id ="5" value={item.respon} onChange={e=>handleChange4(e,i)}/>
                <br></br>
                </div>
              })
            }
            <button onClick={()=>handleAdd4()}>+</button>
            <br></br>
            <br></br>
        Project:
            {
              proList.map((item,i)=>{
                return <div>
                <br></br>
                  <input id ="1" value={item.name} onChange={e=>handleChange5(e,i)}/>
                <br></br>
                  <input id ="2" value={item.startDate} onChange={e=>handleChange5(e,i)}/>
                <br></br>
                  <input id ="3" value={item.endDate} onChange={e=>handleChange5(e,i)}/>
                <br></br>
                  <input id ="4" value={item.respon} onChange={e=>handleChange5(e,i)}/>
                  <br></br>
                </div>
              })
            }
            <button onClick={()=>handleAdd5()}>+</button>
            <br></br>
            <br></br>
        Skills:
        <div>
          <Multiselect isObject={false} onRemove={(e)=>{handle(e);}} onSelect={(e)=>{handle(e);}} options={skills}/>
        </div>
        <button onClick={()=>handleSubmit()}>Add</button>
    </>
  );
}

export default Create;