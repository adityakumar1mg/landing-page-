function Banner({ discount, image_source, heading, button_text }) {
  return (
    <div className="w-full h-full md:h-full card_back_gradient2 ">
      <div className="flex flex-col md:flex-row items-center justify-evenly p-4 h-full card_backgradient2">
        <div className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-[150px] sm:h-[180px] md:h-[200px] lg:h-[250px] relative order-1 md:order-none overflow-hidden">
          <img 
            src={image_source}
            alt=""
            className="w-full h-full object-contain transform scale-[1.2]"
          />
        </div>

        <div className="flex flex-col md:flex-col items-center gap-4 md:gap-9 order-2 md:order-none">

          <div className="text-center md:text-left tracking-wider">
            <p className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Extra {discount}% OFF</p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-[28px]">
              + Assured NeuCoins on <span className="font-semibold">{heading}</span>
            </p>
          </div>


          <div className="md:ml-8">
            <button className="border-transparent border-2 font-semibold bg-black text-white rounded-full px-6 sm:px-8 py-2 text-base sm:text-xl md:text-2xl hover:border-black hover:bg-transparent hover:text-black transition duration-200 ease-in-out">
              {button_text}
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}


export default Banner;
