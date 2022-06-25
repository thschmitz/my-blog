import React from 'react'
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-center mt-10 border-t-2 pt-4 flex-col">
        <p className="text-center text-sm">Copyright © 2022</p>
        <Link href="https://github.com/thschmitz">
            <p className="text-center text-sm mt-4 cursor-pointer hover:text-red-400">Thomas Henrique Schmitz</p>
        </Link>
    </div>
  )
}

export default Footer