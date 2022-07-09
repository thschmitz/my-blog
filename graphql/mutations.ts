import {gql} from "@apollo/client"

export const ADD_USER = gql`
    mutation MyMutation($username: String!, $email: String!, $image: String!){
        insertUser(username: $username, email: $email, image: $image){
            id
            username
            email
            image
        }
    }
`

export const ADD_BLOG = gql`
    mutation MyMutation($title: String!, $text: String!, $image: String!, $author: String!, $author_id: ID!, $blog_type: String!){
        insertBlog(title: $title, text: $text, image: $image, author: $author, author_id: $author_id, blog_type: $blog_type){
            id
            title
            text
            image
            author
            author_id
            blog_type
        }
    }
`