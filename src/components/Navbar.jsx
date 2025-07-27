import React from 'react';

export default function Navbar() {
    return (
        <nav className="block w-full px-4 py-2 bg-[#819A91] shadow-md lg:px-8 lg:py-3 justify-between playfair-display-h1">
            <div className="container flex flex-wrap items-center justify-between mt-4 mb-4 ">
                <a href="#" className="mr-10 text-[#EEEFE0] block py-1.5 text-base font-semibold">
                    HomeEats
                </a>
                <div className="flex gap-x-2 flex-1">
                    <input type="text" className="w-full pl-10 pr-3 py-2 bg-transparent text-[#EEEFE0] placeholder:text-[#EEEFE0] text-slate-200 text-sm border border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Search here..." />
                    <button className="rounded-md bg-[#EEEFE0] py-2 px-4 border border-transparent text-center text-sm text-[#819A91] transition-all shadow-md hover:bg-[#f7f7f5] active:bg-[#e4e4db] focus:bg-[#f7f7f5] hover:shadow-lg focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                        Search
                    </button>
                </div>
                <div className="flex gap-x-2">
                    <ul className="flex flex-col gap-2 ml-10 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
                        <button className="rounded-md bg-[#EEEFE0] py-2 px-4 border border-transparent text-center text-sm text-[#819A91] transition-all shadow-md hover:bg-[#f7f7f5] active:bg-[#e4e4db] focus:bg-[#f7f7f5] hover:shadow-lg focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                            Login
                        </button><button className="rounded-md bg-[#EEEFE0] py-2 px-4 border border-transparent text-center text-sm text-[#819A91] transition-all shadow-md hover:bg-[#f7f7f5] active:bg-[#e4e4db] focus:bg-[#f7f7f5] hover:shadow-lg focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                            Register
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}