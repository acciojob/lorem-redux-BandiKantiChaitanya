
import React, { useEffect } from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./Reducer";

const App = () => {
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.data.items)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(info=>{dispatch(setData(info))})
    .catch(err=>console.log('error occured',err))
  },[])
  // console.log(data)
  return (
    <div>
        {/* Do not remove the main div */}
        <h1 className="heading" >A short Narration of Lorem Ipsum</h1>
        <p className="subHeading" ><b>Below Contains a Tiltle and a Body gotten from a <br />
        random API, Please take your time to Review</b></p>
        <div className="cardsContainer">
        {
          data.map((dta)=>(
            <section key={dta.id} >
              <p><b>Title :</b>{dta.title}</p>
              <p><b>Body :</b>{dta.body}</p>
            </section>
          ))
        }
        </div>
    </div>
  )
}

export default App
