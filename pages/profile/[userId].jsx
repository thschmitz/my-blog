import React from 'react'
import {useSession} from "next-auth/react"
import {useRouter} from "next/router"
import Link from "next/link"
import {GET_USER_BY_ID} from "../../graphql/queries"
import {useQuery} from "@apollo/client"

const Profile = () => {

    const router = useRouter();
    const {data:session} = useSession();
    console.log(session);

    const {data:dataUser, loading:loadingUser, error:errorUser} = useQuery(GET_USER_BY_ID, {
        variables: {
            id: router.query.userId
        }
    })
    
    const user = dataUser?.getUserById;
    const createdHour = `${user?.created_at[8]}${user?.created_at[9]}/${user?.created_at[5]}${user?.created_at[6]}/${user?.created_at[0]}${user?.created_at[1]}${user?.created_at[2]}${user?.created_at[3]} ${user?.created_at[11]}${user?.created_at[12]}:${user?.created_at[14]}${user?.created_at[15]}`

    return (
        <div className={`h-24 bg-red-400 p-8`}>
            <div>
                <div className="-mx-8 mt-10 bg-white">
                    <div className="mx-auto flex max-w-5xl items-center space-x-4 pb-3">
                        <div className="-mt-5">
                            <img src={user?.image} className="rounded-full h-24 w-24" alt="avatar"/>
                        </div>
                        <div className="py-2">
                            <h1 className="text-3xl font-semibold">Welcome to {user.username}'s Profile</h1>
                            <p><span className="dateCreated">Created Time: </span>{createdHour}<span className="dateCreated"> GMT</span></p>

                        </div>

                    </div>
                </div>
            {
                session?.user?.name === user?.username?
                <div>
                    <h1>Quer adicionar um novo blog?</h1>                            
                </div>
                :

                ""
            }
            </div>
        </div>
    )
}

export default Profile;