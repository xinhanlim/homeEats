export default function HeroSection() {
    return (
        <>
            <div className="relative z-10 px-4 w-screen h-[50vh] overflow-hidden ">
                {/* <img className="absolute w-full h-full object-cover  " src={SectionImg} alt="photo of coffee" /> */}
                <div className="z-20 relative flex inset-0">
                    <div className="container mx-auto py-40 justify-start ">
                        <h1 className="playfair-display-h1 tracking-tighter text-7xl  md:text-7xl lg:text-8xl font-bold text-[#4B3832] max-w-xl md:max-w-2xl lg:max-w-3xl">Your Daily Dose Of Premium Coffee</h1>
                        <h1 className="playfair-display-h1 mt-4 font-bold text-[#4B3832]">Caffè Noire</h1>
                    </div>

                    {/* <div className="container mx-auto px-0 flex justify-end">
                        <h1 className="playfair-display-h1 px-4  mt-4 text-5xl md:text-7xl lg:text-8xl font-bold text-[#282828] max-w-xl md:max-w-2xl lg:max-w-3xl">Caffè Noire</h1>
                    </div> */}

                </div>
            </div>

        </>
    )
}