import Footer from './partials/Footer'
// import Navigation from './partials/Navigation'
import Topics from './Topics'
import {motion} from 'framer-motion';

const Home = () => {
  return (
    <motion.div
    initial={{ x: "100%", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.2 }}
    exit={{ x: "-100%" }}
    className='relative w-full min-h-screen bg-[#37B7C3]'>
        <div className=' max-w-[1024px] mx-auto h-full'>
            <Topics />
            <Footer />
        </div>
    </motion.div>
  )
}

export default Home