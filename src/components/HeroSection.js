import React from "react";

const HeroSection = () => {
  return (
    <div
      className={`heroSection bg-center bg-no-repeat bg-cover max-w-full w-full max-h-full h-full pt-20 min-h-[80vh]`}
    >
      <div className="mx-auto container max-w-[1284px] relative">
        <div className="left-section max-w-full py-10">
          <h2 className="mx-auto font-Inter font-semibold text-center text-[52px] leading-[64px] text-white pt-4 w-[600px] ">
            Restaurants and more delivered to your door
          </h2>
          <p className="mx-auto font-Inter font-semibold text-center text-3xl text-white pt-4 w-[600px] ">
            Be one of the first to Join us.
          </p>
          <form>
            <div className="mx-auto flex flex-col justify-center pt-10 max-w-[350px] space-y-4">
              <input
                type="name"
                placeholder="Your name"
                aria-label="Your Name"
                className="border-none pl-4 py-2 outline-none font-Inter w-[350px]"
                autoComplete="off"
                required
              />
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Your Email"
                className="border-none pl-4 py-2 outline-none font-Inter w-[350px]"
                autoComplete="off"
                required
              />
              <button
                type="submit"
                className="text-white font-medium font-inter text-base py-[7px] px-4 bg-[#83ea00] rounded-md w-full"
              >
                Join Waitlist
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
