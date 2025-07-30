export default function HeroSection() {
    return (
        <>
            <div className="px-4 w-screen bg-[#FAF9F6] ">
                {/* <img className="absolute w-full h-full object-cover  " src={SectionImg} alt="photo of coffee" /> */}
                <div className="flex">
                    <div className="container mx-auto pt-36 pb-24 justify-start">
                        <h1 className="playfair-display-h1 tracking-tighter text-7xl  md:text-7xl lg:text-9xl font-bold text-[#4B3832] max-w-lg md:max-w-2xl lg:max-w-7xl">Your Daily Dose <br /> Of Premium Coffee</h1>
                        <div className="flex">
                            <hr className="w-[20px] my-auto mt-7"/>
                            <h1 className="playfair-display-h1 ml-2 mt-4 font-bold text-[#4B3832]"> Caffè Noire</h1>
                        </div>
                    </div>

                    {/* <div className="container mx-auto px-0 flex justify-end">
                        <h1 className="playfair-display-h1 px-4  mt-4 text-5xl md:text-7xl lg:text-8xl font-bold text-[#282828] max-w-xl md:max-w-2xl lg:max-w-3xl">Caffè Noire</h1>
                    </div> */}

                </div>
            </div>

        </>
    )
}