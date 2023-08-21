import Image from "next/image"
  

export default function Home() {
 
  return (

    <div >
      <Image
        src='/homePageBackground.jpg'
        height={100}
        width={1920}

        alt=""
      />

      <div className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">

          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Charpter 85</h1>
              <div className="h-1 w-20 bg-red-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
          </div>

          <div className="flex flex-wrap -m-4">

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

          </div>
          
        </div>
      </div>

    </div>
  )
}
