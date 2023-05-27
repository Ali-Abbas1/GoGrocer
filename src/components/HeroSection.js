import React from "react";

const HeroSection = () => {
  return (
    <div
      className={`heroSection relative bg-center bg-no-repeat bg-cover max-w-full w-full max-h-full h-full pt-20 min-h-screen object-cover`}
    >
      <div className="mx-auto container max-w-[1440px] relative">
        <div className="left-section max-w-full pt-36">
          <h2 className="f-u-b font-semibold text-left text-[52px] leading-[64px] text-black pt-4 w-[600px] ">
            Order food to your door
          </h2>
          <form>
            <div className="pt-10 flex space-x-2">
              <div className="relative py-2 px-2 min-w-[500px] bg-white">
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
              <div className="relative py-2 px-2 max-w-[350px] bg-white justify-center items-center">
                <svg
                  width="24px"
                  height="24px"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="When"
                  role="img"
                  focusable="false"
                  className="absolute top-4 left-2"
                >
                  <path
                    d="M12 2.83398C6.91671 2.83398 2.83337 6.91732 2.83337 12.0007C2.83337 17.084 6.91671 21.1673 12 21.1673C17.0834 21.1673 21.1667 17.084 21.1667 12.0007C21.1667 6.91732 17.0834 2.83398 12 2.83398ZM17 13.6673H10.3334V5.33398H12.8334V11.1673H17V13.6673Z"
                    fill="#000000"
                  />
                </svg>
                <select name="Delivery time" className="outline-none pl-8 f-u-b font-semibold text-base leading-[20px] w-full h-full">
                  <option value="Deliver Now" className="w-full h-full f-u-b font-normal">Deliver Now</option>
                  <option value="Schedule Later" className="w-full h-full f-u-b font-normal">Schedule Later</option>
                </select>
              </div>
              <button
                type="submit"
                className="text-white font-semibold f-u-b text-base py-3 px-4 bg-black rounded-md hover:bg-[#333333] active:bg-[#4D4D4D]"
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
