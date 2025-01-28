# Project and Task Management System

A full-stack project management application built with React, Apollo Client, Node.js, Express, GraphQL, and MongoDB. The system provides an intuitive interface for managing projects and their associated tasks with real-time updates.

## Technology Stack

### Frontend
- **React**: UI framework
- **Apollo Client**: GraphQL client for state management
- **CSS3**: Custom styling with modern CSS features
- **React Hooks**: For state and side effects management

### Backend
- **Node.js & Express**: Server framework
- **GraphQL**: API query language
- **MongoDB & Mongoose**: Database and ODM
- **Express-GraphQL**: GraphQL HTTP middleware
- **CORS**: Cross-origin resource sharing support

## Features

- Intuitive UI for project and task management
- Real-time data updates using Apollo Client
- GraphQL API with queries and mutations
- Responsive design with modern CSS
- Form validation and error handling
- Project-task relationship management
- Weight-based priority system
- Detailed project and task descriptions

## Project Structure

### Frontend Components
- `ProjectsList`: Main component for displaying and managing projects/tasks
- `App`: Root component with Apollo Provider setup
- GraphQL operations organized in separate files:
  - `queries.js`: GraphQL queries
  - `mutations.js`: GraphQL mutations

### Backend Structure
- GraphQL Schema with Project and Task types
- Mongoose models for data structure
- Express server with GraphQL middleware
- Database connection handling

## Getting Started

1. Clone the repository

2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Set up environment:
   - Configure MongoDB connection string in `server/app.js`
   - Ensure backend URL is correctly set in `client/src/index.js`

4. Start the application:
   ```bash
   # Start backend server (default: port 4000)
   cd server
   npm start

   # Start frontend development server
   cd ../client
   npm start
   ```

5. Access the application:
   - Frontend: `http://localhost:3000`
   - GraphQL Playground: `http://localhost:4000/graphql`

## API Operations

### Queries
```graphql
query GetProjects {
  projects {
    id
    title
    weight
    description
    tasks {
      id
      title
      description
      weight
    }
  }
}
```

### Mutations
```graphql
mutation AddProject($title: String!, $weight: Int!, $description: String!) {
  addProject(title: $title, weight: $weight, description: $description) {
    id
    title
    weight
    description
  }
}

mutation AddTask($title: String!, $weight: Int!, $description: String!, $projectId: ID!) {
  addTask(title: $title, weight: $weight, description: $description, projectId: $projectId) {
    id
    title
    weight
    description
  }
}
```

## Styling

The application uses custom CSS with:
- CSS Variables for consistent theming
- Flexbox for layout management
- Responsive design principles
- Shadow effects and transitions
- Clean and modern UI elements

## Development Notes

- Uses React.StrictMode for identifying potential problems
- Implements proper error handling and loading states
- Includes form validation and user feedback
- Follows React best practices and conventions

## Future Enhancements
- User authentication and authorization
- Project/task status management
- File attachment capabilities
- Advanced filtering and sorting
- Team collaboration features
- Activity logging and history

## Security Considerations
- Implement authentication for production use
- Secure MongoDB connection string
- Add input validation on both client and server
- Configure CORS properly for production