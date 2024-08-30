import InstagramEmbed from "./InstagramEmbed";

export default function HeroSection () {
    return (
      <>
      <div className="flex justify-center h-screen">
        <div className="max-w-7xl w-full p-4">
          <img className="mt-16 h-[50vh] mx-auto"src="https://res.cloudinary.com/dq6oea49h/image/upload/v1722461335/Multicolor_Large_byzmpz.png"></img>
          <h1 className="optigurney text-9xl text-right mt-16">WELCOME</h1>
          <p className="michroma text-xl text-right">WE ARE THE ASIAN / ASIAN PACIFIC AMERICAN STUDENT COALITION OF ASU</p>
          <hr className="my-6 border-black sm:mx-auto lg:my-8" />
        </div>
      </div>
      <div className="flex justify-center h-screen bg-black">
        <div className="max-w-7xl w-full p-4">
          <h1 className="optigurney text-7xl text-center mt-20 text-white">What is AAPASC?</h1>
          <hr className="my-6 border-white lg:my-8" />
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="michroma mb-4 text-4xl text-white">AAPASC is the alliance of over 20 clubs and organizations centered around AAPI identity at ASU.</h2>
              <p className="uncutsans-regular mb-4 text-white">Our goal is to help maintain a strong AAPI community within ASU by coordinating campus-wide events that cultivate cultural awareness, advocate for and represent the interests and needs of AAPI students, and by remaining active in the community at large.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
              <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                  <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
              </div>
          </div>
        </div>
      </div>
      </>
    );
};