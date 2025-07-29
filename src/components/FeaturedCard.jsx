export default function FeaturedCard(){
    return(
        <>
        <div className="playfair-display-h1 mx-auto text-[#4B3832] justify-center">
                    <div className=" bg-[#FEFEFE] max-h-[500px] border-3 border-[#4B3832] shadow-lg overflow-hidden ">
                        <img
                            src="https://picsum.photos/id/425/500/800/"
                            alt="Coffee"
                            className="my-auto mx-auto object-cover hover:transition-all duration-300"
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
        </>
    )
    
}