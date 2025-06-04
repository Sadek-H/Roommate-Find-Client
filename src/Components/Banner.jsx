import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="carousel w-full h-[450px] overflow-hidden shadow-2xl mb-10">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-transparent flex items-center px-10 text-white">
            <div className="max-w-xl space-y-4">
              <h2 className="text-2xl md:text-4xl font-extrabold leading-tight poppins">
                Find Your <span className="text-primary">Perfect Roommate</span>
              </h2>
              <p className="text-lg md:text-xl poppins">
                Connect with trusted users and make your living experience
                better.
              </p>
              <button className="btn btn-primary mt-2 poppins">
                Get Started
              </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide3"
              className="btn btn-circle bg-white text-black hover:bg-primary hover:text-white"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-white text-black hover:bg-primary hover:text-white"
            >
              ❯
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent flex items-center px-10 text-white">
            <div className="max-w-xl space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
                Verified & Safe Listings
              </h2>
              <p className="text-lg md:text-xl">
                Your safety is our priority—explore only trusted roommate posts.
              </p>
              <button className="btn btn-secondary mt-2">
                Browse Listings
              </button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn btn-circle bg-white text-black hover:bg-secondary hover:text-white"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-white text-black hover:bg-secondary hover:text-white"
            >
              ❯
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img src="assets/journey.jpg" className="w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent flex items-center px-10 text-white">
            <div className="max-w-xl space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
                Start Your Journey Today
              </h2>
              <p className="text-lg md:text-xl">
                Create your profile and take the first step to hassle-free
                shared living.
              </p>
              <button className="btn btn-accent mt-2">Join Now</button>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn btn-circle bg-white text-black hover:bg-accent hover:text-white"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-white text-black hover:bg-accent hover:text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
