import image2 from '../../assets/img/medicine_bot.png'
function NameDiscount({name,discount,image_source,back_source}) {
    // const variable_image="";
    return (
        <>
            <div className={`${back_source} text-white rounded-xl shadow-md px-4 py-2 flex flex-col items-center justify-center text-center`}>
                <h2 className="text-2xl font-bold">{name}</h2>

                <p className="text-lg">Up to <span>{discount}</span>% off</p>

                <img src={image_source} alt="medicine bottle" className="w-50 h-50 object-contain" />
            </div>
        </>
    )
}

export default NameDiscount;