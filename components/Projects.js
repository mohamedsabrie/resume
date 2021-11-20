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
        

      <div>

        This is the projects page
      </div>
    )
  }