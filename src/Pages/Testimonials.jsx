import React from 'react'
import TestimonialsTitle from '../Components/TestimonialsComponent/TestimonialsTitle'
import { TestimonialsReview } from '../Components/TestimonialsComponent/TestimonialsReview'
import { items } from '../Components/Common/AllData'

const Testimonials = () => {
  return (
    <div>
      <TestimonialsTitle/>
      <div className='flex flex-col relative z-[1]'>
        <TestimonialsReview item={items}/>
      </div>
    </div>
  )
}

export default Testimonials
