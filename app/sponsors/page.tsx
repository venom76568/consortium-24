import Image from "next/image";

const sponsorsData = [
  { category: "Gold Sponsors", images: ["/assets/sponsors2/2.png"] },
  { category: "Silver Sponsors", images: ["/assets/sponsors2/1.png"] },
  { category: "Ecosystem Partner", images: ["/assets/sponsors2/3.png"] },
  { category: "Travel Partner", images: ["/assets/sponsors2/4.png"] },
  { category: "Real Estate Partner", images: ["/assets/sponsors2/5.png", "/assets/sponsors2/6.png"] },
  { category: "Delicacy Partner", images: ["/assets/sponsors2/7.png"] },
  { category: "Bus Travel Partner", images: ["/assets/sponsors2/8.png"] },
  { category: "Skin care Partner", images: ["/assets/sponsors2/9.png"] },
  { category: "Ayurveda Partner", images: ["/assets/sponsors2/10.png"] },
  { category: "Upskilling Partner", images: ["/assets/sponsors2/11.png"] },
  { category: "Resort Partner", images: ["/assets/sponsors2/12.png"] },
  { category: "Platform Partner", images: ["/assets/sponsors2/13.png"] },
  { category: "Tech Partner", images: ["/assets/sponsors2/14.png"] },
  { category: "Bank Partner", images: ["/assets/sponsors2/15.png"] },
  { category: "Beverage Partner", images: ["/assets/sponsors2/16.png"] },
  { category: "Hospitality Partner", images: ["/assets/sponsors2/17.png"] },
  { category: "Streaming Partner", images: ["/assets/sponsors2/19.png"] },
  { category: "Outreach and Media Partner", images: ["/assets/sponsors2/20.png", "/assets/sponsors2/21.png"] },
  { category: "Media Partner", images: ["/assets/sponsors2/22.png"] }, 
];

const Sponsors = () => {
  return (
    <div className="bg-blend-overlay bg-no-repeat bg-fixed bg-center bg-cover w-full py-10 text-black flex flex-col items-center">
      <h1 className="font-extrabold text-4xl md:text-5xl text-white text-center mb-8">
        OUR SPONSORS
      </h1>

      {sponsorsData.map((sponsor, index) => (
        <div key={index} className="my-5 flex flex-col items-center w-full px-4 md:px-8">
          <h1 className="font-extrabold text-2xl md:text-3xl text-white text-center mb-4">
            {sponsor.category}
          </h1>
          <div className="backdrop-blur-md rounded-lg w-full max-w-6xl flex flex-col justify-center items-center p-6 bg-white/10">
            <div className="flex flex-wrap justify-center gap-6 w-full">
              {sponsor.images.map((image, imgIndex) => (
                <div key={imgIndex} className="flex justify-center items-center">
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <Image
                      src={image}
                      alt={sponsor.category}
                      width={250}
                      height={150}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sponsors;
