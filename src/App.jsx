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

// Layout component that includes Navbar and Footer
const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  const [count, setCount] = useState(10);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories/:id" element={<Categories />} />
          <Route path="/order/:id" element={<Order />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Nofound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;