import React from "react";

const ToDos = () => {
  return (
    <div className="bg-[#FEF1EE]">
      <div className="mx-auto container max-w-[2184px] py-16">
        <h2 className="w-full text-center font-Inter text-4xl font-bold mx-auto break-words max-w-[450px]">
          Helping you with to-dos and gifting
        </h2>
        <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-20 pt-20">
            <div className="flex flex-col justify-center items-center">
                <div className="max-w-[663px] min-w-[663px]">
                <img src="../../assets/images/packages.jpg" className="max-h-[500px] h-full max-w-[663px] w-full object-cover" alt="delivery packages"/>
                </div>
                <h2 className="font-Inter font-bold text-center text-3xl pt-4 max-w-[450px] mx-auto">Return packages from home</h2>
                <p className="font-Inter font-medium text-center text-base pt-4 max-w-[450px] mx-auto">Request a package with just few taps and get your returns dropped off with carriers like UPS, Fedex and USPS</p>
            </div>
            <div className="flex flex-col justify-center items-center">
               <div className="max-w-[663px] min-w-[663px] max-h-[500px] min-h-[500px]">
                <img src="../../assets/images/flowers.jpg" className="max-h-[500px] h-full max-w-[663px] w-full object-cover" alt="delivery packages"/>
                </div>
                <h2 className="font-Inter font-bold text-center text-3xl pt-4 max-w-[450px] mx-auto">Flowers for any occasion</h2>
                <p className="font-Inter font-medium text-center text-base pt-4 max-w-[500px] mx-auto">From bouquets to centerpieces, each arrangement showcases the best flowers, adding a touch of nature&apos;s beauty to any occasion.</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="max-w-[663px] min-w-[663px] max-h-[500px]">
                <img src="../../assets/images/bar.jpg" className="max-h-[500px] h-full max-w-[663px] w-full object-cover" alt="delivery packages"/>
                </div>
                <h2 className="font-Inter font-bold text-center text-3xl pt-4 max-w-[450px] mx-auto">Restock the minibar</h2>
                <p className="font-Inter font-medium text-center text-base pt-4 max-w-[500px] mx-auto">Hosting a get together or need a special cocktail ingredient? Get liquor, beer, mixers, champagne, and wine delivered fast.</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="max-w-[663px] min-w-[663px] max-h-[500px]">
                <img src="../../assets/images/pet.jpg" className="max-h-[500px] h-full max-w-[663px] w-full object-cover" alt="delivery packages"/>
                </div>
                <h2 className="font-Inter font-bold text-center text-3xl pt-4 max-w-[450px] mx-auto">What your pets need, and want</h2>
                <p className="font-Inter font-medium text-center text-base pt-4 max-w-[500px] mx-auto">Finally something cat people and dog people agree on - pet supplies delivery. Shop pet food, chew toys and even costumes.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ToDos;
