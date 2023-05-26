import React from "react";

const GetGroceries = () => {
  return (
    <div className="relative getGroceries bg-cover bg-no-repeat bg-center z-0">
      <div className="w-full h-[632px] opacity-40 bg-black absolute z-10" />
      <div className="mx-auto container max-w-[1284px] py-48 z-50 relative">
        <div className="text-center">
          <h2 className="font-Inter font-bold mx-auto text-4xl max-w-[400px] text-white">
            Get groceries and convenience store essentials
          </h2>
          <p className="font-Inter font-semibold text-2xl text-center text-white pt-6">
            Grocery delivery, exactly how you want it
          </p>
          <p className="font-Inter font-normal text-lg text-center text-white mx-auto pt-4 max-w-[600px]">
            Shop from home and fill your cart with fresh produce, frozen
            entrees, deli delights, and many more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetGroceries;
