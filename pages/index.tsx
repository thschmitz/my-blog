import type { NextPage } from 'next'
import Head from 'next/head'
import Icon from "./favicon.ico"
import ContrastPost from "../components/ContrastPost"
import Post from "../components/Post"
import Widget from "../components/Widget"
import Footer from "../components/Footer"
import { useSession } from 'next-auth/react'
import { useQuery } from '@apollo/client'
import { GET_BLOGS, GET_RECENT_BLOGS } from '../graphql/queries'
import {Jelly} from "@uiball/loaders"

const Home: NextPage = () => {

  const {data: session} = useSession();

  const {data: dataPosts, error:errorPosts, loading:loadingPosts} = useQuery(GET_BLOGS)
  const posts = dataPosts?.getBlogs;

  const {data: dataRecentPosts, error: errorRecentPosts} = useQuery(GET_RECENT_BLOGS)
  const recentPosts = dataRecentPosts?.getRecentBlogs;

  console.log("posts: ", recentPosts)

  if(loadingPosts) {
    return(
      <div className="flex w-full items-center justify-center p-10 text-xl">
        <Jelly size={50} color="#ff4501"/>
      </div>
    )
  }

  return (
    <div className="max-w-full my-8 mx-auto">
      <Head>
        <link href="https://www.redditstatic.com/icon.png"></link>
        <title>Blog</title>
      </Head>
      <div className="max-w-5xl my-7 mx-auto">
        <ContrastPost/>
      </div>

      <div className="flex flex-1">
        <div className="w-2/3">
          <Post posts={posts}/>
        </div>
        <div className="w-1/3 max-w-sm">
          <Widget posts={recentPosts} />
        </div>

      </div>

      <Footer/>

    </div>
  )
}

export default Home
