const people = [
    {
      name: 'Ambani',
      role: 'Maruti',
      imageUrl:'https://imageio.forbes.com/specials-images/imageserve/5c7d7829a7ea434b351ba0b6/0x0.jpg?format=jpg&crop=1837,1839,x206,y250,safe&height=416&width=416&fit=bounds',
    },
    {
      name: 'Ramesh',
      role: 'Audi',
      imageUrl:'https://www.koimoi.com/wp-content/new-galleries/2020/10/dilip-joshi-turns-into-jethalal-of-taarak-mehta-ka-ooltah-chashmah-irl-this-picture-is-the-proof001.jpg',
    },
    {
      name: 'Dinesh',
      role: 'Mercedes',
      imageUrl:'https://alchetron.com/cdn/dominic-toretto-052094ec-26f9-4207-9233-568498c36b8-resize-750.jpeg'
    },
    {
      name: 'Konti',
      role: 'Skoda  ',
      imageUrl:'https://pbs.twimg.com/profile_images/1137845330655948800/d67jP6_O_400x400.jpg'    
    },
   
  ]
  
  export default function Team() {
    return (
      <div className="bg-white pb-24 sm:pb-20">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Experts</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                        Our experts have a comprehensive understanding of how cars work,engine, transmission, suspension, brakes, and other components. They are familiar with different car models.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  