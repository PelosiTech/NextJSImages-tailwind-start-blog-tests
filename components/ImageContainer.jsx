import Image from 'next/image'
import UnlimitedWashes from '../public/static/images/UnlimitedWashes.jpg'

const ImageContainer = () => {
  return (
    <>
      <section className="bg-gray-900 p-16 text-white">
        {/* Flex container for the image group and content */}
        <div className="max-w-6xl mx-auto flex items-start gap-16">
          {/* Image Group */}
          <div className="relative w-1/3 flex">
            {/* Top image */}
            <Image
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/mechanic4.jpg"
                alt="Main Display"
                width={217}
                height={400}
                className="rounded-lg w-[200px] h-[200px]"
              />

            {/* Middle overlapping image */}
            <Image
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/mechanic5.jpg"
                  alt="Thumbnail 1"
                  width={100}
                  height={100}
                  className="rounded-lg shadow-lg hover:opacity-75 transition-opacity"
                />

            {/* Bottom image */}
            <Image
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/mechanic6.jpg"
                  alt="Thumbnail 2"
                  width={100}
                  height={100}
                  className="rounded-lg shadow-lg hover:opacity-75 transition-opacity"
                />
          </div>

          {/* Text Content */}
          <div className="w-2/3">
            <span className="text-red-500 uppercase tracking-wide font-bold text-sm">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-extrabold leading-tight mt-2 mb-6">
              Safety is Our Top Priority
            </h2>
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
              vestibulum. Donec in efficitur leo.
            </p>
            <ul className="list-disc pl-4 mb-6 space-y-2">
              <li className="text-gray-400">Dedicated team for support.</li>
              <li className="text-gray-400">Highly trained professionals.</li>
              <li className="text-gray-400">Years of experience in the field.</li>
            </ul>
            <a href="tel:555-555-0234" className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <img
                  className="w-6 h-6"
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/white-phone.svg"
                  alt="Phone Icon"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-300 text-sm">Call Anytime</span>
                <span className="text-white font-bold">(+123) 5462 3257</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 p-16 text-gray-900">
        {/* Card Container */}
        <div className="max-w-5xl mx-auto p-8 bg-white shadow-2xl flex gap-8 rounded-lg">
          {/* Image Card Area */}
          <div className="relative w-1/2 flex flex-col items-center">
            {/* Main Display Image */}
            <div className="w-full h-64 mb-4 relative">
              <Image
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/mechanic4.jpg"
                alt="Main Display"
                width={200}
                height={300}
                className="rounded-lg w-[200px] h-[300px]"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4">
              <div className="w-32 h-22 relative">
                <Image
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/mechanic5.jpg"
                  alt="Thumbnail 1"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg hover:opacity-75 transition-opacity"
                />
              </div>
              <div className="w-32 h-32 relative">
                <Image
                  src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/People/mechanic6.jpg"
                  alt="Thumbnail 2"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg hover:opacity-75 transition-opacity"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-1/2 flex flex-col justify-center">
            <span className="text-red-500 uppercase tracking-wide font-bold text-sm mb-2">
              Discover More
            </span>
            <h2 className="text-3xl font-extrabold leading-tight mb-6">
              Expertise in Every Detail
            </h2>
            <p className="text-gray-600 mb-6">
              Dedicated to providing the best automotive services with trained professionals and
              top-tier expertise.
            </p>
            <button className="py-2 px-4 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ImageContainer
