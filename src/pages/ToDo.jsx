import react from 'react'
import './toDo.css'

const ToDoItem = ({id ,title,description,isCompleted,updateHandler, deleteHandler}) => {
    return (
        <div className='ToDo'> 
        <div className='Title'>
            <h4>{title}</h4>
        </div>
        <div className='List'>
            <div className='list-content'>{description}
            </div>
            <div className='List-btn'>
            <input onChange={()=>updateHandler(id)} className='check' checked={isCompleted} type="checkbox"></input>
            <button onClick={()=>deleteHandler(id)} className='del-btn'>Delete</button>
            </div>
        </div>
         </div>
    )
}

export default ToDoItem