
import { useState } from "react";
import Dropdown from "./dropdown"
import {tools} from './toolscollection.jsx';
import Loginup from './Loginup';
export default function Navbar() {
    
    return <header className="backdrop-blur-[5px] sticky top-0 z-50 bg-white/30 border-b border-gray-100 px-4 md:px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-6 ">
                {/* Logo */}
                <div className="flex items-center">
                    <div className="h-8 w-8 bg-[#2a41e8] rounded-2xl flex items-center justify-center">
                        <div className="h-4 w-4 bg-white rounded-2xl ">

                        </div>
                    </div>
                    <span className="ml-2 font-bold text-xl">compute<span className="text-[#2a41e8]">base64</span></span>
                </div>

                
            </div>

            

            <div className="flex items-center space-x-3">
                <div className="hidden md:flex items-center space-x-5 mr-8">




                    <div className="flex items-center text-sm font-bold  rounded-sm  ">

                        <Dropdown name={"Tools"} items={tools} />
                    </div>
                    <div className="flex items-center text-sm font-bold hover:text-[#2a41e8] ">
                        <a href="#footer">About us</a>
                    </div>



                </div>

                <button onClick={()=>{
                    
                }} className="bg-[#2a41e8] hover:text-[#2a41e8] hover:bg-white border-2 border-[#2a41e8] text-white rounded-full px-4 py-2 text-sm font-medium flex items-center h-8 transition-all ease-in-out cursor-pointer">
                    <span className="">SignIn</span>
                    {
                        
                    }
                </button>
            </div>
        </div>
    </header>


}