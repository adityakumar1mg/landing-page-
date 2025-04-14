
function Discount({discount,image_source,back_source}) {
    // const variable_image="";
    return (
        <>
            <div className={`${back_source} font-bold rounded-xl shadow-md px-4 py-2 pt-4 flex flex-col items-center justify-center text-center`}>

                <p className="text-2xl">Up to <span>{discount}</span>% off</p>

                <img src={image_source} alt="medicine bottle" className="w-50 h-50 object-contain border border-2" />
            </div>
        </>
    )
}

export default Discount;