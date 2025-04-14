
import compimg from "../../assets/img/femal.png.avif";
function ImgDetail({description}){
    return(
        <>
            <div className={`flex flex-col text-center gap-1  `}>
                <img src={compimg} alt="" className="rounded-xl"></img>
                <p className={`font-bold`}>
                    {description}
                </p>
            </div>        
        </>
    )
}

export default ImgDetail;