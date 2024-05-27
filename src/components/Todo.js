import React, { useState } from 'react';

function Todo() {
  const [Tasks,setTasks] = useState([]);
  const [Newtasks,setNewtasks] = useState('');
  const [Editindex,setEditindex] = useState('');
  const [Edittasks,setEditTask] = useState('');
  
  function handleChange(e){
    setNewtasks(e.target.value)
  }

  function addtasks(){
    if(Newtasks.trim() !== ""){
      setTasks([...Tasks,Newtasks])
      setNewtasks('')
    }
   
  }

  function DeleteTask(index){
    const updatedtask = Tasks.filter((_,i) => i !== index);
    setTasks(updatedtask);
  }

  function HandleEditchange(e){
    setEditTask(e.target.value);
  }

  function Editing(index){
    setEditindex(index);
    setEditTask(Tasks[index]);
  }

  function SaveEdit(index){
    const updatedtask = Tasks.map((Task,i)=> i ===index ? Edittasks : Task);
    setTasks(updatedtask);
    setEditindex('');
    setEditTask('');

  }
  
  return (
    <>
      <div className='pt-5 px-2 md:pt-10 flex w-full h-screen justify-center'>
        <div className='pt-5 md:pt-10 md:px-10 px-2 w-full md:w-[60%] rounded-xl h-auto bg-violet-500'>
          <h1 className='text-center text-white text-[20px] font-bold pb-10'>ToDO-List</h1>
          <div className='flex justify-between'>
            <input className='text-white py-2 px-3 w-[70%] md:w-[70%] rounded-md' onChange={handleChange} type="text" placeholder='today`s task' value={Newtasks}  />
            <button className='w-[20%] px-3 py-2 rounded-lg text-black bg-white md:font-bold' onClick={addtasks} >Add</button>
          </div>
          <ol className=' py-5'>
            {Tasks.map((Task,index)=>(
              <li className='flex  items-center justify-between mt-2' key={index}>
                {Editindex === index ? (
                  <input className='text-white  py-2 px-3 rounded-md w-[70%]' type="text" onChange={HandleEditchange}  placeholder='' value={Edittasks} />
                ):
                (<span className=' text-white text-[15px] md:font-semibold'>{Task}</span>)}
                <div className=''>
                  {Editindex === index ?(
                    <button className=' rounded-md bg-green-600 px-3 py-2 text-white font-bold' onClick={()=> SaveEdit(index)}>Save</button>
                  )
                  :(
                    <div className='flex'>
                      <button className='rounded-md px-3 py-2 bg-blue-600 mr-3 text-white font-bold' onClick={()=>{Editing(index)}}>Edit</button>
                      <button className='rounded-md px-3 py-2 bg-red-600 text-white font-bold' onClick={() =>{DeleteTask(index)}}>Delete</button>
                    </div>
                  )
                  }
                </div>

              </li>
            ))}
          </ol>
        </div>

      </div>
    </>
  );
}

export default Todo;