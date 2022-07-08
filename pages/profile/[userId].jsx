import React from 'react'
import {useSession} from "next-auth/react"
import {useRouter} from "next/router"
import Link from "next/link"

const Profile = () => {

  const router = useRouter();

  console.log(router.query.userId);

  return (
    <div className={`h-24 bg-red-400 p-8`}>
      <div>
          <div className="-mx-8 mt-10 bg-white">
              <div className="mx-auto flex max-w-5xl items-center space-x-4 pb-3">
                  <div className="-mt-5">
                  </div>
                  <div className="py-2">
                      <h1 className="text-3xl font-semibold">Welcome to r/ Profile</h1>
                      <p><span className="dateCreated">Created Time: </span><span className="dateCreated"> GMT</span></p>
                      {
                          <div className="flex items-center">
                              <div className="flex items-center mr-5 space-x-1">
                                  <Link href={`/user/${router.query.userId}/followers`}>
                                      <p className="cursor-pointer">Followers •</p>
                                  </Link>
                                  <p className="font-bold text-xl"></p>
                              </div>
                              <div className="flex items-center space-x-1">
                                  <Link href={`/user/${router.query.userId}/following`}>
                                      <p className="cursor-pointer">Following •</p>
                                  </Link>
                                  <p className="font-bold text-xl"></p>
                              </div>
                          </div>
                      }
                  </div>

              </div>
          </div>

          {

                  <div className="text-2xl text-center bg-white rounded-lg mt-10 p-4 flex-1 space-y-4 max-w-5xl my-7 mx-auto">
                      {
                              <h1>See <span className="text-red-400">0 post(s)</span> that <span className="underline">you</span> have already created</h1>
                      }
                  </div>
          }
          <div className="mt-10 flex-1 space-y-4 max-w-5xl my-7 mx-auto">
              {
                          <div className="flex w-full items-center justify-center p-20 text-xl">
                              <p>No posts found</p>
                          </div>
              }

          </div>
      </div>




        </div>
  )
}

export default Profile;