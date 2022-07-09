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