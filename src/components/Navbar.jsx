import { useState } from 'react';

export default function Navbar() {

    const [isHam, setIsHam] = useState(false);

    return (
        <nav className="block w-full px-4 py-2 bg-[#4B3832] shadow-md lg:px-2 lg:py-3  playfair-display-h1">
            <div className="container flex flex-wrap mx-auto items-center justify-between mt-4 mb-4 ">
                <a href="#" className="mr-10 text-[#EEEFE0] block py-1.5 text-2xl font-semibold">
                    Caffè Noire
                </a>
                <button
                    className="lg:hidden text-[#EEEFE0] focus:outline-none"
                    onClick={() => setIsHam(!isHam)}
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

                <div className="hidden lg:flex flex-1 items-center gap-2 pl-10 pr-10">
                    <input type="text" className="w-full pl-10 pr-3 py-3 bg-transparent text-[#EEEFE0] placeholder:text-[#EEEFE0] text-slate-200 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Search here..." />
                    <button className="rounded-md bg-[#EEEFE0] py-3 px-4 border border-transparent text-center text-sm text-[#4B3832] transition-all shadow-md hover:bg-[#f7f7f5] active:bg-[#e4e4db] focus:bg-[#f7f7f5] hover:shadow-lg focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        Search
                    </button>
                </div>
                <div className="hidden lg:flex ml-10 gap-2">
                    <button className="rounded-md bg-[#EEEFE0] py-3 px-4 text-sm text-[#4B3832] hover:bg-[#f7f7f5] transition shadow-md">
                        Login
                    </button>
                    <button className="rounded-md bg-[#EEEFE0] py-3 px-4 text-sm text-[#4B3832] hover:bg-[#f7f7f5] transition shadow-md">
                        Register
                    </button>
                </div>
            </div>
        </nav>
    )
}