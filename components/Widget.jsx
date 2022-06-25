import React from 'react'
import SubredditRow from './WidgetRow'

const Widget = ({posts}) => {

  return (
    <div className="sticky top-44 mx-5 hidden h-fit min-w-[300px] rounded-md border-gray-300 bg-white lg:inline">
      <p className="text-md mb-1 p-4 pb-3 font-bold">Recent Posts</p>
      {posts?.map((post, i) => (
        <SubredditRow post={post} index={i} key={post.title}/>
      ))}
    </div>
  )
}

export default Widget