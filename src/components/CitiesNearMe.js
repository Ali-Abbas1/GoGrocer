import React from "react";
import { cities } from "../utils/Data";

const CitiesNearMe = () => {
  return (
    <div className="mx-auto container xl:max-w-[1440px] xl:px-10 md:px-6 px-4">
      <div className="flex justify-between items-center lg:items-end">
        <h2 className="f-u-b text-xl lg:text-4xl leading-[44px] font-bold lg:px-0">
          Cities near me
        </h2>
        <a className="f-u-m text-base leading-5 font-medium underline cursor-pointer">
          View all 500+ cities
        </a>
      </div>
      <div className="pt-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1901646.9902668288!2d7.225839910250722!3d9.507917275707554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1sen!2s!4v1685107895844!5m2!1sen!2s"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[500px] w-full"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 f-u-r text-base font-normal pt-[26px]">
        {cities.map((item) => (
          <React.Fragment>
            <a className="cursor-pointer"> {item} </a>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CitiesNearMe;
