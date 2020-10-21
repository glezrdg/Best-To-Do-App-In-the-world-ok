import React, { useState } from 'react';
import Task from '../data';

const AddTask = ({ handleAdd, addVar, addTask }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const input = document.getElementById('input');

    const NewTask = (e, title, description) => {
        e.preventDefault()
        addTask(title, description)
        setTitle('')
        setDescription('')
        handleAdd()
    }

    return (
        <div className={addVar ? 'add__container open' : 'add__container'}>

            <button className="closeAdd" onClick={() => handleAdd()}>X</button>
            <form>
                <div className='form-group'>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Write a title' />
                </div>
                <div className='form-group' >
                    <textarea placeholder='Write a description' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className='form-group'>
                    <button className="addButtom" onClick={(e) => NewTask(e, title, description)}>Add</button>
                </div>
            </form>
        </div>
    );
}

export default AddTask;