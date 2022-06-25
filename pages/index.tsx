import type { NextPage } from 'next'
import Head from 'next/head'
import Icon from "./favicon.ico"
import ContrastPost from "../components/ContrastPost"

const Home: NextPage = () => {

  

  return (
    <div className="max-w-5xl my-7 mx-auto">
      <Head>
        <link href="https://www.redditstatic.com/icon.png"></link>
        <title>Blog</title>
      </Head>

      <ContrastPost/>


    </div>
  )
}

export default Home
