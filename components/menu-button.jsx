"use client"

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Button(){
    const [isActive, SetIsActive] = useState(true);

    function Toggle() {
        SetIsActive(!isActive);
    }

    return (
        <div className="flex flex-col">
            <button  onClick={() => Toggle()} className="font-sans font-light text-lg lg:text-xl cursor-pointer ml-10 md:mt-2 hover:scale-110 hover:underline duration-150 ease-in-out p-4"> -- Menu --</button>
            <motion.div
                className={`${isActive ? 'hidden' : ''}`}
                animate={{ opacity: isActive ? 0 : 1, x: isActive ? -100 : 0, scale: isActive ? 2 : 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <ul className={`h-96 w-64 top-0 font-sans font-light text-sm lg:text-lg cursor-pointer transition-transform duration-500`}>
                    <li><Link href="/about"><button  className="text-6xl mx-4 pt-4 lg:mx-9 hover:scale-110 hover:line-through duration-150  ease-in-out" onClick={() => {Toggle()}}>About</button></Link></li>
                    <li><Link href="/blog"><button  className="text-6xl mx-4 pt-4 lg:mx-9 text-gray-400" onClick={() => {Toggle()}} >Blog</button></Link></li>
                    <li><Link href="/projects"><button  className="text-6xl mx-4 pt-4 lg:mx-9 text-gray-400" onClick={() => {Toggle()}}>Projects</button></Link></li>
                    <li><a href="/CV.pdf" download="CV-Mohamed-Amine.pdf"><button  className="text-2xl mx-4 pt-4 mt-10 lg:mx-9 hover:scale-110 hover:underline duration-150  ease-in-out" onClick={() => {Toggle()}}>See my resume</button></a></li>
                </ul>
            </motion.div>
        </div>
        
    )
}
