import { ChangeEvent, useState } from "react";
import {Pro,Exp,Edu} from './Applicant';
import { ApplicantService } from "./ApplicantService";

export interface IUser {
    firstName:string,
    lastName:string,
    dob:string
}
interface IState
{
    loading:boolean,
    errorMsg:string
}

const Create: React.FC=()=>
{
  const [clicked,setclicked] = useState(false)
  const [state,setState] = useState<IState>({
    loading:false,
    errorMsg:""
  })
  const [user, setUser] = useState<IUser>({
      firstName:"",
      lastName:"",
      dob:""
  })
  const handleChange =(event: ChangeEvent<HTMLInputElement>):void=>{
    setUser({
        ...user,
        [event.target.name]:event.target.value,
    })
  }
  const [emailList, setEmailList] = useState([""])
  const handleChange1=(value: ChangeEvent<HTMLInputElement>,i: number)=>
  {
    const inputNow = [...emailList];
    inputNow[i] = value.target.value;
    setEmailList(inputNow);
  }
  const handleAdd1=()=>{
    const abc = [...emailList,""]
    setEmailList(abc)
  }

  const handleRemove1=(i:number)=>{
    emailList.splice(i-1,1)
  }
  const [phoneList, setPhoneList] = useState([""])
  
  const handleChange2=(value: ChangeEvent<HTMLInputElement>,i: number)=>
  {
    const inputNow = [...phoneList];
    inputNow[i] = value.target.value;
    setPhoneList(inputNow);
  }
  const handleAdd2=()=>{
    const temp = [...phoneList,""]
    setPhoneList(temp)
  }
  const handleRemove2=(i:number)=>{
    phoneList.splice(i-1,1)
  }
  const var1={org:"",deg:"",major:"",startDate:"",endDate:""}
  const [eduList,setEduList] = useState<Edu[]>([var1])

  const handleChange3=(value: ChangeEvent<HTMLInputElement>, i: number)=>
  {
    const inputNow = [...eduList];
    const id = value.target.id 
    if (id==="1")
    {
      inputNow[i].org=value.target.value
    }
    else if (id==="2")
    {
      inputNow[i].deg=value.target.value
    }
    else if (id==="3")
    {
      inputNow[i].major=value.target.value
    }
    else if (id==="4")
    {
      inputNow[i].startDate=value.target.value
    }
    else if (id==="5")
    {
      inputNow[i].endDate=value.target.value
    }
    setEduList(inputNow)
  }
  const handleAdd3=()=>{
    const temp = [...eduList,var1]
    setEduList(temp)
  }

  const handleRemove3=(i:number)=>{
    eduList.splice(i-1,1)
  }
  const var2={org:"",role:"",startDate:"",endDate:"",respon:""}
  const [expList,setExpList] = useState<Exp[]>([var2])
  const handleAdd4=()=>{
    const temp = [...expList,var2]
    setExpList(temp)
  }
  const handleChange4=(value: any, i: number)=>
  {
    const inputNow = [...expList];
    const id = value.target.id 
    if (id==="1")
    {
      inputNow[i].org=value.target.value
    }
    else if (id==="2")
    {
      inputNow[i].role=value.target.value
    }
    else if (id==="3")
    {
      inputNow[i].startDate=value.target.value
    }
    else if (id==="4")
    {
      inputNow[i].endDate=value.target.value
    }
    else if (id==="5")
    {
      inputNow[i].respon=value.target.value
    }
    setExpList(inputNow)
  }
  const handleRemove4=(i:number)=>{
    expList.splice(i-1,1)
  }
  const var3={name:"",startDate:"",endDate:"",respon:""}
  const [proList,setProList] = useState<Pro[]>([var3])
  const handleRemove5=(i:number)=>{
    proList.splice(i-1,1)
    setProList(proList)
  }
  const handleAdd5=()=>{
    const temp = [...proList,var3]
    setProList(temp)
  }
  const handleChange5=(value: any, i: number)=>
  {
    const inputNow = [...proList];
    const id = value.target.id 
    if (id==="1")
    {
      inputNow[i].name=value.target.value
    }
    else if (id==="2")
    {
      inputNow[i].startDate=value.target.value
    }
    else if (id==="3")
    {
      inputNow[i].endDate=value.target.value
    }
    else if (id==="4")
    {
      inputNow[i].respon=value.target.value
    }
    setProList(inputNow)
  }
  const [skill,setSkill] = useState("")
  const [tempSkill, setTempSkill] = useState("")
  const handleChange6=(event: ChangeEvent<HTMLInputElement>):void=>{
    setTempSkill(event.target.value)
  }
  const handleAdd6 =():void =>{
    setSkill(skill+" "+tempSkill)
    setTempSkill("")
  }
  const handleSubmit = ():void =>{
    setState({loading:true,errorMsg:""})
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
    ApplicantService.post(model).then(res=>setState({
      ...state,loading:false,errorMsg:""
    }))
    .catch(err=>setState({
      ...state, loading:false, errorMsg:err.message
    }))
    setclicked(true)
  }

  if(clicked)
  {
    if(state.errorMsg)
    {
      return (
        <>
          <p>Error: {state.errorMsg}</p>
        </>
      )
    }
    else if(state.loading)
    {
      return (
        <>
          <h1>Loading....</h1>
        </>
      )
    }
    return (
      <>
        <h1>Submitted Successfully!</h1>
      </>
    )
  }
  return (
    <>    
    <div className="container"> 
      <form >
        <div style={{padding: 5}}>
          <label> First Name: 
          <input type="text" size={30} defaultValue={user.firstName} onChange={handleChange} name="firstName" placeholder="First Name" />
          </label>
        </div>
        <div style={{padding: 5}}>
          <label> Last Name: 
          <input type="text" size={30} value={user.lastName} onChange={handleChange} name="lastName" placeholder="Last Name"/>
          </label>
        </div>
        <div style={{padding: 5}}>
          <label> Date of birth: 
          <input  type="date" value={user.dob} onChange={handleChange} name="dob" placeholder="D.O.B."/>
          </label>
        </div>
      </form>
        <div style={{padding: 5}}>
        Emails:
        </div>
            {
              emailList.map((item,i)=>{
                return (
                <>
                  <div style={{padding: 5}}>
                    <input value={item} size={30} type="email" onChange={e=>handleChange1(e,i)} placeholder="Your_Email@example.com"/>
                    <button onClick={()=>handleRemove1(i)}  className="btn btn-close" aria-label="Close"></button>
                  </div>
                </>
                )
              })
            }
            <div style={{paddingTop: 5, paddingBottom: 20, paddingLeft: 5}}>
              <button onClick={()=>handleAdd1()} className="btn btn-success">Add Email</button>
            </div>
        <div style={{padding: 5}}>
        Phones:
        </div>
            {
              phoneList.map((item,i)=>{
                  return (
                  <>
                  <div style={{padding: 5}}>
                    <input value={item} size={30} onChange={e=>handleChange2(e,i)} placeholder="+910000000000"/>
                    <button onClick={()=>handleRemove2(i)}  className="btn btn-close" aria-label="Close"></button>
                  </div>
                  </>
                  )
                })
            }
            <div style={{paddingTop: 5, paddingBottom: 20, paddingLeft: 5}}>
              <button onClick={()=>handleAdd2()} className="btn btn-success">Add Phone</button>
            </div>
        <div style={{padding: 5}}>
        Educational Details:
        </div>
            {
              eduList.map((item,i)=>{
                return (
                  <>
                 <div style={{paddingTop: 20}}>
                <div style={{padding: 2}}>
                  <input id ="1" type="text"  size={30} value={item.org} onChange={e=>handleChange3(e,i)} placeholder="Institute/University Name"/>
                  <button onClick={()=>handleRemove3(i)}  className="btn btn-close" aria-label="Close"></button>
                </div>
                <div style={{padding: 2}}>
                  <input id ="2" type="text" size={30} value={item.deg} onChange={e=>handleChange3(e,i)} placeholder="Degree"/>
                </div>
                <div style={{padding: 2}}>
                  <input id ="3" type="text" size={30} value={item.major} onChange={e=>handleChange3(e,i)} placeholder="Major"/>
                </div>
                <div style={{padding: 2}}>
                  Start Date: <input id ="4" type="date"value={item.startDate} onChange={e=>handleChange3(e,i)} placeholder="Start Date"/>
                </div>
                <div style={{padding: 2}}>
                  <input type="checkbox" id=""/>
                  <label> Ongoing</label>
                </div>
                <div style={{padding: 2}}>
                  End Date: <input id ="5" type="date" value={item.endDate} onChange={e=>handleChange3(e,i)}/>
                </div>
                </div>
                </>
                )
              })
            }
            <div style={{paddingTop: 5, paddingBottom: 20, paddingLeft: 5}}>
              <button onClick={()=>handleAdd3()} className="btn btn-success">Add Education</button>
            </div>
        <div style={{padding: 5}}>
        Experiences:
        </div>
            {
              expList.map((item,i)=>{
                return (
                <>
                <div style={{paddingTop: 20}}>
                <div style={{padding: 2}}>
                  <input id ="1" type="text" size={30} value={item.org} onChange={e=>handleChange4(e,i)} placeholder="Name of the Organization"/>
                  <button onClick={()=>handleRemove4(i)}  className="btn btn-close" aria-label="Close"></button>
                </div>
                <div style={{padding: 2}}>
                  <input id ="2" type="text" size={30} value={item.role} onChange={e=>handleChange4(e,i)} placeholder="Role/Designation"/>
                </div>
                <div style={{padding: 2}}>
                Start Date: <input id ="3" type="date" value={item.startDate} onChange={e=>handleChange4(e,i)} />
                </div>
                <div style={{padding: 2}}>
                  <input type="checkbox" id=""/>
                  <label> Ongoing</label>
                </div>
                <div style={{padding: 2}}>
                  End Date: <input id ="4" type="date" value={item.endDate} onChange={e=>handleChange4(e,i)} />
                </div>
                <div style={{padding: 2}}>
                  <textarea value={item.respon} id ="5" className="form-control" onChange={e=>handleChange4(e,i)}  style={{height: 125}} placeholder="Role and Responsibilities" />
                </div>
              </div>
              </>
                )
              })
            }
            <div style={{paddingTop: 5, paddingBottom: 20, paddingLeft: 5}}>
              <button onClick={()=>handleAdd4()}className="btn btn-success" >Add Experience</button>
            </div>
        <div style={{padding: 5}}>
        Projects:
        </div>
            {
              proList.map((item,i)=>{
                return (
                  <>
                  <div style={{paddingTop: 20}}>
                  <div style={{padding: 2}}>
                  <input id ="1" type="text" size={30} value={item.name} onChange={e=>handleChange5(e,i)} placeholder="Name of the project"/>
                  <button onClick={()=>handleRemove5(i)}  className="btn btn-close" aria-label="Close"></button>
                  </div>
                  <div style={{padding: 2}}>
                    Start Date: <input id ="2" type="date" value={item.startDate} onChange={e=>handleChange5(e,i)} />
                  </div>
                  <div style={{padding: 2}}>
                    <input type="checkbox" id=""/>
                    <label> Ongoing</label>
                  </div>
                  <div style={{padding: 2}}>
                    End Date: <input id ="3" type="date" value={item.endDate} onChange={e=>handleChange5(e,i)} />
                  </div>
                  <div style={{padding: 2}}>
                    <textarea value={item.respon} id ="4" className="form-control" onChange={e=>handleChange5(e,i)}  style={{height: 125}} placeholder="Role and Responsibilities" />
                  </div>
                  </div>
                  </>
                )
              })
            }
            <div style={{paddingTop: 5, paddingBottom: 20, paddingLeft: 5}}>
            <button onClick={()=>handleAdd5()} className="btn btn-success">Add Project</button>
            </div>
        Skills:
        <div>
        <div>
          <h3>{skill}</h3>
        </div>
        <div>
          <input onChange={handleChange6} type="text" size={45} placeholder="Type your Skill and click Add!"/>
          <button onClick={()=>handleAdd6()} className="btn btn-success">Add!</button>
        </div>
        <div>
          <button onClick={()=>handleSubmit()} className="btn btn-primary">Submit</button>
        </div>
        </div>
        </div>
    </>
  )
}

export default Create;