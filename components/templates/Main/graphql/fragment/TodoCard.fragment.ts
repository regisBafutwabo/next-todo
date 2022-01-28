import { graphql } from 'react-relay';

export const TodoCardFragment = graphql`
  fragment TodoCard on todo {
    completed
    created_at
    id
    title
    updated_at
  }
  `