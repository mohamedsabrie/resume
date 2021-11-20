import Link from 'next/link';
const products = [
    {
      id: 1,
      name: 'Hulu Clone',
      href: 'https://hulu-clone-omega-six.vercel.app/',
      imageSrc: '/images/hulu-clone.png',
      imageAlt: 'hulu image',
    },
    {
      id: 2,
      name: 'Airbnb Clone',
      href: 'https://airbnb-clone-silk.vercel.app/',
      imageSrc: 'images/airbnb-clone.png',
      imageAlt: 'airbnb image',
    },
    {
      id: 3,
      name: 'Amazon Clone',
      href: 'https://vercel.com/mohamedsabrie/amazon-clone',
      imageSrc: 'images/amazon-clone.png',
      imageAlt: 'Anmazon image',
    },
    {
      id: 4,
      name: 'Google Docs Clone',
      href: 'https://google-docs-clone-g4kictox6-mohamedsabrie.vercel.app/',
      imageSrc: '/images/google-docs-clone.png',
      imageAlt: 'google-docs image',
    },
    // More products...
  ]
  
  export default function Example() {
    return (
        
      <div className="bg-white ">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h3 className="text-3xl text-center pb-10 ">Projects</h3>
  
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Link key={product.id} href={product.href} className="group"  >
                <a target = "_blank">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 shadow-lg">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }