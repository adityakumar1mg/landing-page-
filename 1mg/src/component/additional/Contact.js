

const Contact = () => {
    return (
        <>
            <div className="bg-rose-200 font-poppins px-4 py-10 rounded-xl my-10">
                <div className="flex flex-col md:flex-row justify-evenly items-center gap-8 max-w-screen-xl mx-auto">

                    <img
                        src="https://onemg.gumlet.io/marketing/35af2f29-8923-46af-8dea-fb9bec4e22d8.png"
                        alt="Customer Support"
                        className="w-[250px] md:w-[300px] lg:w-[350px] object-contain transform scale-[1.25] relative lg:top-10"
                    />

                    <div className="text-center md:text-left flex flex-col gap-6">
                        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light tracking-[2px] ">
                            Give a call for assistance:
                        </p>
                        <p className="text-2xl sm:text-5xl md:text-7xl lg:text-[90px] font-semibold  tracking-[10px]">
                            <a href="tel:18002124636">1800-212-4636</a>
                        </p>
                        <div className="border-t border-black w-full"></div>
                        <p className="text-lg sm:text-xl md:text-2xl">
                            Reach out to us at: <a href="mailto:corporate.support@1mg.com" className="font-semibold underline">corporate.support@1mg.com</a>
                        </p>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Contact;