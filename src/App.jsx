import React from 'react'
import { useState } from 'react'
import { X } from 'lucide-react'
 

const App = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [notes, setNotes] = useState([])
  const hadlesubmit=(e)=> {
  e.preventDefault();
   const copytask = [...notes];
   copytask.push({title, text})
   setNotes(copytask);
   console.log(notes)
  setTitle('')
  setText('')
  }
  const handleDelete = (index) => {
    const copytask = [...notes];
    copytask.splice(index, 1);
    setNotes(copytask);
  }
  return (
    <div className=' h-screen lg:flex  bg-black '>
      <form onSubmit={
        (e)=> hadlesubmit(e)
       }
       className='flex items-start flex-col lg:w-full gap-8 p-8  '>
        <h1 className='font-bold text-2xl text-white'>Add Notes</h1>

         <input className=' h-12 w-full  border-2 rounded-2xl outline-none text-white p-4 font-medium text-lg'
         type="text"
         placeholder='Write Detail'
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value)
         }}
         />

        <textarea className=' p-2 h-40 w-full border-2 rounded-2xl outline-none text-white font-medium text-lg'
        value={text}
         placeholder='Enter Notes Heading'
         onChange ={(e)=>{
        setText(e.target.value)
         }}
        />

          <button className='border-2 h-12 w-full  rounded-2xl outline-none bg-white font-medium text-black active:bg-black'>
            Add Notes
          </button>

      </form>
      <div className='lg:w-full  h-full  lg:border-l-2 lg:border-white p-10 '>
        <h1 className='font-bold text-white text-2xl p-2'>Recent Notes</h1>
        <div className='flex flex-wrap  gap-4 h-full overflow-auto'>
           
         {notes.map(function(elem, id) {
  return (
    <div 
      key={id}
      className="h-52 w-40 rounded-2xl  py-2 px-2   bg-white  text-black"
    >
      <h2 onClick={() => handleDelete(id)} className='bg-black text-white rounded-full place-self-end'><X /></h2>
      <h2 className="font-bold p-2 text-xl leading-tight">
        {elem.title}
      </h2>

      <p className="pt-2 p-2 leading-tight text:cover overflow-auto line-clamp-5 font-semibold text-gray-500">
        {elem.text}
      </p>
    </div>
  );
})}
       </div>
      </div>
    </div>
  )
}

export default App
