import React from 'react';

export default function Navbar() {
    return (
        <nav className="block w-full px-4 py-2 bg-[#4B3832] shadow-md lg:px-8 lg:py-3 justify-between playfair-display-h1">
            <div className="container flex flex-wrap items-center justify-between mt-4 mb-4 ">
                <a href="#" className="mr-10 text-[#EEEFE0] block py-1.5 text-2xl font-semibold">
                    Caffè Noire
                </a>
                <div className="flex gap-x-2 flex-1">
                    <input type="text" className="w-full pl-10 pr-3 py-2 bg-transparent text-[#EEEFE0] placeholder:text-[#EEEFE0] text-slate-200 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Search here..." />
                    <button className="rounded-md bg-[#EEEFE0] py-2 px-4 border border-transparent text-center text-sm text-[#4B3832] transition-all shadow-md hover:bg-[#f7f7f5] active:bg-[#e4e4db] focus:bg-[#f7f7f5] hover:shadow-lg focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        Search
                    </button>
                </div>
                <div className="flex ml-4 gap-2">
                    <button className="rounded-md bg-[#EEEFE0] py-2 px-4 text-sm text-[#4B3832] hover:bg-[#f7f7f5] transition shadow-md">
                        Login
                    </button>
                    <button className="rounded-md bg-[#EEEFE0] py-2 px-4 text-sm text-[#4B3832] hover:bg-[#f7f7f5] transition shadow-md">
                        Register
                    </button>
                </div>
            </div>
        </nav>
    )
}