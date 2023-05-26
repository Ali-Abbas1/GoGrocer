import React from 'react'

const GrowYourBusiness = () => {
  return (
    <div className='mx-auto container max-w-[1152px] flex justify-between items-center'>
      <div className='left-section py-10 max-w-[50%]'> 
      <img src='/../../assets/images/our-concept.jpg' className='rounded-2xl max-h-[580px] max-w-[604px]' alt='sprinkling salt'/>
      </div>
      <div className='right-section max-w-[50%]'>
        <p className='uppercase font-Inter font-medium text-base'>about our concept</p>
        <h2 className='font-Inter font-normal text-[40px] leading-[46px] mt-[10px]'>GoGrocer was created to bring hospitality to in-home dining experiences for food lovers everywhere.</h2>
        <p className='font-Inter mt-[20px] text-[16px] leading-[26px]'>Award winning chefs now have a place to create and a delivery option that's as focused on quality as they are. Each customized kitchen at every GoGrocer Collective houses a unique array of world-class award winning restaurants preparing their most popular dishes - exclusively available for pick up at Crave or delivered through Crave's own employee mobile servers right to your door.</p>
      </div>
    </div>
  )
}

export default GrowYourBusiness
