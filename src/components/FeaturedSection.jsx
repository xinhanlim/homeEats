export default function FeaturedSection() {
    return (
        <div className="h-[100vh] px-4 bg-[#FEFEFE]">
            {/* <div className="container mx-auto px-0 flex justify-end mb-12">
                <h1 className="playfair-display-h1 px-4  mt-4 text-5xl md:text-7xl lg:text-8xl font-bold text-[#282828] max-w-xl md:max-w-2xl lg:max-w-3xl">Caffè Noire</h1>
            </div> */}
            <div className="playfair-display-h1 container mx-auto justify-center py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="">
                <div className=" bg-[#FEFEFE] border-3 border-[#4B3832] h-[50vh] shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <img
                        src="https://picsum.photos/id/425/500/800/"
                        alt="Coffee"
                        className="w-full h-auto mx-auto object-cover hover:transition-all duration-300"
                    />
                </div>
                <div className="py-2">
                        <h3 className="text-xl font-bold text-[#4B3832]">RICH - BOLD - TROPICA ESPRESSO</h3>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-lg font-bold text-[#4B3832]">$4.50</span>
                            <button className="bg-[#4B3832] text-[#EEEFE0] px-4 py-2 rounded-md hover:bg-[#3A2C27] transition">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}