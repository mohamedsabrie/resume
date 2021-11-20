import Image from 'next/image'

function About() {
    return (
        <div id="about" className="h-screen bg-about-bg bg-cover bg-center  relative">
             <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40" />
            <h2 className="absolute  top-20 left-1/2 transform -translate-x-1/2 text-white text-4xl border-b-2 border-gray-400">About Me </h2>
         <div className=" absolute right-1/4 top-[55%] sm:top-1/2 transform -translate-y-1/2 translate-x-1/4 text-white max-w-lg">
          <p className="leading-loose text-xl">
          I am a Front End developer with industry experience building websites and web apps. I specialize in JavaScript and have professional experience working with React.js,
           Next.js, and Tailwind.css. I also have experience working with Redux, TypeScript, and Firebase. Take a look below.
          </p>
         </div>
        
        </div>
    )
}

export default About
