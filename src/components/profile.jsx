import React, { useState } from  'react';


const Profile = ({ handleAdd, user, createUser }) => {

    const [form, setform] = useState(false)
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    
    function create(name, date){
        if(name === ''){
            alert('llena los campos :)')
        }else{
            createUser(name, date)
            setform(false)
        }
        
    }

    

    return (
        <div className='profile__container'>
            <div className='profile-image'>
                <img src='https://cdn4.iconfinder.com/data/icons/linecon/512/photo-512.png' alt='profile' />                
            </div>
            <div className="profile__spans">
                {
                    user ? 
                    <div>
                        <h3>Nombre:</h3>
                        <h3 className='profile-titles'>{user.name}</h3>
                        <h3 className='profile-titles'>Fecha de Nacimiento: {user.birthDate}</h3>
                    </div>
                    : null
                }
                <div className={form && 'none'}>
                    <h3 className={!user ? 'navbar__menu-link ' : 'none'} onClick={()=> setform(true)}>Profile</h3>
                    <h3 className='navbar__menu-link add' onClick={()=> handleAdd()}>Añadir Tarea +</h3>
                </div>
                <div className={form ? 'view' : 'none'}>
                    <input className='mb-2' type="text" placeholder="Nombre" value={name} onChange={(e)=> setName(e.target.value)} />
                    <input className='mb-2' value={date} type="date" onChange={(e)=> setDate(e.target.value)} />
                    <div className="profile-buttons">
                        
                        <button onClick={()=> create(name, date)}>Save</button>
                        <button onClick={() => setform(false)}>Cancel</button>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Profile;