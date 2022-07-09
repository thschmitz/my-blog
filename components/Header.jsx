import React, { useEffect, useState } from 'react'
import Link from "next/link"
import {MenuIcon, ChevronDownIcon, HomeIcon, SearchIcon} from "@heroicons/react/solid"
import {signIn, signOut, useSession} from "next-auth/react"
import {useRouter} from "next/router"
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {CHECK_EMAIL,GET_ID_BY_USERNAME} from "../graphql/queries"
import {ADD_USER} from "../graphql/mutations";
import {ApolloProvider, useQuery, useMutation} from "@apollo/client"

const Header = () => {

    const router = useRouter();
    console.log(router.query)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const profileClicked = () => {

    }


    const {data: session} = useSession()

    const {data:dataUser, loading:loadingUser, error:errorUser} = useQuery(CHECK_EMAIL, {
        variables: {
            email: session?.user?.email
        }
    })

    const {data:dataId, loading:loadingId, error:errorId} = useQuery(GET_ID_BY_USERNAME, {
        variables: {
            username: session?.user?.name
        }
    })

    const [addUser] = useMutation(ADD_USER)

    // If there is a logged user, look into database and check if there is a user with the same email
    
    useEffect(() => {

        if (session?.user?.email) {
            const email = session.user.email;
            const checkEmail = dataUser?.getEmailCheck;

            if(checkEmail?.length === 0){
                addUser({
                    variables: {
                        username: session.user.name,
                        email: session.user.email,
                        image: session.user.image,
                    }
                })
            }

        }
    }, [])

    const userId = dataId?.getIdByUsername;

    console.log(userId)

    return (
        <div className="sticky top-0 z-50 bg-white px-4 py-5 shadow-sm items-center justify-center flex space-x-20">
            <div className="relative h-12 w-20 flex-shrink-0 cursor-pointer justify-start ">
                <Link href="/"><img src="https://thschmitz.netlify.app/static/media/logo.419c2045413bd279e6d2.png" className="mt-1 lg:inline" alt="logo"/></Link>
            </div>
            <div className="items-center text-gray-500 mx-5 space-x-20 hidden lg:flex">
                <div className="text-center flex lg:inline-flex space-x-20">
                    <p className={`iconWidget ${router.asPath == "/" && "text-red-400"}`}>Home</p>
                    <p className={`iconWidget ${router.asPath == "/mostviewed" && "text-red-400"}`}>Most Viewed Posts</p>
                    <p className={`iconWidget ${router.asPath == "/recentposts" && "text-red-400"}`}>Recent Posts</p>
                </div>
                <SearchIcon className="h-6 w-6 text-gray-400 cursor-pointer"/>

                {
                    session?
                    <div className="icon-sm">
                        <div onClick={() => profileClicked()} className="flex-1 text-xs">
                            {
                                session?.user?.image?
                                    <Button
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        <img src={session?.user?.image} className="rounded-full w-9 cursor-pointer"></img>
                                    </Button>
                                :
                                    <Button
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        <Avatar sx={{ bgcolor: red[500],width:35, height: 35 }}>{session?.user?.name[0]}</Avatar>
                                    </Button>
                            }

                            {
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <Link href={`profile/${userId?.id}`}><MenuItem onClick={handleClose}>Profile</MenuItem></Link>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </Menu>
                            }

                        </div>
                    </div>
                    :
                    <div className="icon-sm">
                        <div onClick={() => signIn()} className="flex-1">
                            <p className="text-white rounded-full p-2 bg-red-400 cursor-pointer flex justify-center">SignIn</p>
                        </div>
                        
                    </div>
                }
            </div>
        </div>
    )
}

export default Header