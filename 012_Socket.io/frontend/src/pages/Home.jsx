import React, { useEffect,useState } from 'react'
import axios from 'axios'
const Home = () => {
    const [roomName, setroomName] = useState('')
    useEffect(() => {
      getRoom()
    
      return () => {
        
      }
    }, [])
    
    const handleSubmit=async (e)=>{
        e.preventDefault()
        await axios.post("https://localhost:3000/create")
        .then((res)=>{
            console.log(res);
            getRoom()
            
        })
        .catch((err)=>{
            console.log(err);
        
        })
    }

    const getRoom = async()=>{

        await axios.get("https://localhost:3000/allroom").then((res)=>{
            console.log(res);
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }
  return (
    <div>Home
    
<button className="mb-6 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
        Create Room
      </button>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter room name"
          name="room"
          value={roomName}
          onChange={(e) => setroomName(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
        >
          Create
        </button>
    </form>
    </div>
  )
}

export default Home