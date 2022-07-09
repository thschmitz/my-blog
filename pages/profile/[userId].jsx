import React, {useState, useEffect} from 'react'
import {useSession} from "next-auth/react"
import {useRouter} from "next/router"
import Link from "next/link"
import {GET_USER_BY_ID} from "../../graphql/queries"
import {ADD_BLOG} from "../../graphql/mutations"
import {useQuery, useMutation} from "@apollo/client"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Jelly } from '@uiball/loaders';
import TextField from "@mui/material/TextField"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Profile = () => {

    const router = useRouter();
    const {data:session} = useSession();
    const [value, setValue] = React.useState('1');
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // CREATE A PREVIEW, UPLOAD THE FILE, AND SET THE PREVIEW
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    // TAKE THE FILE FROM THE INPUT AND SET IT INTO THE USESTATE
    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    // TAKE ALL THE INFORMATIONS ABOUT THE USER FROM THE GRAPHQL QUERY

    const {data:dataUser, loading:loadingUser, error:errorUser} = useQuery(GET_USER_BY_ID, {
        variables: {
            id: router.query.userId
        }
    })
    
    const user = dataUser?.getUserById;
    const createdHour = `${user?.created_at[8]}${user?.created_at[9]}/${user?.created_at[5]}${user?.created_at[6]}/${user?.created_at[0]}${user?.created_at[1]}${user?.created_at[2]}${user?.created_at[3]} ${user?.created_at[11]}${user?.created_at[12]}:${user?.created_at[14]}${user?.created_at[15]}`

    const [addBlog] = useMutation(ADD_BLOG);

    // CHECK IF ALL THE INFORMATIONS ABOUT USER ALREADY ARRIVED, IF NOT, RETURN LOADING
    if(loadingUser){
        return(
            <div className="flex w-full items-center justify-center p-20 text-xl">
                <Jelly size={50} color="#ff4501"/>
            </div>
        )
    } 

    // CREATE A MUTATION TO INSERT THE DATA THAT WAS ALREADY TAKEN
    function createHandle(e){
        e.preventDefault();
        const title = document.getElementById("title").value;
        const text = document.getElementById("text").value;
        const type = document.getElementById("type").value;
        const image = preview;

        if(title === "" || text === "" || type === "" || image === ""){
            alert("Please fill all the fields")
            return
        }

        console.log(selectedFile)

        addBlog({
            variables: {
                title: title,
                text: text,
                blog_type: type,
                image: image,
                author_id: router?.query?.userId,
                author: user?.username,
            }
        }).then(() => {
            alert("Blog created")
            router.push("/profile")
        }).catch((error) => {
            alert("Error: ", error)
            console.log(error)
        }).finally(() => {
            setSelectedFile(undefined)
            setPreview(undefined)
        })


        console.log(title, text, type, image);
    }

    return (
        <div className={`h-24 bg-red-400 p-8`}>
            <div>
                <div className="-mx-8 mt-10 bg-white mb-10">
                    <div className="mx-auto flex max-w-5xl items-center space-x-4 pb-3">
                        <div className="-mt-5">
                            <img src={user?.image} className="rounded-full h-24 w-24" alt="avatar"/>
                        </div>
                        <div className="py-2">
                            <h1 className="text-3xl font-semibold">Welcome to {user?.username}'s Profile</h1>
                            <p><span className="dateCreated">Created Time: </span>{createdHour}<span className="dateCreated"> GMT</span></p>

                        </div>

                    </div>
                </div>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            {
                                session?.user?.name === user?.username ?
                                    <Tab label="Post Creation" value="1" />
                                :
                                    ""
                            }
                            <Tab label={`${user?.username}'s Posts`} value="2" />
                            <Tab label="About" value="3" />
                        </TabList>
                        </Box>
                        <TabPanel value="1">
                            <div className="flex flex-col items-center justify-center">
                                <h1 className="text-3xl font-semibold">Post Creation</h1>
                                <p>You can create a post here</p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '100ch' },
                                    }}
                                    autoComplete="off"
                                    className="mt-10 items-center flex flex-col justify-center"
                                    >
                                        <TextField required id="title" label="Title" variant="outlined" />
                                        <TextField
                                            id="text"
                                            label="Blog's Body"
                                            multiline
                                            required
                                            rows={4}
                                        />
                                        <TextField id="type" required label="Blog Type" variant="outlined" />
                                        <p className="mt-5 font-bold mb-2">Select an image for your blog</p>
                                        <input onChange={onSelectFile} type="file" id="image" name="file" />
                                        {selectedFile && <img className="mt-10" src={preview} />}
                                        {preview && console.log(selectedFile)}
                                        <Stack className="mt-10" spacing={2} direction="row">
                                            <Button onClick={(e) => createHandle(e)} variant="contained">Create</Button>
                                        </Stack>
                                </Box>
                            </div>
                        </TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                        <TabPanel value="3">Item Three</TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>
    )
}

export default Profile;