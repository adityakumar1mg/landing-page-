function CorpoOffer({ discount, name, image_source, back_source, subhead = "Extra" }) {

  return (
    <>
      <div className={`${back_source} flex flex-col relative overflow-hidden rounded-xl`}>

        <div className="absolute w-[600px] h-[600px] bg-purple-300 rounded-full top-[-200px] left-[-150px] opacity-40 z-0"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full top-[-100px] left-[0px] opacity-30 z-0"></div>
        <div className="absolute w-[300px] h-[300px] bg-purple-700 rounded-full bottom-[-100px] right-[-100px] opacity-20 z-0"></div>

        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden">
  <img src={image_source}
    alt=""
    className="w-full h-full object-fit md:object-cover transform scale-x-[0.8] md:scale-[1]"
  />

  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 bg-black/60">
    <p className="text-white text-xl sm:text-3xl font-light tracking-wide">
      {subhead}<br />
      <span className="text-3xl sm:text-5xl font-bold">${discount}</span>
      <br/>
      on <span className="font-bold text-2xl sm:text-3xl">{name}</span>
    </p>
  </div>
  
</div>


      </div>

    </>
  )
}

export default CorpoOffer;