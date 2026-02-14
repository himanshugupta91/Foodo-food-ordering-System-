import React from 'react'

const CarouselItem = ({ image, title }) => {
  return (

    <div className='flex flex-col justify-center items-center group cursor-pointer'>
      <div className="relative overflow-hidden rounded-full w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem]">
        <img
          className='w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500'
          src={image}
          alt={title}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
      </div>
      <span className='py-4 font-display font-semibold text-xl text-neutral-800 group-hover:text-primary-600 transition-colors'>{title}</span>
    </div>


  )
}

export default CarouselItem