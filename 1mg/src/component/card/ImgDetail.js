
function ImgDetail({description,image_source}){
    return(
        <>
            <div className={`flex flex-col text-center gap-1  `}>
                <img src={image_source} alt="" className="rounded-xl"></img>
                <p className={`font-bold`}>
                    {description}
                </p>
            </div>        
        </>
    )
}

export default ImgDetail;