
import './App.css'
import Blog from './componants/navbar/Bolgs/Blog'
import Navbar from './componants/navbar/navbar'

function App() {
  

  return (


    <>

  <Navbar></Navbar>
  

  <div className="maincontaineer flex text-center ">
    <div className="leftcontainer w-[70%]">
     
      <Blog></Blog>
    </div>
    <div className="rightcontainer  w-[30%]">
     <h1>Riding time :0</h1>
     <h1>Book mark :0</h1>
    </div>
  </div>
 
    </>
  )
}

export default App
