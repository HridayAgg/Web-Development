import React, { useEffect,useState } from 'react'
import axios from "axios"
import "./home.css"
const Home = () => {

    const [ProductData,setProductData] = useState([])
    useEffect(() => {
      getdata()
      
    }, [])
    const getdata = async()=>{
        await axios.get("http://localhost:3000/")
      .then((res)=>{
        console.log(res.data.products);
        setProductData(res.data.products)
      })
      .catch((err)=>{
        console.log("err");
        console.log(err);
        
      })
    }
  return (
    <div>

    </div>
  )
}

export default Home