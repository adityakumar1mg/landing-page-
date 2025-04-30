import WhyUsCard from "./WhyUsCard.js";


function WhyUs() {
    return (
        <>
            <div className="my-10">
                <div className="bg-rose-100 rounded-xl p-6 sm:p-8 md:p-10 flex flex-col gap-8 md:gap-10">
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 md:gap-10">
                        <WhyUsCard
                            heading="Accessible"
                            discription="Our Pharma services are available in 1900+ cities, Lab tests across 50+ cities, and consults with 23+ specializations via voice/video calls"
                            image_source="https://onemg.gumlet.io/v1642319838/jdzh0seu1inigb1vbuqj.svg"
                        />

                        <WhyUsCard
                            heading="Secure"
                            discription="Tata 1mg uses Secure Sockets Layer (SSL) 128-bit encryption and is Payment Card Industry Data Security Standard (PCIDSS) compliant"
                            image_source="https://onemg.gumlet.io/v1642319906/r96vhfshcxoxzff9yrvl.svg"
                        />

                        <WhyUsCard
                            heading="Affordable"
                            discription="Find affordable medicine substitutes, save up to 50% on health products, up to 80% off on lab tests and free doctor consultations."
                            image_source="https://onemg.gumlet.io/v1642319865/gppqqox9quudpwenk1td.svg"
                        />

                        <WhyUsCard
                            heading="Reliable"
                            discription="Our programs and health information are reviewed by doctors. We rely on in-house labs and warehouses to ensure customer satisfaction."
                            image_source="https://onemg.gumlet.io/v1642319887/ff9dpnud3yjx5fwhglhq.svg"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default WhyUs;