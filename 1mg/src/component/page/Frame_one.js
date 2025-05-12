
import Contact from "../additional/Contact.js";
import Heading from "../additional/Heading.js";
import WhyUs from "../additional/WhyUs.js";
import ImgDetail from '../card/ImgDetail.js';
import Banner from "../bannerCard/Banner.js";
import CorpoOffer from "../card/CorporateOffer.js";
import AHC from "../additional/AHC.js";
import Carousel from "../resource/Carousel.js";
import VAS from "../card/VAS.js";
import Banner_n from "../bannerCard/Banner_n.js";
import BannerImg from "../bannerCard/BannerImg.js";



function FrameOne() {
    let slide=[
        // <Banner_n
        // <Banner_n/>,
        //  back_source = "https://onemg.gumlet.io/marketing/bdca1727-9bb4-473f-bf0c-7d74e9cdc8dd.png"/>,
        <BannerImg back_source={"https://onemg.gumlet.io/marketing/84ba9b83-56f6-40cb-9df8-8e39eab98abe.png"}/>,
        // <Banner image_source={"https://onemg.gumlet.io/marketing/7ee4faca-e7e8-4eb1-b9fd-5f90ca1c2be3.png"} discount={20} heading={"Lab Test"} button_text={"Order Now"} />,
        // <Banner image_source={"https://onemg.gumlet.io/marketing/7ee4faca-e7e8-4eb1-b9fd-5f90ca1c2be3.png"} discount={20} heading={"Lab Test"} button_text={"book Now"} />,
        // <Banner image_source={"https://onemg.gumlet.io/marketing/7ee4faca-e7e8-4eb1-b9fd-5f90ca1c2be3.png"} discount={20} heading={"Lab Test"} button_text={"edit"} />,
        // <Banner image_source={"https://onemg.gumlet.io/marketing/7ee4faca-e7e8-4eb1-b9fd-5f90ca1c2be3.png"} discount={20} heading={"Lab Test"} button_text={"edit"} />,
        // <Banner image_source={"https://onemg.gumlet.io/marketing/7ee4faca-e7e8-4eb1-b9fd-5f90ca1c2be3.png"} discount={20} heading={"Lab Test"} button_text={"edit"} />,
        // <Banner image_source={"https://onemg.gumlet.io/marketing/7ee4faca-e7e8-4eb1-b9fd-5f90ca1c2be3.png"} discount={20} heading={"Lab Test"} button_text={"edit"} />,
        // <Banner image_source={"https://onemg.gumlet.io/marketing/7ee4faca-e7e8-4eb1-b9fd-5f90ca1c2be3.png"} discount={20} heading={"Lab Test"} button_text={"edit"} />,
    ]
    return (
        <>
            <div>
                <Carousel banners={slide}/>
                {/* <div>
                    <h1>main banner 

                    </h1>
                </div>
                <div className="w-full m-auto">
                    <Banner image_source={"https://onemg.gumlet.io/marketing/7ee4faca-e7e8-4eb1-b9fd-5f90ca1c2be3.png"} discount={20} heading={"Lab Test"} button_text={"Order Now"} />
                </div> */}
                <div className={`w-[80%] m-auto`}>
                    <div className={`flex flex-wrap justify-evenly`}>

                    </div>
                </div>
                
                <Banner_n/>
                <div className="w-[90%] md:w-[80%] m-auto rounded-xl overflow-hidden">
                <AHC/>
                    <Heading name="Explore more Services" />
                    <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-evenly md:gap-8 shadow-xl/30">
                        <div className="">
                            <VAS css="trans_flip" image_source="https://onemg.gumlet.io/marketing/592ca4c2-acce-49c4-a391-a6ea10f778cc.png"/>
                        </div>
                        <div>
                            <VAS name="Lab" discount="30" />
                        </div>
                        <div>
                            <VAS name="E-consultation" discount="4" image_source="https://onemg.gumlet.io/marketing/446bda92-6704-4d24-a2cc-b87b3f3518d2.png"/>
                        </div>
                        
                        {/* <CorpoOffer name="Doctor" discount={"20% Off"} image_source={"https://onemg.gumlet.io/marketing/7ee4faca-e7e8-4eb1-b9fd-5f90ca1c2be3.png"} back_source="card_back_gradient2" />
                        <CorpoOffer name="Medicine" discount={"3% Off"} image_source={"https://onemg.gumlet.io/marketing/84ccf3f4-1fa3-46c6-b2b0-923c932922d0.png"} back_source="card_back_gradient3" />
                        <CorpoOffer name="E-Consultion" subhead="Get" discount={"100% Off"} image_source={"https://onemg.gumlet.io/marketing/7ee4faca-e7e8-4eb1-b9fd-5f90ca1c2be3.png"} back_source="card_back_gradient" />
                        <CorpoOffer name="Lab" discount={"50% Off"} image_source={"https://onemg.gumlet.io/marketing/845ce63e-6cdd-4960-a258-12b6e086a960.png"} back_source="card_back_gradient4" /> */}

                    </div>
                    <Heading name="Chat with our specialist doctors" />
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
                        <ImgDetail image_source={"https://onemg.gumlet.io/marketing/237c1cde-ef6f-4d07-90b4-c9eb978c62cb.png"} description={"General Physician"} />
                        <ImgDetail image_source={"https://onemg.gumlet.io/marketing/2e36c801-7434-4109-984e-c34f61f70c0f.png"} description={"Dental Specialist "} />
                        <ImgDetail image_source={"https://onemg.gumlet.io/marketing/e24dc8c6-63a5-4f09-a6da-819079552fea.png"} description={"Eye Specialist "} />
                        <ImgDetail image_source={"https://onemg.gumlet.io/marketing/9b762d15-3d85-45b3-9892-c80af86d7887.png"} description={"Bone and Joint Specialist "} />
                    </div>
                    <Heading name="Why Tata 1mg" />
                    <WhyUs />
                    <Heading name="Have a Query?" />
                    <Contact />
                    {/* <FlipCard/> */}
                </div>
                <div>
                   
                </div>
            </div>
        </>
    )
}

export default FrameOne;