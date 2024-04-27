"use client"
import BackGround from '@/components/bg';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { MdEmail } from "react-icons/md";

export default function Home() {
  const[email , setEmail] = useState('');
  const[name , setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const[loading , setLoading] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();

   try {
    setLoading(true)
     const response = await fetch('/api/sendEmail', {
       method: 'POST',
       headers: {
         'content-type': 'application/json'
       },
       body: JSON.stringify({
         email,
         name,
         subject,
         message
       })
     })
     console.log(await response.json())
     setLoading(false)
     toast.success("Email is Sended Successfully !!")
    
   } catch (error) {
    console.log(error);
   }
  }
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <form onSubmit={sendMail} className="h-full w-1/3 space-y-6 z-[10]">
        <div className="flex flex-col items-start w-full justify-start">
          <h1 className="text-5xl text-white font-extrabold   hover:underline ">Get  In 
          <span className='text-6xl hover:no-underline text-orange-400'> Contact</span></h1>
        </div>
        <div className="relative flex flex-col space-y-1">
          <label htmlFor="title" className="text-sm font-semibold text-white">
            Email
          </label>
         
          <input
            name="email"
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            placeholder="Email"
            className="relative rounded-xl border-2 border-white p-2"
          />
        </div>
        

        <div className="relative flex flex-col space-y-1">
          <label htmlFor="title" className="text-sm font-semibold text-white">
            Name or Company Name
          </label>
          <input
            name="name"
            type="name"
            id="name"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
            placeholder="Name or Company Name"
            className="rounded-xl border-2 border-white p-2"
          />
    </div>
        <div className="relative flex flex-col space-y-1">
          <label htmlFor="title" className="text-sm font-semibold text-white">
            Subject
          </label>
          <input
            name="title"
            type="text"
            id="title"
            required
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value)
            }}
            placeholder="What will you title this goal?"
            className="rounded-xl border-2 border-white p-2"
          />
        </div>
        <div className="relative flex flex-col space-y-1">
          <label htmlFor="title" className="text-sm font-semibold text-white">
           Message
          </label>
          <textarea
            name="description"
            id="description"
            required
            cols={10}
            rows={5}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
            }}
            placeholder=" What would you need help with?"
            className="rounded-xl border-2 border-white p-2"
          />
        </div>
        <button type='submit' className=" flex w-1/2 items-center justify-center space-x-3 rounded-lg bg-blue-600 p-2 text-white shadow-blue-500 hover:bg-blue-700 hover:shadow-md">
          <span>{loading? "Sending" : 'send'}</span>
        </button>
      </form>
      <BackGround />
    </main>
  )
}