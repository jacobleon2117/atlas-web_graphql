import { gql } from '@apollo/client';

export const ADD_PROJECT = gql`
  mutation AddProject($title: String!, $weight: Int!, $description: String!) {
    addProject(title: $title, weight: $weight, description: $description) {
      id
      title
      weight
      description
    }
  }
`;

export const ADD_TASK = gql`
  mutation AddTask($title: String!, $weight: Int!, $description: String!, $projectId: ID!) {
    addTask(title: $title, weight: $weight, description: $description, projectId: $projectId) {
      id
      title
      weight
      description
    }
  }
`;