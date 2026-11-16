import './App.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from '../src/components/Navbar';
// import Banner from '../src/components/Banner';
// import MainLayout from './components/MainLayout';
// import Loading from './components/Loading';
// import { Suspense } from "react";
// import Footer from './components/Footer';

const dataPromise = async ()=>{
  const res = await fetch  ('/data.json');
  const data = res.json();
  return data;
}

function App() {
  return (
    <>  
        <Navbar/>
        {/* <Banner/>
        <Suspense fallback={<Loading/>}>
          <MainLayout dataPromise={dataPromise()} />
        </Suspense>
        <Footer/>
        <ToastContainer /> */}
    </>
  )
}

export default App
