import React, { useState, useEffect } from 'react';
import ToDo from '../components/todo';
import Profile from '../components/profile';
import AddTask from '../components/addTask';
import db from '../firebase';

const Home = ()=>{

    const [openAdd, setOpenAdd] = useState(false)
    const [tasks, setTasks] = useState([])
    const [user, setUser] = useState(null)

    useEffect(()=> {
        db.collection('toDos').onSnapshot(snaptshot=> {
            setTasks(snaptshot.docs.map(doc => ({id: doc.id, task: doc.data()})))
        })
    }, [])

    const addUser = (name, birthDate) => {
        if  (name === ''){
            return alert('Falta el nombre')
        }
        db.collection('usuarios').add({
            birthDate,
            name
        })
        .catch(error => console.log(error))
        setUser({            
            
            name,
            birthDate
        })
    }


    const handleAdd = () => {
        setOpenAdd(!openAdd)        
    }
    
    const addTask = (title, description) => {
        if (title === ''){
            return alert('Escribe el titulo')
        }
        db.collection('toDos').add({
            title,
            description
        })
        .catch(error => console.log(error))
    }

    const deleteTask = (id) => {
        db.collection('toDos').doc(id).delete()
        .catch(error => console.log(error))
    }

    return (
        <div className="home">            
            <div className="container">
                <Profile handleAdd={handleAdd} user={user} createUser={addUser}  />
                <div>
                <AddTask handleAdd={handleAdd} addVar={openAdd} addTask={addTask} />

                <ul className='card__container'>
                    <span className='card__container-text'>Todo List</span>
                    {                        
                        tasks?.map(item => (
                            <li className='card-item' key={item.id}>
                                <ToDo titulo={item.task.title} descripcion={item.task.description} id={item.id} deleteTodo={deleteTask}/>                  
                            </li>
                        ))
                    }
                </ul>
                </div>
            </div>
        </div>
    );  
}
export default Home;