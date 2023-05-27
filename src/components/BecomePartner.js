import React from "react";


const BecomePartner = () => {
  return (
    <div className="mx-auto container xl:max-w-[1440px] xl:px-10 md:px-6 px-4 pt-20 pb-20">
      <div className="cards grid lg:grid-cols-3 md:grid-cols-1 gap-2 md:gap-6">

        {/* Cards */}
        <div className="mb-16 md:mb-6 lg:mb-0">
          <img src="/../../assets/images/feed-employees.jpg" className=" xl:max-w-[464px] w-full max-h-[262px] h-full object-cover" alt="people eating"/>
          <h1 className="f-u-b text-[28px] leading-9 font-bold py-2">
            Feed your employees
          </h1>
          <a className="f-u-l cursor pointer underline text-base leading-5 font-medium cursor-pointer">
           Create a business account
          </a>
        </div>
        <div className="mb-6 lg:mb-0 ">
        <img src="/../../assets/images/restaurant-delivered.jpg" alt="restaurant"  className="xl:max-w-[464px] w-full max-h-[262px] h-full object-cover"/>
          <h1 className="f-u-b text-[28px] leading-9 font-bold py-2">
           Your restaurant, delivered
          </h1>
          <a className="f-u-l cursor pointer underline text-base leading-5 font-medium cursor-pointer">
           Add your restaurant
          </a>
        </div>
        <div className="mb-10 lg:mb-0">
          <img src="/../../assets/images/food-delivery.jpg" className="xl:max-w-[464px] w-full max-h-[262px] h-full object-cover" alt="food delivery"/>
          <h1 className="f-u-b text-[28px] leading-9 font-bold py-2">
           Deliver with GoGrocer
          </h1>
          <a className="f-u-l cursor pointer underline text-base leading-5 font-medium cursor-pointer">
           Sign up to deliver
          </a>
        </div>
      </div>
    </div>
  );
};

export default BecomePartner;
