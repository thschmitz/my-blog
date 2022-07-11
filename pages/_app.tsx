import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {SessionProvider} from "next-auth/react"
import Header from "../components/Header"
import {ApolloProvider, useQuery} from "@apollo/client"
import client from "../apollo-client"
import {signIn, signOut, useSession} from "next-auth/react"
import {CHECK_EMAIL} from "../graphql/queries"
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps: {session, ...pageProps} }: any) {



  return(
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <Toaster/>
        <div className="h-screen overflow-y-scroll bg-white">
          <Header/>
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </ApolloProvider>

  )
}

export default MyApp
