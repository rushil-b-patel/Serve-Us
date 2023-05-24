import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import Stats from './Stats'
import StatsNew from './StatsNew'
import WorkWithUs from './WorkWithUs'
import SubscribeLetter from './SubscribeLetter'
import CarouselComponent from './Carousel'
import Team from './Team'
import NewCard from './NewCard'
import Carousel from './Carousel'

const features = [
  {
    name: 'Check the Status Online',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Car Privacy',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Recycled Every Component',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Authentified Services',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
]

export default function Home() {
  return (
    <div className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-center text-base font-semibold leading-7 text-indigo-600 sm:text-center">Codentic Car Spa..!</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
          Welcome to the Service
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Welcome to our car service website! We are a professional and reliable automotive repair 
          and maintenance service provider dedicated to keeping your vehicle running smoothly and safely. 
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>

      <Stats />

        <div className='place-items-center  justify-evenly my-10 mx-auto sm:place-items-center  grid grid-cols-1 lg:flex justify-center'>
          <div className='sm:px-5'>
            <NewCard title='Wheel Alignment'
              description='Go to this step by step guideline process on how to certify for your car service'
              link='#' />
          </div>
          <div className='sm:px-5'>
            <NewCard title='Wheel Alignment'
              description='Go to this step by step guideline process on how to certify for your car service'
              link='#' />
          </div>
          <div className='sm:px-5'>
            <NewCard title='Wheel Alignment'
              description='Go to this step by step guideline process on how to certify for your car service'
              link='#' />
          </div>
        </div>

      <Team />
      <SubscribeLetter />
      
      </div>
    </div>
  )
}
