import image2 from '../../assets/img/consult.png'
function Consult({ name, text_col, image_source, back_source, url_source,color_consult}) {
    // const variable_image="";
    return (
        <>
            <div className="flex p-2 w-[600px] h-[300px] bg-blue-200">
                <div className="flex items-center">
                    <div className="flex flex-col gap-3">
                        <p className="text-2xl">Free Online <span className={`font-bold ${color_consult}`}> Doctor Consultations</span> with <span className="font-bold">{name}</span></p>
                        <div>
                            <button className="border-transparent border-2 bg-orange-800 text-white rounded-2xl py-2 px-4 font-semibold hover:bg-transparent hover:text-orange-800 hover:border-orange-800 transition-all duration-300 ease-in-out">
                                CONSULT NOW
                            </button>

                        </div>
                    </div>

                </div>
                <div className="w-full h-full ">
                    <img src={image_source} alt="medicine bottle" className="w-full h-full object-contain" />

                </div>
            </div>
        </>
    )
}

export default Consult;