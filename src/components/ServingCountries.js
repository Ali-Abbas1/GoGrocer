import React from "react";
import { countries } from "../utils/Data";

const ServingCountries = () => {
  return (
    <div className="mx-auto container max-w-[1440px] px-4 lg:px-0 py-20">
      <div className="flex justify-between items-end">
        <h2 className="f-u-b text-4xl leading-[44px] font-bold">
          Countries with GoGrocer
        </h2>
        <a className="underline f-u-m text-base leading-5 font-medium">
          View all countries
        </a>
      </div>
      <div className="grid grid-cols-4 gap-6 pt-6">
        {countries.map((item) => (
          <React.Fragment>
            <a className="cursor-pointer">{item}</a>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ServingCountries;
