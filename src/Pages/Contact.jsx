import React from "react";

const Contact = () => {
  return (
    <section className="bg-white min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16">
           <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm mb-2">Get In Touch</span>
           <h2 className="text-4xl sm:text-5xl font-outfit font-bold text-dark text-center">Contact Us</h2>
           <div className="w-16 h-1 bg-dark mt-4 rounded-full"></div>
           <p className="text-gray-500 mt-6 max-w-xl text-center text-lg">
             We're here to help! Whether you have questions, need assistance, or
             just want to say hello, feel free to reach out to us.
           </p>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 sm:gap-16 items-start">
          
          {/* Form */}
          <div className="lg:col-span-3 bg-white p-6 sm:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
            <h3 className="text-2xl font-outfit font-bold text-dark mb-8">
              Send a Message
            </h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                 <div>
                   <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                     Your Name
                   </label>
                   <input
                     type="text"
                     id="name"
                     className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-700 focus:outline-none focus:border-dark focus:ring-1 focus:ring-dark transition-colors"
                     placeholder="John Doe"
                   />
                 </div>
                 <div>
                   <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                     Email Address
                   </label>
                   <input
                     type="email"
                     id="email"
                     className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-700 focus:outline-none focus:border-dark focus:ring-1 focus:ring-dark transition-colors"
                     placeholder="john@example.com"
                   />
                 </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-700 focus:outline-none focus:border-dark focus:ring-1 focus:ring-dark transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-700 focus:outline-none focus:border-dark focus:ring-1 focus:ring-dark transition-colors resize-none"
                  rows="6"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-dark text-white font-semibold py-3.5 px-8 rounded-full hover:bg-gray-800 transition-colors tracking-wide"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-8 bg-slate-50 p-6 sm:p-10 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-outfit font-bold text-dark mb-6">
              Contact Info
            </h3>
            
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
               <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center shrink-0">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                 </svg>
               </div>
               <div>
                 <h4 className="text-sm font-bold text-gray-800 uppercase tracking-widest mb-1">Office</h4>
                 <p className="text-gray-600 mt-1 leading-relaxed">123 Fashion Street,<br />Dhaka, Bangladesh 1212</p>
               </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
               <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center shrink-0">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                 </svg>
               </div>
               <div>
                 <h4 className="text-sm font-bold text-gray-800 uppercase tracking-widest mb-1">Phone</h4>
                 <p className="text-gray-600 mt-1">
                   <a href="tel:+8801234567890" className="hover:text-indigo-600 transition-colors">+880 1234 567 890</a>
                 </p>
               </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
               <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center shrink-0">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
               </div>
               <div>
                 <h4 className="text-sm font-bold text-gray-800 uppercase tracking-widest mb-1">Email</h4>
                 <p className="text-gray-600 mt-1">
                   <a href="mailto:support@fearstyle.com" className="hover:text-indigo-600 transition-colors">support@fearstyle.com</a>
                 </p>
               </div>
            </div>
            
             <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
               <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center shrink-0">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
               </div>
               <div>
                 <h4 className="text-sm font-bold text-gray-800 uppercase tracking-widest mb-1">Hours</h4>
                 <p className="text-gray-600 mt-1 text-sm leading-relaxed">Mon-Fri: 9am - 8pm<br />Sat-Sun: 10am - 6pm</p>
               </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
