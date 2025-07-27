import { useEffect, useState, useRef } from 'react';

export default function Navbar() {

    const [isHam, setIsHam] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const searchRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearch(false);
            }
        }
        if (isSearch) {
            document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }
    }, [isSearch])

    return (
        <>
            <nav className="w-full px-4 py-2 bg-[#4B3832] shadow-md lg:px-2 lg:py-3  playfair-display-h1">
                <div className="container flex flex-wrap mx-auto items-center justify-between mt-4 mb-4 ">
                    <a href="#" className="mr-10 text-[#EEEFE0] block py-1.5 text-2xl font-semibold">
                        Caffè Noire
                    </a>
                    <button
                        className="lg:hidden text-[#EEEFE0] focus:outline-none"
                        onClick={() => {
                            setIsHam(!isHam)
                            setIsSearch(false);
                        }
                        }
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    <div className="hidden lg:flex ml-10 gap-10">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setIsSearch(prev => !prev);
                            }}
                            className="text-[#EEEFE0] items-center text-md hover:underline transition bg-transparent border-none"
                        >
                            Search
                        </button>
                        <a href="/cart" className="text-[#EEEFE0] items-center text-md hover:underline transition">Cart</a>
                        <a href="/login" className="text-[#EEEFE0] items-center text-md hover:underline transition">Login</a>
                        <a href="/register" className="text-[#EEEFE0] items-center text-md hover:underline transition">Register</a>
                    </div>
                </div>
            </nav>

            {/* Hamburger DropDown */}
            <div className={`lg:hidden bg-[#EEEFE0] transition-all duration-300 overflow-hidden ${isHam ? 'max-h-60 py-4' : 'max-h-0 py-0'}`}>
                <div className="flex flex-col gap-3 px-4">
                    <a href='#'
                        onClick={() => {
                            setIsHam(false);
                            setIsSearch(!isSearch);
                        }} className="text-[#4B3832] text-md hover:underline">
                        Search
                    </a>
                    <a href="#" className="text-[#4B3832] text-md hover:underline">
                        Cart
                    </a>
                    <a href="#" className="text-[#4B3832] text-md hover:underline">
                        Login
                    </a>
                    <a href="#" className="text-[#4B3832] text-md hover:underline">
                        Register
                    </a>
                </div>
            </div>

            {/* SearchBar Drop Down */}
            <div
                ref={searchRef}
                className={`absolute top-[104px] left-0 z-50 w-full bg-transparent transition-all duration-300 overflow-hidden ${isSearch ? 'max-h-40 py-6' : 'max-h-0 py-0'}`}>
                <div className="container mx-auto flex justify-center">
                    <div className="playfair-display-h1 flex items-center w-full mx-auto bg-[#EEEFE0] rounded-full shadow-md px-4 py-3">
                        <input type="text"
                            placeholder="Search..."
                            className="flex-1 bg-transparent text-[#4B3832] placeholder:text-[#4B3832] text-2xl px-2 py-2 focus:outline-none" />
                    </div>
                </div>
            </div>

        </>
    )
}