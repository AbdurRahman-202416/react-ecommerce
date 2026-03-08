import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
           <span className="text-indigo-600 font-semibold tracking-wider uppercase text-sm mb-2">Our Story</span>
           <h2 className="text-4xl sm:text-5xl font-outfit font-bold text-dark mb-4 tracking-tight">About FearStyle</h2>
           <div className="w-16 h-1 bg-dark rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-7xl mx-auto">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-dark/10 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1200"
                alt="About FearStyle"
                className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl font-outfit font-bold text-dark mb-6 leading-tight">
              Redefining Premium <br className="hidden sm:block" />
              <span className="text-indigo-600">Modern Fashion</span>
            </h3>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                FearStyle Clothing Limited is dedicated to providing top-notch apparel tailored to your 
                dynamic lifestyle. Our mission is to deliver high-quality contemporary fashion 
                that empowers individuals and builds confidence.
              </p>
              
              <p>
                With a passion for modern aesthetics and a commitment to excellence, we curate 
                collections that blend comfort, style, and durability. Every piece in our store is selected 
                with meticulous attention to detail to ensure you receive only the best.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6 pt-8 border-t border-gray-100">
               <div>
                 <h4 className="text-3xl font-bold text-dark font-outfit mb-1">10K+</h4>
                 <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Happy Clients</p>
               </div>
               <div>
                 <h4 className="text-3xl font-bold text-dark font-outfit mb-1">Premium</h4>
                 <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Quality Products</p>
               </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;
