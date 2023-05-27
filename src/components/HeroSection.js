import React from "react";

const HeroSection = () => {
  return (
    <div
      className={`heroSection relative bg-center bg-no-repeat bg-cover w-full max-h-full h-full pt-20 min-h-[65vh] lg:min-h-screen`}
    >
      <div className="mx-auto container xl:max-w-[1440px] relative xl:px-10 md:px-6 px-4 ">
        <div className="max-w-full pt-8 md:pt-20 lg:pt-36">
          <h2 className="f-u-b font-semibold text-left text-[28px] leading-[32px] md:text-[36px] md:leading-[44px] lg:text-[52px] lg:leading-[64px] text-black mt-4 w-full flex-wrap break-words flex max-w-[560px] ">
            Order food to your door
          </h2>
          <form>
            <div className="pt-10 flex md:flex-row flex-col space-y-3 md:space-y-0 md:space-x-2">
              <div className="relative py-2 px-2 w-full max-h-[56px] md:w-[500px] bg-white">
                <svg
                  width="24px"
                  height="24px"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  className="absolute top-4 left-2"
                >
                  <path
                    d="M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z"
                    fill="currentColor"
                  />
                </svg>
                <input
                  type="name"
                  aria-label="Your Name"
                  placeholder="Enter delivery address"
                  className="border-none py-2 outline-none f-u-b text-base placeholder:f-u-b shadow-1 w-full pl-8"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="relative py-2 px-2 w-full max-h-[56px] md:max-w-[300px] bg-white justify-center items-center">
                <svg
                  width="24px"
                  height="24px"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="When"
                  role="img"
                  focusable="false"
                  className="absolute top-2 md:top-4 left-2"
                >
                  <path
                    d="M12 2.83398C6.91671 2.83398 2.83337 6.91732 2.83337 12.0007C2.83337 17.084 6.91671 21.1673 12 21.1673C17.0834 21.1673 21.1667 17.084 21.1667 12.0007C21.1667 6.91732 17.0834 2.83398 12 2.83398ZM17 13.6673H10.3334V5.33398H12.8334V11.1673H17V13.6673Z"
                    fill="#000000"
                  />
                </svg>
                <select name="Delivery time" className=" outline-none pl-6 f-u-b font-semibold text-base leading-[20px] w-full h-full">
                  <option value="Deliver Now" className="w-full h-full f-u-b font-normal">Deliver Now</option>
                  <option value="Schedule Later" className="w-full h-full f-u-b font-normal">Schedule Later</option>
                </select>
              </div>
              <button
                type="submit"
                className="text-white font-semibold f-u-b text-base py-3 lg:px-4 bg-black rounded-md hover:bg-[#333333] active:bg-[#4D4D4D] w-full md:max-w-[120px]"
              >
                Find Food
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
