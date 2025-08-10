import React from "react";
import heroImage from "../../assets/images/healtea-heroimg.png";

const HeroSection = () => {
  return (
    <>
      <section className="py-32 flex flex-col md:flex-row items-center px-20 bg-brand-100 border-b-8 border-brand-500">
        {/* left content */}
        <div className="w-full md:w-1/2 px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Sip into wellness <br /> one cup at a time
          </h1>
          <p className="w-96 text-lg text-gray-700 md-text-xl mb-8">
            Discover premium Japanese teas crafted for balance, energy, and
            calm.
          </p>
          <button className="bg-accent-500 hover:bg-accent-700 text-gray-50 font-semibold px-6 py-3 rounded-lg transition-all duration-300 ">
            Explore our Teas
          </button>
        </div>

        {/* right content */}
        <div className="w-full md:w-1/2">
          <img
            src={heroImage}
            alt="featured product"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
