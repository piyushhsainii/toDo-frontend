import React, { useContext, useEffect, useState } from 'react'
import '../pages/Home.css'
import axios from 'axios'
import { server } from '../App'
import toast from 'react-hot-toast'
import ToDoItem from './ToDo'
import { Context } from '../main'
import { Navigate } from 'react-router-dom'
export default function Home() {


    const [Title,setTitle] = useState([])
    const [Description,setDesc] = useState([])
    const [ loading , setLoading] = useState(false)
    const [ task , setTask ] = useState([])
    const [ load, setLoad] = useState(false)

    const { authenticated , refresh, setRefresh } = useContext(Context)

    const updateHandler = async(id) =>{
        try {
          const {data} =  await axios.put(`${server}/${id}`,{},{
            withCredentials:true
        })
            
        toast.success("Task completed")

          setLoad((prev)=>!prev)
        } catch (error) {
           
        }
    }
    const deleteHandler = async ( id) =>{
        try {
            const {data} =   await axios.delete(`${server}/${id}`,{},{
              withCredentials:true,
            });

              toast.success("Task has been deleted")

           setLoad((prev)=>!prev)
              } catch (error) {
                  toast.error(error)
              }

    }

    const submitHandler = async (e) =>{
        e.preventDefault();
        setLoading(true)
        try {
          await axios.post(`${server}/new`,{
            Title,Description
          },{
            "Content-Type":"application/json",
            withCredentials:true
          })  
          toast.success("Task Created")
          setTitle('')
          setDesc('')
          setLoading(false)
          setRefresh((prev) => !prev)
          console.log(refresh)
          setLoad((prev)=>!prev) 
        } catch (error) {
            console.log(error)
            toast.error("Error")
            setLoading(false)
        }
    }
    useEffect(()=>{
            axios.get(`${server}/my`,{
                withCredentials:true
            }).then(
                (res)=>{
                    setTask(res.data)
                }
            )
        },[load])

        if(!authenticated) return <Navigate to={"/login"}/>

    return (
        <>
            <div>
                <div className="container">
                    <form onSubmit={submitHandler}>
                        <div className="form-group">
                            <label htmlFor="name">Title:</label>
                            <input type="text"
                                value={Title}
                                onChange={(e) => setTitle(e.target.value)}
                                id="name"
                                name="name"
                                placeholder="Enter your Task Title" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <input type="text"
                                id="description"
                                value={Description}
                                onChange={(e) => setDesc(e.target.value)}
                                name="description"
                                placeholder="Enter a description" />
                        </div>
                        <input type="submit"  disabled={loading} value="Create Task" />
                    </form>
                </div>
                <div> 
                 {
                        authenticated ? 
                        task.map((item)=>(
                            <ToDoItem key={item._id}
                              title={item.Title}
                               description={item.Description}
                               isCompleted={item.isCompleted}
                               updateHandler={updateHandler}
                               deleteHandler={deleteHandler}
                               id={item._id}      
                               /> )) : <p></p>       
                    }

                    
                </div>
            </div>
        </>
    )
}