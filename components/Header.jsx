import React, { useEffect, useState } from 'react'
import Link from "next/link"
import {MenuIcon, ChevronDownIcon, HomeIcon, SearchIcon} from "@heroicons/react/solid"
import {signIn, signOut, useSession} from "next-auth/react"
import {useRouter} from "next/router"

const Header = () => {

    const {data: session} = useSession()
    const router = useRouter();

    return (
        <div className="sticky top-0 z-50 bg-white px-4 py-5 shadow-sm items-center justify-center flex space-x-20">
            <div className="relative h-12 w-20 flex-shrink-0 cursor-pointer justify-start ">
                <a href="/"><img src="https://thschmitz.netlify.app/static/media/logo.419c2045413bd279e6d2.png" className="mt-1 lg:inline" alt="logo"/></a>
            </div>
            <div className="items-center text-gray-500 mx-5 space-x-20 hidden lg:flex">
                <div className="text-center flex lg:inline-flex space-x-20">
                    <p className={`iconWidget ${router.asPath == "/" && "text-red-400"}`}>Home</p>
                    <p className={`iconWidget ${router.asPath == "/mostviewed" && "text-red-400"}`}>Most Viewed Posts</p>
                    <p className={`iconWidget ${router.asPath == "/recentposts" && "text-red-400"}`}>Recent Posts</p>
                </div>
                <SearchIcon className="h-6 w-6 text-gray-400 cursor-pointer"/>

                {
                    session?
                    <div className="icon-sm">
                        <div className="flex-1 text-xs">
                            <p className="flex justify-center cursor-pointer">Logged</p>
                            <p className="flex justify-center cursor-pointer">{session?.user?.name?.substring(0,2)}...</p>
                        </div>
                    </div>
                    :
                    <div className="icon-sm">
                        <div className="flex-1">
                            <p className="text-white rounded-full p-2 bg-red-400 cursor-pointer flex justify-center">SignIn</p>
                        </div>
                        
                    </div>
                }
            </div>
        </div>
    )
}

export default Header