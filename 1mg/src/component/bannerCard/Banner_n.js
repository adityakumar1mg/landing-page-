
function Banner_n({back_source}) {
    const style = {
        backgroundImage: `url(${back_source})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };
    return (
        <>
            <div className="realtive w-screen border border-red-800 h-[40vh] " style={style}>
                <div className="">

                </div>


            </div>

        </>
    )
}
export default Banner_n;