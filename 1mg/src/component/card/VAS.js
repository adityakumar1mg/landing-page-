
function VAS({ 
    name='Doctor', 
    discount='2', 
    css,
    image_source='https://onemg.gumlet.io/marketing/13227de3-cd1b-4e86-bfe0-07bf49c6c03a.png', 
    back_source='https://onemg.gumlet.io/marketing/fe674675-7647-41cf-b5b0-df8d749e2abe.png'}) {
    const style = {
        backgroundImage: `url(${back_source})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };
    return (
        <>
            <div className={`rounded-xl overflow-hidden h-[250px] md:min-w-[350px] w-full md:h-full`} style={style}>
                <div className="flex flex-row-reverse md:flex-col items-center justify-center">
                    <div className="text-white relative bottom-[30px] right-[10px] md:bottom-0 md:right-0">
                        <div className="py-0 md:py-6 relative top-0 md:top-4">
                            <p className="font-thin text-[19px] md:text-3xl">Up to </p>
                            <p className="font-bold text-3xl md:text-6xl w-[150px] md:w-[250px]">{discount}% off</p>
                            <p className="font-normal text-[19px] md:text-3xl">on {name}</p>
                            <div className="relative w-[100px] h-3 flex items-center pt-4">
                                <span className="bg-white h-[2px] w-full block"></span>
                                <span className="bg-white w-3 h-3 rounded-full absolute right-0"></span>
                            </div>
                        </div>

                    </div>
                    <div className="relative flex items-center right-9 md:right-0 justify-center w-[200px] h-[300px] md:w-[400px] md:h-[400px] ">
                        <div className="relative w-full h-full">
                            <span className="absolute md:inset-0 m-auto bg-white rounded-full right-[38px] top-[-7px] z-0 w-[325px] h-[325px] md:w-[75%] md:h-[75%]"></span>
                            <img
                                src={image_source}
                                alt={`${name} offer visual`}
                                className={`absolute inset-0 m-auto z-10 w-full h-full object-contain bottom-[52px] md:bottom-0 ${css}`}
                            />
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
export default VAS;
