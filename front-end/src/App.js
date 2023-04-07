
import './App.css';
import Nav from './components/Nav'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Footer from './Footer';
//import Form from "./components/Form";
import SignUp from './components/SignUp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import { Button } from 'react-bootstrap';
import About from './components/About';
//import Symptom from './components/Symptom';
//import Resources from './components/Resources';
import Profile from './components/Profile';
import Chat from './components/Chat';
import More from './components/More';


function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Nav />
    <Routes>

       <Route element={<PrivateComponent />}>
      <Route path="/" element={<Chat/>} />
      <Route path="/add" element={<AddProduct/>} />
      <Route path="/more" element={<More/>} />
      <Route path="/update" element={<About/>} />
      <Route path="/Logout" element={<h1>Sign out</h1>} />
      <Route path="/profile" element={<Profile/>} />

    
      
      </Route>
      
      <Route path="/signup" element={<SignUp/>} />

       <Route path="/login" element={<Login/>} />
      </Routes>
      
      </BrowserRouter>
      
    
      <Footer />
      
      </div> 
      
      );
}

export default App;
