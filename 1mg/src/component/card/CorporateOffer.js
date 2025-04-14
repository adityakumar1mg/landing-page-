function CorpoOffer({ discount, name, image_source,back_source }) {

    return (
        <>
           <div className={`${back_source} flex flex-col relative overflow-hidden`}>
  
  <div className="absolute w-[600px] h-[600px] bg-purple-300 rounded-full top-[-200px] left-[-150px] opacity-40 z-0"></div>
  <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full top-[-100px] left-[0px] opacity-30 z-0"></div>
  <div className="absolute w-[300px] h-[300px] bg-purple-700 rounded-full bottom-[-100px] right-[-100px] opacity-20 z-0"></div>

  
  <div className="m-3 p-[20px] text_show z-10 relative">
    <p className="text-white text-3xl font-light leading-1 tracking-wide">
      Extra<br />
      <span className="text-3xl font-bold">{discount}</span><br />
      on <span className="font-bold">{name}</span>
    </p>
  </div>

  
  <div className="w-full h-full z-10 relative">
    <img src={image_source} alt="" className="w-full h-full" />
  </div>
</div>

        </>
    )
}

export default CorpoOffer;