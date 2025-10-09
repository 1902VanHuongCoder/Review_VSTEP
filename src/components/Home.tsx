import Footer from './partials/Footer'
import { withPerformanceMonitoring, withTheme } from '../HOCs';
import NavigationWithTheme from './partials/Navigation';
import TopicsWithFetchingHOC from './Topics';

const Home = () => {

  return (
    <div
      className='relative w-full min-h-screen bg-primary-bg dark:bg-slate-400'>
      <div className=' max-w-[1024px] mx-auto h-full'>
        <NavigationWithTheme />
        <TopicsWithFetchingHOC  />
        <Footer />
      </div>
    </div>
  )
}

const HomeIsMeasuredPerformance = withTheme(withPerformanceMonitoring(Home)); 
export default HomeIsMeasuredPerformance;