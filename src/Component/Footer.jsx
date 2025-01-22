import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#213555] text-white py-4 ">
      <section className="mx-[10%] border-b-2 border-white py-2 mb-2 sm:py-8">
        <div className="container mx-auto">

          <div className="text-center py-1 sm:py-8 ">
            <h1 className="sm:text-4xl text-base font-bold text-gray-200">Why Shop With Us?</h1>
            <p className="text-gray-200 mt-2">Discover the benefits at our  store.</p>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-1">
            {/* Free Shipping */}
            <div className="flex flex-col items-center p-2 rounded-lg">
              <div className="bg-indigo-500 text-white w-12 h-12 flex justify-center items-center rounded-full mb-4">

                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M9 21h6m-7-5h8a2 2 0 001.8-1.2L21 9H3l1.2 6.8A2 2 0 007 16z" />
                </svg>
              </div>
              <h3 className="sm:text-2xl text-base font-semibold">Cash on Delivery</h3>

            </div>
            {/* Always Fresh */}
            <div className="flex flex-col items-center p-2 rounded-lg">
              <div className="bg-green-500 text-white w-12 h-12 flex justify-center items-center rounded-full mb-4">

                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="sm:text-lg text-base font-semibold">Always Fresh</h3>

            </div>
            {/* Superior Quality */}
            <div className="flex flex-col items-center p-2 rounded-lg">
              <div className="bg-yellow-500 text-white w-12 h-12 flex justify-center items-center rounded-full mb-4">

                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l4-4m0 0l4-4m-4 4H3m13 0h5" />
                </svg>
              </div>
              <h3 className="sm:text-lg text-base font-semibold"><span className="text-blue-500 sm:text-lg text-base">☆⋆</span> Best Quality</h3>

            </div>
            {/* Support */}
            <div className="flex flex-col items-center p-2 rounded-lg">
              <div className="bg-red-500 text-white w-12 h-12 flex justify-center items-center rounded-full mb-4">

                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m0 4h1v-4h1m-1-6.938a2 2 0 112 0v6.937a2 2 0 11-2 0V9.062z" />
                </svg>
              </div>
              <h3 className="sm:text-lg text-base font-semibold">Support-24/7</h3>

            </div>
          </div>
        </div>

      </section>


      <div className="container mx-auto  px-6 text-left space-y-6">
        {/* Navigation Links */}
        <section className="space-y-2">
          {[
            "About Us",
            "Our Store",
            "Contact Us",
            "Return Policy",
            "Terms & Condition",
            "Privacy Policy",
            "FAQ",
          ].map((link, index) => (
            <p
              key={index}
              className="text-sm sm:text-2xl font-medium hover:underline cursor-pointer"
            >
              {link}
            </p>
          ))}
        </section>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          {[
            {
              label: "Facebook",
              href: "https://www.facebook.com/profile.php?id=61556698305870",
              icon: (
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              ),
            },
            {
              label: "Instagram",
              href: "https://www.facebook.com/profile.php?id=61556698305870",
              icon: (
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              ),
            },
          ].map((social, index) => (
            <Link key={index} to={social.href} className="hover:text-gray-100 justify-center">
              {social.icon}
            </Link>
          ))}
        </div>

        {/* Copyright Section */}
        <p className="text-sm text-center">&copy; {new Date().getFullYear()}, FEARSTYLE CLOTHING LIMITED</p>
      </div>
    </footer>
  );
};

export default Footer;
