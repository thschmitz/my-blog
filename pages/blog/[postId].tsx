import React from 'react'
import {useSession} from "next-auth/react"
import {useQuery} from "@apollo/client"
import {useRouter} from "next/router"
import { GET_SINGLE_BLOG } from '../../graphql/queries'
import TimeAgo from "react-timeago"
import { GET_USER_BY_ID, GET_RECENT_BLOGS } from '../../graphql/queries'
import Widget from "../../components/Widget"
import {Jelly} from "@uiball/loaders"

const SinglePost = () => {

    const router = useRouter();
    const {data: session} = useSession();

    const {data: dataPosts, error:errorPosts, loading:loadingPosts} = useQuery(GET_SINGLE_BLOG, {
        variables: {
            id: router.query.postId
        }
    })

    const post = dataPosts?.getSinglePost;

    const {data: dataAuthor, loading: loadingAuthor, error: errorAuthor} = useQuery(GET_USER_BY_ID, {
        variables: {
            id: post?.author_id
        }
    })

    const author = dataAuthor.getUserById;

    const {data: dataRecentPosts, error: errorRecentPosts} = useQuery(GET_RECENT_BLOGS)
    const recentPosts = dataRecentPosts?.getRecentBlogs;

    if(loadingPosts) {
        return(
            <div className="flex w-full items-center justify-center p-10 text-xl">
                <Jelly size={50} color="#ff4501"/>
            </div>
        )

    }

    return (
        <div className="text-center mt-10 lg:flex ">
            <div className="lg:w-3/4 ml-10">
                <h1 className="text-3xl">{post?.title}</h1>
                <h1 className="text-sm">Posted <TimeAgo date={post?.created_at}/> by <b className="text-red-400">{post?.author}</b></h1>
                <div className="flex flex-col items-center justify-center mt-10">
                    <img src={post?.image} className=""/>
                </div>
                <div className="flex flex-1 mt-20">
                    <p>{post?.text}</p>
                </div>

                <div className="mt-10 flex ml-10 font-bold justify-start text-xl">
                    <h1>Know more about the author</h1>
                </div>

                <div className="text-center mt-32 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
                    <div className="absolute left-0 right-0 -top-14 flex justify-center">
                        <img className="w-20 h-20 rounded-full object-cover" src={`${author?.image}`}/>
                    </div>
                    <h4 className="text-black my-2 text-sm">r/{post?.blog_type}</h4>
                    <h3 className="text-black my-4 text-xl font-bold">{post?.author}</h3>
                    <h4>{author?.bio}</h4>
                </div>
                
            </div>
            <div className="w-1/4 max-w-sm ml-10">
                <Widget posts={recentPosts} />
            </div>
        </div>
    )
}

export default SinglePost