import React from 'react'

const ContrastPost = () => {
  return (

    <div className="opacity-70 bg-[url('https://thschmitz.netlify.app/static/media/profile.9edc3afecee783b34ac7.png')] shadow bg-white py-40 bg-no-repeat bg-center bg-contain">
      <div className="opacity-100 container z-50 text-black">
        <p className="ml-10 text-2xl">Post's name</p>
        <p className="ml-12 text-sm">Post's category</p>
        <p className="text-md ml-10 mt-10">Likes</p>
        <button className="bg-red-600 rounded-full text-white cursor-pointer p-2 ml-10 mt-10">See More</button>
      </div>
          
    </div>
  )
}

export default ContrastPost