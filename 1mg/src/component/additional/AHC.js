
function AHC() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center justify-between p-6 bg-white rounded-xl gap-6 border">
                <div className="md:w-1/2 space-y-4">
                    <h1 className=" leading-tight text-4xl md:text-5xl font-bold  text-gray-900">
                        Free Annual Health Checkup For Employees
                    </h1>
                    <p className="text-lg text-gray-700">
                        Take a step towards preventive healthcare. Book your corporate-sponsored Annual Health Checkup package today
                        and take control of your health.
                    </p>
                    <ul className="list-disc list-inside text-gray-800 space-y-1 pl-4">
                        <li>Complete Diagnostic Tests</li>
                        <li>Home Sample Collection</li>
                        <li>Detailed Doctor Consultation</li>
                    </ul>
                    <div className="pt-[20px]">
                        <button className="mt-8 border-2 border-transparent ease-out-in bg-[#ff6f61] hover:bg-transparent hover:border-2 hover:border-[#ff6f61]  hover:text-[#ff6f61] text-white text-lg font-semibold py-3 px-6 rounded-lg transition duration-200">
                            Request your Annual Health Checkup
                        </button>
                    </div>

                </div>

                <div className="md:w-1/2 flex justify-center items-center relative">
                    <img
                        src="https://onemg.gumlet.io/marketing/5e690929-ca16-4de8-901f-3453af146bd3.png"
                        alt="Elderly Couple"
                        className="max-w-full h-auto rounded-lg scale-125 mb-9"
                    />
                </div>
            </section>

        </>
    )
}
export default AHC;