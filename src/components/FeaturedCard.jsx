export default function FeaturedCard(props){

    const handleAddToCart = () =>{
        alert("Added to cart")
    }

    return(
        <>
        <div className="playfair-display-h1 mx-auto text-[#4B3832] justify-center">
                    <div className=" bg-[#FAF9F6] max-h-[500px] border-3 border-[#4B3832] shadow-lg overflow-hidden ">
                        <img
                            src={props.image}
                            alt={props.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="py-2">
                        <h3 className="text-xl font-bold text-[#4B3832]">{props.name}</h3>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-lg font-bold text-[#4B3832]">${props.price.toFixed(2)}</span>
                            <button onClick={handleAddToCart} className="bg-[#4B3832] text-[#FAF9F6] px-4 py-2 rounded-md hover:bg-[#3A2C27] transition">
                                Add to Cart
                            </button>
                        </div>
                    </div>
            </div>
        </>
    )
    
}