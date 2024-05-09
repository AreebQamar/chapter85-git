"use client"


import { motion } from 'framer-motion'; // Added for animations
import Link from "next/link";

export default function Home() {

  return (

    <div >
      <div className="h-screen">
        <section className="bg-cover bg-center h-3/4" style={{ backgroundImage: 'url("/homePageBackground.jpg")' }}>

          <div className=" flex flex-col justify-center items-center h-full text-gray-800">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: -30 }}
              transition={{ duration: 1 }}
              className="text-orange-900 text-4xl md:text-5xl font-extrabold mb-4 text-center "
            >
              Discover Timeless Craftsmanship
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: -30 }}
              transition={{ duration: 1 }}
              className="text-base md:text-lg mb-6 text-center"
            >
             Explore Our Exquisite Leather Collection
            </motion.p>
            <Link href="/shopAll">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: -30 }}
                transition={{ duration: 1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-orange-700 hover:bg-orange-600 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-full transition duration-300 ease-in-out text-sm md:text-base"
                >
                  Shop Now
                </motion.div>
              </motion.div>
            </Link>
          </div>
        </section>
      </div>

      <div className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">

          <div className="flex flex-wrap w-full">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Charpter 85</h1>
              <div className="h-1 w-20 bg-red-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
          </div>

          {/* <div className="flex flex-wrap -m-4">

            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image className="rounded object-cover object-center mb-6" src="/shoe.jpeg" alt="content"
                  height={40}
                  width={150}>
                </Image>
                <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">Shoes</h3>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>

            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image className=" rounded object-cover object-center mb-6" src="/belt.jpeg" alt="content"
                  height={240}
                  width={300}>
                </Image>
                <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">Belts</h3>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>

            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image className="rounded object-cover object-center mb-6" src="/wallet.jpeg" alt="content"
                  height={40}
                  width={210}>
                </Image>
                <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">Wallets and Bags</h3>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>

            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image className="rounded object-cover object-center mb-6" src="/homePageBackGround.jpg" alt="content"
                  height={200}
                  width={340}>
                </Image>
                <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">SUBTITLE</h3>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>

          </div> */}

        </div>
      </div>

    </div>
  )
}
