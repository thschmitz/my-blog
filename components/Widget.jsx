import React from 'react'
import SubredditRow from './WidgetRow'

const Widget = () => {
  const posts = [{title: "Post's name", category: "programming", likes: "Likes", img: "https://thschmitz.netlify.app/static/media/profile.9edc3afecee783b34ac7.png"}, {title: "Post's name", category: "education", likes: "Likes", img: "https://cdn.sanity.io/images/i4sukqlh/production/235546692d5e66f1d2b769e204cdddadec004e70-1000x707.jpg"}]

  return (
    <div className="sticky top-44 mx-5 hidden h-fit min-w-[300px] rounded-md border-gray-300 bg-white lg:inline">
      <p className="text-md mb-1 p-4 pb-3 font-bold">Top Posts</p>
      {posts?.map((post, i) => (
        <SubredditRow post={post} index={i} key={post.title}/>
      ))}
    </div>
  )
}

export default Widget