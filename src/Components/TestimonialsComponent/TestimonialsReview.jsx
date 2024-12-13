import React from 'react'
import reviewframe from "../../assets/asset_28.svg";
import { Link } from 'react-router';


export const TestimonialsReview = ({ item }) => {
    return(
      <div >
        {item.map((item, index) => (
          <div key={index} className={`flex justify-center items-center ${index % 2 === 1 ? "flex-row-reverse" : "flex-row"} max-sm:px-[20px] max-sm:block`}>
            <div className='flex justify-center items-center relative h-[400px] flex-grow-[0.5] flex-shrink basis-0'>
              <img src={reviewframe} alt="reviewFrame" className='absolute w-full h-full top-0 left-0' />
              <div className='w-[180px] h-[180px] flex justify-center items-center relative -left-[7px] top-2'>
                <img src={item.image} alt="reviewerImage" className='w-full h-full inset-0 text-transparent object-cover rounded-[50%] absolute' />
              </div>
            </div>
            <div className='text-white flex-1 gap-8 flex flex-col'>
              <div className={`${index % 2 === 1 ? "flex items-end flex-col max-sm:block" : ""}`}>
                <h4 className='m-0 text-5xl font-medium'>{item.name}</h4>
                <div className='text-[#ffffff70] mt-2 mb-[10px] text-sm font-medium'>{item.title}</div>
                <Link to={`/testimonials/${item.id}`} className='cursor-pointer text-[#007bff] '>See Review</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
}


