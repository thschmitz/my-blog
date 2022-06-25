import React from 'react'

const Post = () => {

    const posts = [{title: "Post's name", category: "Post's category", likes: "Likes", img: "https://thschmitz.netlify.app/static/media/profile.9edc3afecee783b34ac7.png"}, {title: "Post's name", category: "Post's category", likes: "Likes", img: "https://cdn.sanity.io/images/i4sukqlh/production/235546692d5e66f1d2b769e204cdddadec004e70-1000x707.jpg"}]

  return (
    <div className="flex-wrap">
        <div className="flex justify-center flex-wrap mt-10">
            {posts.map((post) => (
                <div className="flex flex-col border-2 p-2 ml-10">
                    <img className="bg-contain" src={`${post.img}`}/>
                    <button className="bg-red-600 rounded-full text-white cursor-pointer p-2 mt-10">See More</button>
                    <p className="text-2xl">{post.title}</p>
                    <p className="text-sm">{post.category}</p>
                    <p className="text-md mt-2">{post.likes}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Post