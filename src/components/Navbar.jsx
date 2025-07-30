import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'wouter';


export default function Navbar() {

    const [location] = useLocation();

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
            <nav className="fixed w-full py-2 px-4 z-50 bg-[#FAF9F6]/80 backdrop-blur-lg playfair-display-h1">
                <div className="container text-[#4B3832] flex flex-wrap mx-auto items-center justify-between mt-4 mb-4 ">
                    <Link href="/" className="mr-10 block py-1.5 text-2xl font-semibold">
                        Caffè Noire
                    </Link>
                    <button
                        className="lg:hidden focus:outline-none"
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
                            className="items-center text-md hover:underline transition bg-transparent border-none"
                        >
                            Search
                        </button>
                        <Link href="/cart" className=" items-center text-md hover:underline transition">Beans</Link>
                        <Link href="/cart" className="items-center text-md hover:underline transition">Cart</Link>
                        <Link href="/login" className="items-center text-md hover:underline transition">Login</Link>
                        <Link href="/register" className=" items-center text-md hover:underline transition">Register</Link>
                    </div>
                </div>
            </nav>

            {/* Hamburger DropDown */}
            <div className={`fixed z-20 top-[80px] w-full playfair-display-h1 lg:hidden bg-[#FAF9F6] transition-all duration-600 overflow-hidden ${isHam ? 'h-[calc(100vh-80px)] py-0' : 'max-h-0 py-0'}`}>
                <div className="flex flex-col justify-evenly h-full px-8">
                    <a href='#'
                        onClick={() => {
                            setIsHam(false);
                            setIsSearch(!isSearch);
                        }} className="text-[#4B3832] text-5xl hover:underline">
                        Search
                    </a>
                    <Link href="#" className="text-[#4B3832] text-5xl hover:underline">
                        Beans
                    </Link>
                    <Link href="#" className="text-[#4B3832] text-5xl hover:underline">
                        Cart
                    </Link>
                    <Link href="#" className="text-[#4B3832] text-5xl hover:underline">
                        Login
                    </Link>
                    <Link href="#" className="text-[#4B3832] text-5xl hover:underline">
                        Register
                    </Link>
                </div>
            </div>

            {/* SearchBar Drop Down */}
            <div
                ref={searchRef}
                className={`fixed top-[88px] z-40 w-full bg-transparent transition-all duration-300 overflow-hidden ${isSearch ? 'max-h-40 py-8' : 'max-h-0 py-0'}`}>
                <div className="px-4 flex justify-center">
                    <div className="playfair-display-h1 flex items-center border-2 border-[#4B3832] w-full mx-auto max-w-screen-2xl bg-[#FAF9F6] rounded-sm shadow-md px-4 py-3">
                        <input type="text"
                            placeholder="Search..."
                            className="flex-1 bg-transparent text-[#4B3832] placeholder:text-[#4B3832] text-2xl px-2 py-2 focus:outline-none" />
                    </div>
                </div>
            </div>

        </>
    )
}