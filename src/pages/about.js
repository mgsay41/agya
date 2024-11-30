function About() {
  return (
    <>
      <h3 className="text-3xl text-center font-bold mb-10">About</h3>
      <div className="ml-4">
        <div className="flex flex-col lg:flex-row justify-between bg-secondary rounded-xl p-4 lg:p-8">
          {/* Text Section */}
          <div className="flex flex-col justify-center items-center text-center lg:w-2/3">
            <h3 className="font-bold text-2xl mb-4">About Climate Heritage</h3>
            <p className="text-sm px-2 sm:px-5">
              Heritage Climate is your hub for archaeological and heritage
              conservation exploration. <br />
              Connect with fellow enthusiasts, share knowledge, and collaborate
              on projects. Discover a world of ancient civilizations and modern
              preservation efforts. Join our community and be part of the future <br />
              of heritage.
            </p>
          </div>
          {/* Image Section */}
          <img
            src="/about.png"
            alt="About"
            className="w-full max-w-[250px] mx-auto lg:w-[250px] lg:mx-0"
          />
        </div>

        {/* Research Interests Section */}
        <div className="mt-5">
          <h3 className="text-base mb-4">Research Interests</h3>
          <div className="bg-secondary p-5 rounded-xl">
            <p className="font-semibold mb-3">History and Timeline</p>
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <img src="/Research-about.png" alt="Research" className="w-[150px]" />
              <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                <div>
                  <p className="mb-10">Ancient Civilizations</p>
                  <p>Medieval Period</p>
                </div>
                <div>
                  <p className="mb-10">Modern Era</p>
                  <p>Prehistoric Era</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sites and Monuments */}
          <div className="bg-secondary p-5 my-5 rounded-xl">
            <p className="font-semibold mb-3">Sites and Monuments</p>
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <img
                src="/Research-about 2.png"
                alt="Sites"
                className="w-[150px]"
              />
              <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                <div>
                  <p className="mb-10">World Heritage Sites</p>
                  <p>Virtual Tours</p>
                </div>
                <div>
                  <p className="mb-10">Regional Archaeology</p>
                  <p>Archaeological Sites</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cultural Heritage */}
          <div className="bg-secondary p-5 rounded-xl">
            <p className="font-semibold mb-3">Cultural Heritage</p>
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <img
                src="/Research-about 3.png"
                alt="Cultural Heritage"
                className="w-[150px]"
              />
              <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                <div>
                  <p className="mb-10">Conservation Projects</p>
                  <p>Heritage Management</p>
                </div>
                <div>
                  <p className="mb-10">Cultural Impact</p>
                  <p>Legal Protections</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Climate Heritage Aim */}
        <div className="my-4">
          <h3 className="text-center my-4 text-xl">Climate Heritage Aim</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border py-8 px-4 flex flex-col justify-center items-center text-center border-black/40 rounded-xl">
              <img
                alt=""
                className="w-8 mb-4"
                src="/heroicons-outline_user-group.png"
              />
              <p className="font-bold text-xs w-[140px]">
                Enhance collective efforts in heritage preservation
              </p>
            </div>
            <div className="border py-8 px-4 flex flex-col justify-center items-center text-center border-black/40 rounded-xl">
              <img
                alt=""
                className="w-8 mb-4"
                src="/icon-park_future-build-three.png"
              />
              <p className="font-bold text-xs w-[140px]">
                Bridge gaps between disciplines
              </p>
            </div>
            <div className="border py-8 px-4 flex flex-col justify-center items-center text-center border-black/40 rounded-xl">
              <img
                alt=""
                className="w-8 mb-4"
                src="/mdi_lightbulb-group-outline.png"
              />
              <p className="font-bold text-xs w-[140px]">
                Provide community for knowledge exchange and scientific topics
                discussions
              </p>
            </div>
            <div className="border py-8 px-4 flex flex-col justify-center items-center text-center border-black/40 rounded-xl">
              <img alt="" className="w-8 mb-4" src="/grommet-icons_book.png" />
              <p className="font-bold text-xs w-[140px]">
                Provide educational materials for enthusiasts and professionals
              </p>
            </div>
          </div>
        </div>

        {/* Collaborations */}
        <div className="my-4">
          <h3 className="text-center my-4 text-xl">Collaborations</h3>
          <div className="bg-secondary rounded-xl">
            <div className="flex flex-wrap justify-center items-center p-5 gap-5">
              <img src="/Nile_University_logo 1.png" className="w-28" alt="" />
              <img src="/BMBF_Logo.svg 1.png" className="w-28" alt="" />
              <img src="/image 1371.png" className="w-28" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
