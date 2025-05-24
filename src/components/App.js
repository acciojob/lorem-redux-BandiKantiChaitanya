
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./Reducer";

const App = () => {
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.data.items)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(info=>{
      dispatch(setData(info))
      setTimeout(() => setLoading(false), 300) })
    .catch(err=>console.log('error occured',err))
  },[dispatch])
  let [loading,setLoading]=useState(true)
  // console.log(data)
  return (
    <div>
        {/* Do not remove the main div */}
        <h1 className="heading" >A short Naration of Lorem Ipsum</h1>
         
        <p className="subHeading" ><b>Below Contains A title and Body gotten froma random API, Please take your time to Review</b></p>
        {loading &&  <h4>Loading...</h4> }
        {
          !loading &&
          <ul className="cardsContainer">
            {
              data.map((dta) => (
                <li key={dta.id} className="card">
                   <h4  >Title :</h4>  
              <p className="title" >{dta.title}</p>

              <h4>Body :</h4>  
              <p className="body" >{dta.body}</p>
                </li>
              ))
            }
          </ul>
        }
    </div>
  )
}

export default App
