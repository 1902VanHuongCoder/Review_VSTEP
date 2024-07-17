import Footer from './partials/Footer'
// import Navigation from './partials/Navigation'
import Topics from './Topics'

const Home = () => {
  return (
    <div className='relative w-full min-h-screen bg-white'>
        <div className=' max-w-[1024px] mx-auto h-full'>
            <Topics />
            <Footer />
        </div>
    </div>
  )
}

export default Home