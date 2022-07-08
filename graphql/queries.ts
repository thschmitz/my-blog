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