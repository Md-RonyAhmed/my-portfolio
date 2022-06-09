import Navbar from '../components/Navbar';

import Sidebar from '../components/Sidebar';
import '../styles/globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
function MyApp({ Component, pageProps }) {
  return (
      <>
      <Header/>
        <div className="grid grid-cols-12 gap-6 px-5 my-4 pt-20 lg:mb-6 md:mb-16 sm:px-20 md:px-3 lg:px-3 xl:px-4 mb-12">
          {/* // do this div style later (after putting the content) */}
          <div className="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-200 lg:col-span-3 shadow-custom-light dark:shadow-custom-dark rounded">
            {/* //!sidebar */}
            <Sidebar />
          </div>
          <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark rounded lg:col-span-9 dark:bg-dark-200">
            {/* //!navbar */}
            <Navbar />
            {/* //!about */}
            <Component {...pageProps} />
          </div>
        </div>
        <Footer/>
      </>
  );
}

export default MyApp
