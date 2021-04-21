import React,{useEffect,useState} from 'react'

const GetUser=()=> {
    const [data,setData]=useState()
    useEffect(() => {
        const get=async()=>{
            const url='https://api.randomuser.me/'
            const response=await fetch(url)
            const data=await response.json();
            console.log(data.results[0])
            setData(data.results[0])
        }
       get()
    }, [])
    return (
        <div className="text-center">
            <h1>{data && data.name.title}&nbsp;{data && data.name.first}</h1> 
            <img src={data && data.picture.large} alt="invalid"/>
        </div>
    )
}

export default GetUser
