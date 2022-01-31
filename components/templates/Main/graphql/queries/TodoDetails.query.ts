import { graphql } from 'relay-runtime';

export const TodoDetails = graphql`
    query TodoDetailsQuery($id: ID!){
        node(id:$id){
            ... on todo {
                id
                completed
                created_at
                title
                description
                updated_at
            }
        }
    }
`  