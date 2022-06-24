import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Logo from "./imgs/logo.png"

const Header = () => {


    return (
        <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm items-center">
            <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
                <a href="/"><img src="https://discord.com/channels/@me/738892427548557408/989716927469457468" className="mt-1 hidden lg:inline" alt="logo"/></a>
            </div>
        </div>
    )
}

export default Header