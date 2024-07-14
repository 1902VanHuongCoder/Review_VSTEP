import Greetings from './components/Greetings';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Question from './components/Question';
function App() {

  return (

    <Router>
      <div className="relative max-w-full overflow-x-hidden min-h-screen bg-gradient-to-t from-[#088395] from-10% to-[#37B7C3] to-30% flex justify-center items-center">
        <Routes>

          <Route path="/greetings" element={<Greetings />} />
          <Route path="/question" element={<Question />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router >

  )
}

export default App
