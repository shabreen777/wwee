import React,{useState} from 'react'

const ComplainRegister=()=> {
    const [name,setName]=useState()
    const [c,setC]=useState()

    const nameHandler=(event)=>{
        setName(event.target.value)
    }
    const complaintHandler=(event)=>{
        setC(event.target.value)
    }
    const submitHandler=()=>{
        let number=Math.floor(Math.random() * 10000000) + 999999;
        let msg='Thanks'+" "+name+'\n Your Complaint was Submited \n ID is'+" "+number
        alert(msg)
    }

    return (
        <div className="text-center mt-5">
            <form onSubmit={submitHandler}>
                <div><h2 style={{color:"red"}}>Register your complaints here !!!</h2></div>
                <span>Name:</span>
                <input type="text" onChange={nameHandler} value={name}/><br/><br/>
                <span>Complaint:</span>
                <input type="text" onChange={complaintHandler} value={c}/><br/><br/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}

export default ComplainRegister
