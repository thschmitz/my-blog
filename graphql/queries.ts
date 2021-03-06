import {gql} from "@apollo/client"

export const GET_BLOGS = gql`
    query MyQuery{
        getBlogs{
            id
            title
            author_id
            image
            text
            created_at
            blog_type
            author
        }
    }
`

export const GET_RECENT_BLOGS = gql`
    query MyQuery{
        getRecentBlogs{
            id
            title
            author_id
            image
            text
            created_at
            blog_type
            author
        }
    }
`

export const GET_SINGLE_BLOG = gql`
    query MyQuery($id: ID!){
        getSinglePost(id: $id){
            id
            title
            author_id
            image
            text
            created_at
            blog_type
            author
        }
    }
`

export const GET_ID_BY_USERNAME = gql`
    query MyQuery($username: String!){
        getIdByUsername(username: $username){
            id
        }
    }
`

export const CHECK_EMAIL = gql`
    query MyQuery($email: String!){
        getEmailCheck(email: $email){
            email
        }
    }
`

export const GET_USER_BY_ID = gql`
    query MyQuery($id: ID!){
        getUserById(id: $id){
            id
            username
            email
            image
            created_at
            bio
        }
    }
`

export const GET_ID_BY_EMAIL = gql`
    query MyQuery($email: String!){
        getIdByEmail(email: $email){
            id
        }
    }
`

export const GET_RECENT_POST = gql`
    query MyQuery{
        getBlogsTimeStamp{
            id
            title
            author_id
            image
            text
            created_at
            blog_type
            author
        }
    }
`