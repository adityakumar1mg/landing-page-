
function WhyUsCard({ image_source = "na", heading = "heading", discription = "discription" }) {
    return (
        <>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-center sm:items-start">
                <div className="flex justify-center w-[100px] sm:w-[120px] md:w-[150px] shrink-0">
                    <img src={image_source} className="w-full h-auto object-contain" alt={heading} />
                </div>

                <div className="flex flex-col justify-center text-center sm:text-left">
                    <p className="font-semibold text-xl sm:text-2xl text-gray-700">{heading}</p>
                    <p className="text-gray-600 text-base sm:text-lg md:text-xl pt-2 tracking-wide">{discription}</p>
                </div>
            </div>


        </>
    )
}
export default WhyUsCard;