

import one from "../../assets/one.avif";
const Serve = () => {
  return (
    <div className="mx-[10vw] border-b-2 border-gray-500 pb-5 ">
  {/* Heading */}
  <h1 className="mt-20 text-6xl font-bold">
    WHAT DO WE <br />
    <span className="text-[#00A168]">SERVE?</span>
  </h1>

  {/* Flexbox for content */}
  <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mt-10">
    
    {/* Left Content */}
    <div className="md:w-1/2">
      <h1 className="text-2xl font-bold mb-4">Industry Ready Web</h1>
      <p className="text-gray">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
        dolorem! Doloribus assumenda eum vero repellat nulla quia, facere cum
        omnis, impedit, earum quae veniam ipsum voluptatum. Placeat quo velit
        assumenda.
      </p>
    </div>

    {/* Right Content (Image) */}
    <div className="w-[400px] h-[200px]">
      <img
        src={one}
        alt="image"
        className="w-full h-full  rounded-xl "
      />
    </div>

  </div>

    {/* Flexbox for content */}
  <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mt-20">
    
     {/* Right Content (Image) */}
    <div className="w-[400px] h-[200px]">
      <img
        src={one}
        alt="image"
        className="w-full h-full  rounded-xl "
      />
    </div>

    {/* Left Content */}
    <div className="md:w-1/2 ">
      <h1 className="text-2xl font-bold mb-4">Mendorship and career guidance</h1>
      <p className="text-gray">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
        dolorem! Doloribus assumenda eum vero repellat nulla quia, facere cum
        omnis, impedit, earum quae veniam ipsum voluptatum. Placeat quo velit
        assumenda.
      </p>
    </div>

  </div>
  
    {/* Flexbox for content */}
  <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mt-20">
    
    {/* Left Content */}
    <div className="md:w-1/2">
      <h1 className="text-2xl font-bold mb-4">Industry Ready Web</h1>
      <p className="text-gray">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
        dolorem! Doloribus assumenda eum vero repellat nulla quia, facere cum
        omnis, impedit, earum quae veniam ipsum voluptatum. Placeat quo velit
        assumenda.
      </p>
    </div>

    {/* Right Content (Image) */}
    <div className="w-[400px] h-[200px]">
      <img
        src={one}
        alt="image"
        className="w-full h-full  rounded-xl "
      />
    </div>

  </div>

</div>

  )
}

export default Serve;