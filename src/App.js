import { Outlet } from "react-router-dom"; //Allows the children from the parent to be shown
import Header from "./components/Header"

const App = () => {
  return(
  <div className="App">
    <Header/>
    <Outlet/> 
  </div>
  )
}

export default App