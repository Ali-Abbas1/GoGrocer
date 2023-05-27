import React from "react";
import { useEffect, useState, useRef } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isOpen,setIsOpen] = useState(false)
const sideBarRef = useRef(null)
    {/*function to switch navbar background from transparent to white */}
  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

{/* Change background color of navbar to white on scroll */}
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

//   useEffect(()=> {
//     if (isOpen) {
//       document.body.addEventListener('click', handleOutsideClick)
//     } 
//     return () => {
//       document.body.removeEventListener('click', handleOutsideClick)
//     }
//   },[isOpen])

// const handleOutsideClick = (e) => {
//   {/*Check if the click is outside the sidebar*/}
//   if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
//     setIsOpen(false);
//   }
//   console.log("clicked",isOpen)
  
// }

  return (
    <div className={`fixed z-10 w-full max-w-full`}>
      <div
        className={`${
          navbar ? "bg-white" : "bg-transparent"
        } w-full h-[100px] max-w-full max-h-full relative z-50 transition duration-250`}
      >
        <div className={`${isOpen ? 'block' : 'hidden'} sidebar-backdrop bg-black opacity-50 w-screen h-screen absolute z-30`} onClick={()=> {setIsOpen(false)}}/>
        <div ref={sideBarRef} className={`${isOpen ? 'open' : 'close'} sidebar bg-white p-6 flex flex-col justify-between absolute left-[-300px] z-40`}>
          <div>
            <div className="space-y-2 flex flex-col">
              <button className="f-u-b shrink-0 text-lg leading-6 font-medium text-white bg-black text-center py-3 px-4 rounded-lg">
                Sign up
              </button>
              <button className="f-u-b shrink-0 text-lg leading-6 font-medium text-black bg-[#EEEEEE] text-center py-3 px-4 rounded-lg">
                Log in
              </button>
            </div>
            <div className="flex flex-col space-y-[18px] pt-[26px]">
              <a className="text-sm leading-4 font-semibold f-u-b cursor-pointer">
                Create a business account
              </a>
              <a className="text-sm leading-4 font-semibold f-u-b cursor-pointer">
                Add your restaurant
              </a>
              <a className="text-sm leading-4 font-semibold f-u-b cursor-pointer">
                Sign up to deliver
              </a>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 160.37 160.37"
                width={56}
                height={56}
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Squircles">
                    <rect
                      width="160.37"
                      height="160.37"
                      rx="31.59"
                      style={{ fill: "#142328" }}
                    />
                    <path
                      d="M76.86 107.45a8.33 8.33 0 1 0-8.33 8.23 8.22 8.22 0 0 0 8.33-8.23M83.66 94v27h-6.93v-2.43a13.66 13.66 0 0 1-8.73 3.04 14.17 14.17 0 1 1 0-28.33 13.72 13.72 0 0 1 8.77 3.12V94Zm23 20.84h-5.21c-1.59 0-2.61-.69-2.61-2.12v-12.64h7.82V94h-7.79v-7.7h-7V94h-5.26v6.11h5.27v14.35c0 3.62 2.61 6.49 7.31 6.49h7.5Zm15.79 6.8c8 0 12.52-3.74 12.52-8.92 0-3.68-2.67-6.43-8.26-7.61l-5.91-1.19c-3.43-.62-4.51-1.25-4.51-2.49 0-1.63 1.65-2.63 4.7-2.63 3.3 0 5.72.88 6.42 3.87h6.93c-.39-5.61-4.52-9.36-12.91-9.36-7.24 0-12.33 2.94-12.33 8.61 0 3.93 2.8 6.49 8.84 7.74l6.61 1.5c2.6.5 3.3 1.18 3.3 2.24 0 1.69-2 2.75-5.15 2.75-4 0-6.29-.87-7.18-3.87h-7c1 5.62 5.28 9.36 13.92 9.36M25.38 84.43h26.13v6.23H32.44v8.93H51v6H32.44v9h19.07v6.24H25.38Z"
                      style={{ fill: "#06c167" }}
                    />
                    <path
                      d="M134.37 52.81v-4.9h-1.86A7.28 7.28 0 0 0 126 51.4v-3.28h-5.31v26.59h5.36V59.59c0-4.12 2.55-6.78 6.06-6.78ZM95.81 59a8.42 8.42 0 0 1 16.52 0Zm8.39-11.4a13.8 13.8 0 0 0-13.92 13.81c0 7.93 6.27 13.87 14.4 13.87a14.26 14.26 0 0 0 11.68-5.68l-3.88-2.82a9.36 9.36 0 0 1-7.8 3.92 9 9 0 0 1-9-7.56h22v-1.73c0-7.92-5.73-13.81-13.54-13.81M73.56 70.7a9.23 9.23 0 1 1 9.29-9.23 9.25 9.25 0 0 1-9.29 9.23M59 74.71h5.31v-3.34a13.66 13.66 0 0 0 9.67 4 13.9 13.9 0 1 0 0-27.79 13.55 13.55 0 0 0-9.62 4V38.21H59Zm-18.9-4.28c5.15 0 9.13-3.91 9.13-9.69V38.21h5.58v36.5h-5.53v-3.39a13.54 13.54 0 0 1-9.82 4c-8 0-14.08-5.69-14.08-14.29V38.21H31v22.53c0 5.89 3.93 9.69 9.14 9.69"
                      style={{ fill: "#f6f0ea" }}
                    />
                  </g>
                </g>
              </svg>
              <h2 className="pl-4 f-u-m text-base leading-5 font-medium">
                There&apos;s more to love in the app
              </h2>
            </div>
            <div className="flex space-x-2 pt-4">
              <div className="flex p-3 bg-[#EEEEEE] rounded-[500px] max-w-[100px] w-full">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  className="g3 ff co cp"
                  width={16}
                  height={16}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.268 4.231c.649-.838 1.14-2.022.963-3.231-1.061.074-2.301.752-3.025 1.637-.66.802-1.201 1.994-.99 3.152 1.16.036 2.357-.66 3.052-1.558zM20 15.602c-.464 1.035-.688 1.497-1.285 2.413-.834 1.28-2.01 2.872-3.47 2.884-1.294.014-1.628-.849-3.385-.838-1.758.01-2.124.854-3.421.841-1.458-.013-2.572-1.45-3.406-2.729-2.334-3.574-2.58-7.769-1.14-10C4.916 6.587 6.53 5.66 8.048 5.66c1.543 0 2.515.852 3.793.852 1.24 0 1.995-.854 3.78-.854 1.352 0 2.784.74 3.803 2.018-3.34 1.842-2.8 6.642.576 7.925z"
                  />
                </svg>
                <h2 className="f-u-b text-sm leading-4 font-medium pl-2">
                  iPhone
                </h2>
              </div>
              <div className="flex p-3 bg-[#EEEEEE] rounded-[500px] max-w-[100px] w-full">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  className="g3 ff co cp"
                  width={16}
                  height={16}
                >
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.297 3.415l-.233.343c1.77.804 2.97 2.326 2.97 4.069H6.341c0-1.743 1.199-3.265 2.97-4.069l-.234-.343-.233-.338-.52-.761a.2.2 0 01.058-.282.214.214 0 01.29.057l.793 1.157.238.348a7.035 7.035 0 012.484-.444c.888 0 1.729.16 2.484.444l1.032-1.505a.21.21 0 01.288-.057.198.198 0 01.059.282l-.52.76-.234.339zm-1.23 2.176c0 .337.28.61.626.61a.618.618 0 00.627-.61.617.617 0 00-.627-.61.617.617 0 00-.627.61zm-4.385.61a.618.618 0 01-.627-.61c0-.338.28-.61.627-.61.346 0 .627.272.627.61 0 .337-.28.61-.627.61z"
                    />
                    <path d="M6.342 8.639h11.692v8.942c0 .71-.592 1.288-1.322 1.288h-.956c.033.107.052.22.052.338v2.574c0 .673-.562 1.22-1.254 1.22s-1.253-.547-1.253-1.22v-2.574c0-.119.018-.23.05-.338h-2.327c.032.107.051.22.051.338v2.574c0 .673-.562 1.22-1.253 1.22-.692 0-1.254-.547-1.254-1.22v-2.574c0-.119.018-.23.05-.338h-.953c-.73 0-1.323-.578-1.323-1.288V8.639zm-2.089 0C3.561 8.639 3 9.185 3 9.858v5.216c0 .673.56 1.22 1.253 1.22.692 0 1.253-.547 1.253-1.22V9.858c0-.673-.561-1.219-1.253-1.219zM18.87 9.858c0-.673.56-1.219 1.253-1.219.691 0 1.252.546 1.252 1.219v5.216c0 .673-.56 1.22-1.252 1.22-.693 0-1.254-.547-1.254-1.22V9.858z" />
                  </g>
                </svg>
                <h2 className="f-u-b text-sm leading-4 font-medium pl-2">
                  Android
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto container xl:max-w-[1440px] relative  w-full max-w-full flex justify-between items-center">
          <div
            className={`w-full max-w-full flex justify-between items-center py-7 absolute top-0 left-0`}
          >
            <div className="logo cursor-pointer flex relative z-30 space-x-8 items-center ">
              {/* Hamburger menu */}
              <svg
                width={20}
                height={20}
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 20 20"
                className="dh di c6 cf"
                onClick={()=>{setIsOpen(true)}}
              >
                <path d="M19.167 3.333H.833v2.5h18.334v-2.5zm0 5.834H.833v2.5h18.334v-2.5zM.833 15h18.334v2.5H.833V15z" />
              </svg>
              {/* Logo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={134}
                height={24}
                fill="none"
              >
                <g clipPath="url(#clip0_227_7066)" fill="#000">
                  <path d="M70.629.334H85.72V3.98H74.705v5.215h10.722v3.537H74.705v5.288H85.72v3.647H70.629V.334Zm56.101 21.734c4.627 0 7.234-2.188 7.234-5.215 0-2.151-1.543-3.756-4.774-4.449l-3.415-.693c-1.983-.364-2.607-.729-2.607-1.458 0-.948.955-1.532 2.718-1.532 1.909 0 3.305.51 3.709 2.26h4.002c-.22-3.281-2.607-5.47-7.454-5.47-4.186 0-7.124 1.715-7.124 5.033 0 2.298 1.616 3.793 5.104 4.522l3.819.875c1.505.292 1.909.693 1.909 1.313 0 .985-1.138 1.605-2.974 1.605-2.313 0-3.635-.51-4.149-2.261h-4.04c.588 3.282 3.048 5.47 8.042 5.47Zm-9.124-3.975h-3.011c-.918 0-1.506-.401-1.506-1.24V9.487h4.517V5.913h-4.517V1.428h-4.039v4.485h-3.048v3.574h3.048v8.387c0 2.115 1.505 3.792 4.223 3.792h4.333v-3.573Zm-13.309-12.18v15.754h-4.002v-1.422a7.84 7.84 0 0 1-5.068 1.823c-4.737 0-8.445-3.683-8.445-8.278 0-4.595 3.709-8.278 8.445-8.278a7.84 7.84 0 0 1 5.068 1.824V5.914h4.002Zm-3.929 7.877a4.771 4.771 0 0 0-4.81-4.814 4.795 4.795 0 0 0-4.81 4.814 4.795 4.795 0 0 0 4.81 4.813c2.68 0 4.81-2.115 4.81-4.813ZM8.982 19.167c2.976 0 5.277-2.286 5.277-5.669V.333h3.223v21.332H14.29v-1.98c-1.442 1.492-3.437 2.346-5.677 2.346-4.602 0-8.132-3.322-8.132-8.35V.334h3.223v13.165c0 3.443 2.27 5.668 5.278 5.668Zm10.893 2.498h3.069v-1.95a7.836 7.836 0 0 0 5.584 2.317c4.603 0 8.224-3.627 8.224-8.107 0-4.51-3.62-8.136-8.224-8.136a7.764 7.764 0 0 0-5.554 2.316V.334h-3.1v21.332Zm8.439-2.346a5.377 5.377 0 0 1-5.401-5.394 5.377 5.377 0 0 1 5.4-5.394 5.37 5.37 0 0 1 5.37 5.394c0 2.987-2.423 5.394-5.37 5.394Zm17.705-13.5c-4.572 0-8.04 3.687-8.04 8.075 0 4.632 3.622 8.107 8.316 8.107 2.854 0 5.186-1.25 6.751-3.322l-2.24-1.646c-1.166 1.554-2.7 2.286-4.51 2.286-2.64 0-4.757-1.89-5.187-4.419h12.735v-1.006c0-4.632-3.314-8.075-7.825-8.075Zm-4.848 6.643c.553-2.377 2.486-3.961 4.787-3.961 2.302 0 4.235 1.584 4.757 3.961H41.17ZM63.45 8.866V6.002h-1.074c-1.718 0-2.976.792-3.743 2.042v-1.92h-3.069v15.542h3.1v-8.838c0-2.407 1.472-3.962 3.497-3.962h1.289Z" />
                </g>
                <defs>
                  <clipPath id="clip0_227_7066">
                    <path
                      fill="#fff"
                      transform="translate(.481 .333)"
                      d="M0 0h133.494v27.429H0z"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            {/*Header Links */}
            <div className="header-btns relative z-50 flex space-x-4">
              <div
                role="button"
                className="bg-white text-black rounded-[500px] hover:bg-[#CCCCCC] active:bg-[#B3B3B3] flex py-3 px-4 space-x-1 log-in"
              >
                <svg
                  width={20}
                  height={20}
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 26 26"
                  className="dh di c6 cf"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.958 7.042a5.958 5.958 0 11-11.916 0 5.958 5.958 0 0111.916 0zM3.25 21.667c0-3.575 2.925-6.5 6.5-6.5h6.5c3.575 0 6.5 2.925 6.5 6.5v3.25H3.25v-3.25z"
                  />
                </svg>
                <p className="text-base leading-5 f-u-m font-medium">Log in</p>
              </div>
              <div
                role="button"
                className="bg-black rounded-[500px] hover:bg-[#333333] active:bg-[#4D4D4D] flex py-3 px-4 space-x-1 log-in"
              >
                <p className="text-base leading-5 f-u-m font-medium text-white">
                  Sign up
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
