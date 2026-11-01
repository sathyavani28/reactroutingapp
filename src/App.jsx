import { BrowserRouter as Router } from "react-router-dom"
import NavBar from "./pages/NavBar"


function App() {
  
  return (
    <div>
      
      <h2 style={{textAlign:"center"}}>React Router Demo</h2>

      <Router>
      <NavBar/>
      </Router>

    </div>
  )
}

export default App
