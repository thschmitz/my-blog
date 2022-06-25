import React from 'react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const WidgetRow = ({index, post}) => {
  return (
    <div className="flex items-center space-x-2 border-t bg-white px-4 py-2">
        <p>{index + 1}</p>
        <ChevronUpIcon className="h-4 w-4 flex-schrink-0 text-green-400"/>
        <img className=" h-14 w-14 rounded-md object-cover" src={`${post.img}`}/>
        <p className="flex-1 truncate">{post.title}</p>
        <Link href={`/${post.category}`}>
            <div className="cursor-pointer rounded-full bg-blue-500 px-3 text-white">
                View
            </div>
        </Link>

    </div>
  )
}

export default WidgetRow