import TestCard from "./TestCard"
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
    {
        id: 4,
        title: 'Pull it off',
        href: '',
        description:
            'Inspecting vehicle engine and mechanical/electrical components to diagnose issues accurately. Inspecting vehicle computer and electronic systems to repair, maintain and upgrade.',
        category: { title: 'Engine', href: '' },
        author: {
            name: 'Dinesh',
            role: 'Maruti',
            href: '',
            imageUrl:
                'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg',
        },
    },
    {
        id: 5,
        title: 'Take if off',
        href: '',
        description:
            'Inspecting vehicle engine and mechanical/electrical components to diagnose issues accurately. Inspecting vehicle computer and electronic systems to repair, maintain and upgrade.',
        category: { title: 'Rock it', href: '' },
        author: {
            name: 'Vraj',
            role: 'Skoda',
            href: '',
            imageUrl:
                'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg',
        },
    },
    {
        id: 6,
        title: 'Launch the car',
        href: '',
        description:
            'Inspecting vehicle engine and mechanical/electrical components to diagnose issues accurately. Inspecting vehicle computer and electronic systems to repair, maintain and upgrade.',
        category: { title: 'Go through it', href: '' },
        author: {
            name: 'Kund',
            role: 'Volkswagen',
            href: '',
            imageUrl:
                'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg',
        },
    },



    // More posts...
]

export default function ExpertStats() {

    return (
        <>

            <div className="bg-white py-20 sm:py-15">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Experts are here...</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            Enhance your car with our great Service.
                        </p>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 border-b border-gray-200 pb-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <a
                                        href={post.category.href}
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200"
                                    >
                                        {post.category.title}
                                    </a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            <a href={post.author.href}>
                                                <span className="absolute inset-0" />
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <p className="text-gray-600">{post.author.role}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>


            {/* <TestCard /> */}
        </>
    )
}
