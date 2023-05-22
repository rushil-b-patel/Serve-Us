import React from 'react'
import ServiceCard from './ServiceCard'
import TimeLine from './TimeLine'
import ServicesNew from './ServicesNew'

function Services() {
  return (
    <>
{/* 
<div class='sm:gird grid-cols-1 lg:flex place-content-center'>
    <div class='m-10'>
    <ServiceCard ServiceName='Transmission Service'
                  image='https://www.autosofeurope.com/wp-content/uploads/2018/09/shutterstock_352831412.jpg'
                  Description='This typically includes draining and replacing the transmission fluid, 
                  inspecting and replacing the transmission filter, and checking the condition 
                  of the transmission pan and other components.'
                  />
                  </div>

    <div class='m-10'>
    <ServiceCard ServiceName='Break Repair & Service' 
                  image='https://www.road-mech24.com/images/services/lg6.jpg'
                  Description='During a brake and repair service appointment, a trained technician will 
                  perform a variety of tasks to help keep your braking system in good condition.'
                  />
                  </div>


    <div class='m-10'>
    <ServiceCard ServiceName='Tyre & Wheel Service' 
                  image='https://thumbs.dreamstime.com/b/car-oil-change-service-car-oil-change-auto-service-caucasian-mechanic-preparing-equipment-to-remove-old-oil-129577302.jpg'
                  Description='During an engine service appointment, a trained technician will perform a 
                  variety of tasks to help keep your engine running smoothly and efficiently.'                  />
                </div>
</div>

<div class='sm:grid grid-cols-1 lg:flex place-content-center'>
            <div class='m-10'>
            <ServiceCard ServiceName='Paint & Dent Service' 
                          image='https://www.hyattsautocare.com/wp-content/uploads/2020/03/198-1024x683.jpg'
                          Description='Paint and dent service is a type of automotive repair that involves 
                          repairing minor damages to the exterior of your vehicle. This can include fixing dents,
                          scratches, and other imperfections.'
                          />
                          </div>

            <div class='m-10'>
            <ServiceCard ServiceName='Engine Service & Repair' 
                          image='https://media.istockphoto.com/id/879696440/photo/mechanic-hand-checking-and-fixing-a-broken-car-in-car-service-garage.jpg?s=612x612&w=0&k=20&c=1iwb6MA1HmO2086k04s0erES8jv3Q3W2MsmoJnPajto='
                          Description='Engine service and repair is a type of automotive maintenance that focuses 
                          on repairing and maintaining the engine of your vehicle. The engine is the heart of your 
                          vehicle.'
                          />
                        </div>       
            <div class='m-10'> 
            <ServiceCard ServiceName='Performance Upgrade' 
                          image='https://thumbs.dreamstime.com/b/car-service-repair-maintenance-people-concept-happy-smiling-auto-mechanic-man-car-service-repair-maintenance-people-149776429.jpg'
                          Description='Performance upgrade service is a type of automotive service that focuses on improving 
                          the performance and power of your vehicle. This type of service typically involves upgrading.'
                          />
                          </div>
</div> */}

    <TimeLine />
    <ServicesNew />
    </>
  )
}

export default Services