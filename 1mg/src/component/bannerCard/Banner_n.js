
function Banner_n({ back_source }) {
    const style = {
        backgroundImage: `url(${back_source})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };
    return (
        <>
            <div className="realtive w-screen border h-[250px] overflow-hidden" style={style}>
                <div className=" flex flex-nowrap h-full border-red-800 z-10 ">
                    <div className="bg-red-400 w-1/3 h-full ">
                        dfg
                        dfghjkl
                    </div>
                    <div className="bg-blue-400 w-full md:w-2/3 h-full flex items-center justify-center p-6 corner_cll relative z-10">
                        <div className="">
                            <span className="relative bg-[#0b4c8d] block h-4 w-full"></span>
                            <div>
                                <p className="text-xl md:text-2xl leading-7 md:leading-9 text-gray-800">
                                    Avail your company-sponsored
                                </p>
                                <h1 className="text-white uppercase font-bold text-3xl md:text-[38px] tracking-tight leading-tight">
                                    Annual Health Checkup
                                </h1>
                                <span className="relative bg-[#0b4c8d] block h-4 w-full "></span>

                                <p className="font-semibold text-xl md:text-2xl tracking-wide leading-8 mt-2 text-gray-700">
                                    and stay proactive about your health
                                </p>
                            </div>

                        </div>
                    </div>

                </div>


            </div>

        </>
    )
}
export default Banner_n;