import heroImg from '../assets/herosection.jpg'

export default function HeroSection() {
    return (
        <>
            <div className="relative z-10 w-screen h-screen overflow-hidden ">
                <img className="w-full h-full object-cover " src={heroImg} alt="photo of coffee" />
                <div className="absolute flex inset-0 flex flex-col justify-left">
                    <div className="container mx-auto px-0 py-40 ">
                        <h1 className="playfair-display-h1 tracking-tighter px-4 text-5xl md:text-7xl lg:text-8xl font-bold text-[#EEEFE0] max-w-xl md:max-w-2xl lg:max-w-3xl">Your Daily Dose Of Premium Coffee</h1>
                    </div>

                    <div className="container mx-auto px-0 py-60 flex justify-end">
                        <h1 className="playfair-display-h1 px-4  mt-4 text-5xl md:text-7xl lg:text-8xl font-bold text-[#EEEFE0] max-w-xl md:max-w-2xl lg:max-w-3xl">Caffè Noire</h1>
                    </div>

                </div>
            </div>

        </>
    )
}