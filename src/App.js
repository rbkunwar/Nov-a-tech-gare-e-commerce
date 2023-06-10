import { Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import { FaBeer } from 'react-icons/fa';

function App() {
  toast.success("Rabindra")
  return (
 <div className="">
  <Button variant='danger'>
  <FaBeer />
  </Button>
  Hellow world
  <ToastContainer />
  </div>
  )
}

export default App;
