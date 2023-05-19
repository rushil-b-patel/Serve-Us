import Table from "./Table";

const posts = [
    {
      id: 1,
      title: 'Boost your Engine Health',
      href: '',
      description:
        'Inspecting vehicle engine and mechanical/electrical components to diagnose issues accurately. Inspecting vehicle computer and electronic systems to repair, maintain and upgrade.',
      category: { title: 'Engine', href: '' },
      author: {
        name: 'Abdul Chaha',
        role: 'Mercedes',
        href: '',
        imageUrl:
          'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg',
      },
    },
    {
      id: 2,
      title: 'Smooth You car',
      href: '',
      description:
        'Inspecting vehicle engine and mechanical/electrical components to diagnose issues accurately. Inspecting vehicle computer and electronic systems to repair, maintain and upgrade.',
      category: { title: 'Transmission', href: '' },
      author: {
        name: 'Suresh',
        role: 'Toyota',
        href: '',
        imageUrl:
          'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg',
      },
    },
    {
      id: 3,
      title: 'Suspense it',
      href: '',
      description:
        'Inspecting vehicle engine and mechanical/electrical components to diagnose issues accurately. Inspecting vehicle computer and electronic systems to repair, maintain and upgrade.',
      category: { title: 'Break & Fluid', href: '' },
      author: {
        name: 'Ramesh',
        role: 'Honda',
        href: '',
        imageUrl:
          'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg',
      },
    },

    

    // More posts...
  ]
  
  export default function Contact() {

    return (
        <>

        <Table /> 
        {/* <TestCard /> */}
        </>
    )
  }
  