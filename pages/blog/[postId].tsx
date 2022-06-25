import React from 'react'
import {useSession} from "next-auth/react"
import {useQuery} from "@apollo/client"
import {useRouter} from "next/router"
import { GET_SINGLE_BLOG } from '../../graphql/queries'
import TimeAgo from "react-timeago"

const SinglePost = () => {

    const router = useRouter();
    const {data: session} = useSession();

    const {data: dataPosts, error:errorPosts} = useQuery(GET_SINGLE_BLOG, {
        variables: {
            id: router.query.postId
        }
    })

    const post = dataPosts?.getSinglePost;

    console.log("posts: ", dataPosts)

    return (
        <div className="text-center mt-10">
            <h1 className="text-3xl">{post?.title}</h1>
            <h1 className="text-sm">Posted <TimeAgo date={post?.created_at}/> by <b className="text-red-400">{post?.author}</b></h1>
            <div className="max-w-5xl text-center ">
                <p>{post?.text}</p>
            </div>
        </div>
    )
}

export default SinglePost