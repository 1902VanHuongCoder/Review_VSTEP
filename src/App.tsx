import Greetings from './components/Greetings';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Question from './components/Question';
import AddQuestion from './components/AddQuestion';
import AddTopic from './components/AddTopic';
import Loading from './components/partials/Loading';
import { useContext } from 'react';
import { LoadingContext } from './contexts/LoadingContext';
import Complete from './components/partials/Complete';
import { NotificationContext } from './contexts/NotificationContext';
import { AnimatePresence } from 'framer-motion';
import Nocomplete from './components/partials/Nocomplete';
import { NocompleteContext } from './contexts/Nocomplete';
import Partsoftopic from './components/Partsoftopic';
import CorrectNo from './components/partials/CorrectNo';
import WrongNo from './components/partials/WrongNo';
import { correctAnswerNoContext } from './contexts/CorrectAnswerNo';
import { wrongAnswerNoContext } from './contexts/WrongAnswerNo';
import ErrorPage from './components/partials/ErrorPage';
function App() {
  const { loading } = useContext(LoadingContext);
  const { notification } = useContext(NotificationContext);
  const { nocomplete } = useContext(NocompleteContext);
  const { correctAnswerNo } = useContext(correctAnswerNoContext);
  const { wrongAnswerNo } = useContext(wrongAnswerNoContext);
  return (

    <Router>
      <div className="relative max-w-full overflow-x-hidden min-h-screen bg-gradient-to-t from-[#088395] from-10% to-[#37B7C3] to-30% flex justify-center items-center">
        <Routes>
          <Route path="/Review_VSTEP/greetings" element={<Greetings />} />
          <Route path="/Review_VSTEP/add/question" element={<AddQuestion />} />
          <Route path="/Review_VSTEP/partsoftopic/*" element={<Partsoftopic />} />
          <Route path="/Review_VSTEP/add/topic" element={<AddTopic />} />
          <Route path="/Review_VSTEP/questions/*" element={<Question />} />
          <Route path="/Review_VSTEP/signup" element={<Signup />} />
          <Route path="/Review_VSTEP/login" element={<Login />} />
          <Route path="/Review_VSTEP/" element={<Home />} />

          {/* Error route */}
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        {loading && <Loading />}
        <AnimatePresence> {notification && !loading && <Complete />}</AnimatePresence>
        <AnimatePresence> {nocomplete && !loading && <Nocomplete />}</AnimatePresence>
        <AnimatePresence> {correctAnswerNo && !loading && <CorrectNo />}</AnimatePresence>
        <AnimatePresence> {wrongAnswerNo && !loading && <WrongNo />}</AnimatePresence>

      </div>
    </Router >

  )
}

export default App
