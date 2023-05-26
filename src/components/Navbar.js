import React from "react";

const Navbar = () => {
  return (
    <div className="bg-transparent">
      <div className="mx-auto container xl:max-w-[1152px] relative">
        <div className="w-full max-w-full flex justify-center py-7 absolute top-0 left-0">
          <div></div>
          <div className="logo cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={129}
              height={28}
              viewBox="0 0 129 28"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.7512 22.1877C10.8083 22.2882 10.8977 22.3672 11.0052 22.412C11.0704 22.4381 11.1399 22.4522 11.2102 22.4535C11.2927 22.4503 11.3733 22.428 11.4454 22.3883C11.5175 22.3486 11.5792 22.2927 11.6254 22.2251L18.4573 13.4012C18.5125 13.3275 18.547 13.2406 18.5571 13.1494C18.5673 13.0582 18.5528 12.966 18.5151 12.8822C18.4718 12.7948 18.4045 12.7212 18.3209 12.6698C18.2372 12.6184 18.1407 12.5913 18.0422 12.5915H15.5459L18.86 1.0191C23.787 3.07105 27.2507 7.93235 27.2507 13.6026C27.2507 21.1277 21.1504 27.228 13.6254 27.228C6.10028 27.228 0 21.1277 0 13.6026C0 6.34388 5.67613 0.410858 12.832 0L8.58249 15.0674C8.56395 15.1447 8.56365 15.2253 8.58162 15.3028C8.59958 15.3803 8.63534 15.4527 8.68612 15.5144C8.7369 15.5761 8.80136 15.6254 8.87451 15.6586C8.94766 15.6918 9.02756 15.708 9.10803 15.7058H11.6464L10.6899 21.8566C10.6725 21.9706 10.6941 22.0871 10.7512 22.1877Z"
                fill="#83EA00"
              />
              <path
                d="M36.3588 20.1142H39.4671V11.0448H41.6599V8.70294H39.3926V7.90458C39.3926 7.08493 39.8503 6.64849 40.8829 6.64849C41.1703 6.64849 41.4683 6.65914 41.6812 6.70172V4.64727C41.3193 4.57276 40.6913 4.51953 40.1164 4.51953C37.4233 4.51953 36.3588 5.55208 36.3588 7.78749V8.70294H34.8047V11.0448H36.3588V20.1142Z"
                fill="#F4F5F8"
              />
              <path
                d="M47.0735 20.3484C50.5224 20.3484 52.7259 18.1342 52.7259 14.4086V14.3873C52.7259 10.6935 50.4798 8.46875 47.0628 8.46875C43.6565 8.46875 41.4211 10.7148 41.4211 14.3873V14.4086C41.4211 18.1236 43.6033 20.3484 47.0735 20.3484ZM47.0841 17.9107C45.5513 17.9107 44.5826 16.644 44.5826 14.4086V14.3873C44.5826 12.1838 45.5619 10.9064 47.0628 10.9064C48.5744 10.9064 49.5643 12.1838 49.5643 14.3873V14.4086C49.5643 16.6333 48.5957 17.9107 47.0841 17.9107Z"
                fill="#F4F5F8"
              />
              <path
                d="M58.9165 20.3484C62.3654 20.3484 64.5688 18.1342 64.5688 14.4086V14.3873C64.5688 10.6935 62.3228 8.46875 58.9058 8.46875C55.4995 8.46875 53.2641 10.7148 53.2641 14.3873V14.4086C53.2641 18.1236 55.4462 20.3484 58.9165 20.3484ZM58.9271 17.9107C57.3942 17.9107 56.4256 16.644 56.4256 14.4086V14.3873C56.4256 12.1838 57.4049 10.9064 58.9058 10.9064C60.4174 10.9064 61.4073 12.1838 61.4073 14.3873V14.4086C61.4073 16.6333 60.4387 17.9107 58.9271 17.9107Z"
                fill="#F4F5F8"
              />
              <path
                d="M69.7482 20.3484C71.3981 20.3484 72.6542 19.5181 73.261 18.1662H73.3248V20.1142H76.4331V4.75372H73.3248V10.6829H73.261C72.6436 9.29905 71.3662 8.46875 69.7482 8.46875C66.8741 8.46875 65.107 10.6829 65.107 14.3979V14.4086C65.107 18.1129 66.8741 20.3484 69.7482 20.3484ZM70.7914 17.7723C69.2372 17.7723 68.2686 16.4843 68.2686 14.4086V14.3979C68.2686 12.3115 69.2479 11.0448 70.7914 11.0448C72.2923 11.0448 73.3355 12.3435 73.3355 14.3979V14.4086C73.3355 16.4736 72.3029 17.7723 70.7914 17.7723Z"
                fill="#F4F5F8"
              />
              <path
                d="M79.6432 23.8718C82.1766 23.8718 83.7095 23.0096 84.6036 20.3164L88.5209 8.70294H85.2423L82.826 17.6233H82.7408L80.3351 8.70294H76.9181L80.9525 20.1142L80.8141 20.4867C80.5373 21.2638 80.0264 21.5299 79.1003 21.5299C78.6426 21.5299 78.2806 21.4661 78.0571 21.4235V23.7334C78.419 23.7973 79.0364 23.8718 79.6432 23.8718Z"
                fill="#F4F5F8"
              />
              <path
                d="M88.9527 20.1142H92.061V13.227C92.061 11.939 92.8593 11.0448 94.0409 11.0448C95.1905 11.0448 95.8825 11.7686 95.8825 12.9928V20.1142H98.8736V13.1738C98.8736 11.907 99.6507 11.0448 100.832 11.0448C102.035 11.0448 102.695 11.7686 102.695 13.0886V20.1142H105.803V12.3115C105.803 10.0123 104.302 8.46875 102.067 8.46875C100.396 8.46875 99.0333 9.38421 98.5224 10.8213H98.4585C98.0753 9.32034 96.915 8.46875 95.3183 8.46875C93.7854 8.46875 92.5932 9.32034 92.1248 10.619H92.061V8.70294H88.9527V20.1142Z"
                fill="#F4F5F8"
              />
              <path
                d="M110.514 20.2951C112.015 20.2951 113.229 19.5819 113.878 18.411H113.942V20.1142H117.05V12.2902C117.05 9.99096 115.145 8.46875 112.196 8.46875C109.184 8.46875 107.374 9.98032 107.204 12.088L107.193 12.2157H110.035L110.057 12.1199C110.206 11.3854 110.908 10.8425 112.069 10.8425C113.282 10.8425 113.942 11.4706 113.942 12.4818V13.1844L111.121 13.3547C108.29 13.5357 106.682 14.7492 106.682 16.8249V16.8462C106.682 18.8581 108.226 20.2951 110.514 20.2951ZM109.759 16.6865V16.6653C109.759 15.8563 110.387 15.3453 111.59 15.2708L113.942 15.1218V15.9414C113.942 17.1336 112.92 18.0278 111.526 18.0278C110.451 18.0278 109.759 17.5275 109.759 16.6865Z"
                fill="#F4F5F8"
              />
              <path
                d="M118.408 20.1142H121.516V13.557C121.516 12.0667 122.4 11.0448 123.794 11.0448C125.189 11.0448 125.891 11.8964 125.891 13.3867V20.1142H129V12.748C129 10.0761 127.573 8.46875 125.061 8.46875C123.337 8.46875 122.166 9.26712 121.58 10.5764H121.516V8.70294H118.408V20.1142Z"
                fill="#F4F5F8"
              />
            </svg>
          </div>
          {/* Header Links */}
          {/* <div className="header-btns ">
            <div className="">
              <ul className="flex justify-between text-white font-inter text-lg leading-6 font-medium cursor-pointer gap-x-10">
                <li className="hover:text-[#83ea00]">About</li>
                <li className="hover:text-[#83ea00]">Blog</li>
                <li className="hover:text-[#83ea00]">Careers</li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
