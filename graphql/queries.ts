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
        }
    }
`