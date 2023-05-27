import React from "react";


const BecomePartner = () => {
  return (
    <div className="mx-auto container max-w-[1440px] pt-20 pb-20">
      <div className="cards grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
        <div className="">
          <img src="/../../assets/images/feed-employees.jpg" className="max-w-[464px] w-full max-h-[262px] h-full object-cover" />
          <h1 className="f-u-b text-[28px] leading-9 font-bold py-2">
            Feed your employees
          </h1>
          <a className="f-u-l cursor pointer underline text-base leading-5 font-medium cursor-pointer">
           Create a business account
          </a>
        </div>
        <div className="">
        <img src="/../../assets/images/restaurant-delivered.jpg" alt="food delivery"  className="max-w-[464px] w-full max-h-[262px] h-full object-cover"/>
          <h1 className="f-u-b text-[28px] leading-9 font-bold py-2">
           Your restaurant, delivered
          </h1>
          <a className="f-u-l cursor pointer underline text-base leading-5 font-medium cursor-pointer">
           Add your restaurant
          </a>
        </div>
        <div className="">
          <img src="/../../assets/images/food-delivery.jpg" className="max-w-[464px] w-full max-h-[262px] h-full object-cover"/>
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
