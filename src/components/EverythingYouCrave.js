import React from 'react'

const EverythingYouCrave = () => {
  return (
    <div className='bg-[#f2eae5]'>
    <div className='mx-auto container max-w-[1152px] flex justify-between items-center'>
        <div className='left-section max-w-[50%] mx-auto'>
            <h2 className='font-Inter font-bold text-4xl max-w-[280px] pb-6'>Everything you crave, delivered.</h2>
            <p className='font-Inter font-normal text-lg max-w-[420px]'>Enjoy eats from a variety of restaurants and have them delivered in a snap. Best of all, you can mix and match your favorites, so everybody gets what they want.</p>
        </div>
        <div className='right-section max-w-[50%] mx-auto py-10'>
            <img src='/../../assets/images/everythingYouCrave.jpg' className='rounded-2xl max-h-[580px] max-w-[604px]' alt='donuts'/>
        </div>
    </div>
    </div>
  )
}

export default EverythingYouCrave
