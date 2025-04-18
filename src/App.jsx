
import { useState } from 'react'
import './App.css'
import Blog from './componants/navbar/Bolgs/Blog'
import Navbar from './componants/navbar/navbar'
import Animation from './Animation'



function App() {
  
  const [reading,setReading]= useState(0)

  const [bookmarks,setBookmarks]=useState([])
  console.log(bookmarks);

  return (


    <>

  
  
  <Navbar></Navbar>
  <Animation></Animation>
  <div className="maincontaineer flex text-center ">
    <div className="leftcontainer w-[70%]">
     
      <Blog setReading={setReading} setBookmarks={setBookmarks} reading={reading} bookmarks={bookmarks} ></Blog>
      
    </div>
    <div className="rightcontainer  w-[30%]">
     <h1 className=' text-white'>Riding time :{reading}</h1>
     <h1 className=' text-white'>Book mark :{bookmarks.length}</h1>
     <div>
      {
        bookmarks.map((book)=><h1>{book}</h1>)
      }
     </div>
    </div>
  </div>
      
    </>
  )
}

export default App
