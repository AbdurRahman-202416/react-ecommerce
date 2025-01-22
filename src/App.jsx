import { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Home } from './Pages/Home';
import About from './Pages/About';
import Nofound from './Pages/Nofound';
import Categories from './Pages/Categories';
import Order from './Pages/Order';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Contact from './Pages/Contact';
import apiRequest from './Axios';

// Layout component that includes Navbar, Footer, and Loader
const Layout = ({ loader }) => {
  return (
    <div className="relative">
      {loader && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-10 bg-indigo-900">
          <img
            className="w-8 h-8 sm:w-16 sm:h-16 animate-spin"
            src="https://www.svgrepo.com/show/199956/loading-loader.svg"
            alt="Loading icon"
          />
        </div>
      )}
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  const [loader, setLoader] = useState(false);

  apiRequest.interceptors.request.use((req) => {
    setLoader(true);
    return req;
  });

  apiRequest.interceptors.response.use(
    (res) => {
      setLoader(false);
      return res;
    },
    (error) => {
      setLoader(false);
      return Promise.reject(error);
    }
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout loader={loader} />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories/:id" element={<Categories />} />
          <Route path="/order/:id" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Nofound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
