import Greetings from './components/Greetings';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Question from './components/Question';
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
import AddQuestionProtected from './components/AddQuestion';
import AddTopicWithAuth from './components/AddTopic';
import { CustomeFallback } from './components/helpers/HOC-helpers';
import { withErrorBoundary, withTheme } from './HOCs';
import HomeIsMeasuredPerformance from './components/Home';
function App() {
  const { loading } = useContext(LoadingContext);
  const { notification } = useContext(NotificationContext);
  const { nocomplete } = useContext(NocompleteContext);
  const { correctAnswerNo } = useContext(correctAnswerNoContext);
  const { wrongAnswerNo } = useContext(wrongAnswerNoContext);
  return (

    <Router>
      <div className="relative max-w-full overflow-x-hidden min-h-screen bg-gradient-to-t from-[#088395] from-10% to-[#37B7C3] to-30% flex justify-center items-center">
        <AnimatePresence mode='wait'> 
          <Routes>
            <Route path="/*" element={<Greetings />} />
            <Route path="/add/question" element={<AddQuestionProtected requireAuth={true} requiredRole='admin' />} />
            <Route path="/partsoftopic/*" element={<Partsoftopic />} />
            <Route path="/add/topic" element={<AddTopicWithAuth requiredRole='user' fallback={CustomeFallback} />} />
            <Route path="/questions/*" element={<Question />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" index element={<HomeIsMeasuredPerformance />} />

            {/* Error route */}
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </AnimatePresence>
        {loading && <Loading />}
        <AnimatePresence> {notification && !loading && <Complete />}</AnimatePresence>
        <AnimatePresence> {nocomplete && !loading && <Nocomplete />}</AnimatePresence>
        <AnimatePresence> {correctAnswerNo && !loading && <CorrectNo />}</AnimatePresence>
        <AnimatePresence> {wrongAnswerNo && !loading && <WrongNo />}</AnimatePresence>

      </div>
    </Router >

  )
}

const AppWithErrorBoundary = withTheme(withErrorBoundary(App));

export default AppWithErrorBoundary;
