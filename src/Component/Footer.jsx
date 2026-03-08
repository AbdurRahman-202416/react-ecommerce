import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-gray-300 pt-16 pb-8 border-t border-gray-100">
      {/* Features Section */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 border-b border-gray-800 pb-12 mb-10">
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-outfit font-bold text-white tracking-tight">Why Shop With Us?</h1>
          <p className="text-gray-400 mt-2 font-medium">Discover the premium experience at our store.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Feature Item */}
          {[
            {
              title: "Cash on Delivery",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h18M9 21h6m-7-5h8a2 2 0 001.8-1.2L21 9H3l1.2 6.8A2 2 0 007 16z" />
            },
            {
              title: "Always Fresh",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
            },
            {
              title: "Premium Quality",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 16l4-4m0 0l4-4m-4 4H3m13 0h5" />
            },
            {
              title: "Support 24/7",
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16h-1v-4h-1m0 4h1v-4h1m-1-6.938a2 2 0 112 0v6.937a2 2 0 11-2 0V9.062z" />
            }
          ].map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center p-4 rounded-xl bg-gray-800/40 hover:bg-gray-800/80 transition-colors border border-gray-800">
              <div className="bg-white/10 text-white w-14 h-14 flex justify-center items-center rounded-full mb-4 ring-1 ring-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {feature.icon}
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-white tracking-wide">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Main Footer Links */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-center md:text-left">
          
          {/* Log/Brand */}
          <div className="w-full md:w-1/3">
             <h2 className="text-2xl font-outfit font-bold text-white mb-4 tracking-tight">FearStyle.</h2>
             <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0 leading-relaxed">
               Elevate your wardrobe with our premium collection of modern fashion explicitly curated for you.
             </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3">
            <h3 className="text-white font-semibold mb-4 tracking-wide uppercase text-xs">Quick Links</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 max-w-sm">
              {[
                "About Us", "Our Store", "Contact Us", "Return Policy",
                "Terms & Condition", "Privacy Policy", "FAQ"
              ].map((link, index) => (
                <p
                  key={index}
                  className="text-sm font-medium text-gray-400 hover:text-white cursor-pointer transition-colors"
                >
                  {link}
                </p>
              ))}
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-end">
             <h3 className="text-white font-semibold mb-4 tracking-wide uppercase text-xs">Follow Us</h3>
            <div className="flex space-x-5">
              {[
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/profile.php?id=61556698305870",
                  icon: (
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  ),
                },
                {
                  label: "Instagram",
                  href: "https://www.facebook.com/profile.php?id=61556698305870",
                  icon: (
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  ),
                },
              ].map((social, index) => (
                <Link key={index} to={social.href} className="text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-3 rounded-full">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    {social.icon}
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center flex flex-col items-center">
            <p className="text-sm text-gray-500 font-medium tracking-wide">&copy; {new Date().getFullYear()} FEARSTYLE CLOTHING LIMITED. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
