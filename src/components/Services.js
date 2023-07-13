import React from 'react'
import ServiceCard from './ServiceCard'

function Services() {
  return (
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10 z-10 relative">
        <h1 className='font-bold text-3xl pb-8  '>Services</h1>
        <ServiceCard name='Plumbing' 
                     description=' Flow with Confidence, Your Trusted Plumbing Experts Plumbing Solutions that Keep Things Running Smoothly' 
                     link='Link'/>
    </div>
  )
}

export default Services