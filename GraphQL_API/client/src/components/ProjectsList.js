import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PROJECTS } from '../graphql/queries';
import { ADD_PROJECT, ADD_TASK } from '../graphql/mutations';
import './ProjectsList.css';

const ProjectsList = () => {
  const [newProject, setNewProject] = useState({
    title: '',
    weight: '',
    description: ''
  });
  const [newTask, setNewTask] = useState({
    title: '',
    weight: '',
    description: '',
    projectId: ''
  });

  const { loading, error, data } = useQuery(GET_PROJECTS);
  const [addProject] = useMutation(ADD_PROJECT, {
    refetchQueries: [{ query: GET_PROJECTS }]
  });
  const [addTask] = useMutation(ADD_TASK, {
    refetchQueries: [{ query: GET_PROJECTS }]
  });

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProject({
        variables: {
          title: newProject.title,
          weight: parseInt(newProject.weight),
          description: newProject.description
        }
      });
      setNewProject({ title: '', weight: '', description: '' });
    } catch (err) {
      console.error('Error adding project:', err);
    }
  };

  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTask({
        variables: {
          title: newTask.title,
          weight: parseInt(newTask.weight),
          description: newTask.description,
          projectId: newTask.projectId
        }
      });
      setNewTask({ title: '', weight: '', description: '', projectId: '' });
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="projects-container">
      <div className="navbar">GraphQL: Project and Task Visualizer</div>
      <div className="form-section">
        <div className="form-container">
          <h2>Add New Project</h2>
          <form onSubmit={handleProjectSubmit}>
            <input
              type="text"
              placeholder="Project Title"
              value={newProject.title}
              onChange={(e) => setNewProject({...newProject, title: e.target.value})}
            />
            <input
              type="number"
              placeholder="Weight"
              value={newProject.weight}
              onChange={(e) => setNewProject({...newProject, weight: e.target.value})}
            />
            <textarea
              placeholder="Description"
              value={newProject.description}
              onChange={(e) => setNewProject({...newProject, description: e.target.value})}
            />
            <button type="submit">Add Project</button>
          </form>
        </div>

        <div className="form-container">
          <h2>Add New Task</h2>
          <form onSubmit={handleTaskSubmit}>
            <select
              value={newTask.projectId}
              onChange={(e) => setNewTask({...newTask, projectId: e.target.value})}
            >
              <option value="">Select Project</option>
              {data.projects.map(project => (
                <option key={project.id} value={project.id}>{project.title}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Task Title"
              value={newTask.title}
              onChange={(e) => setNewTask({...newTask, title: e.target.value})}
            />
            <input
              type="number"
              placeholder="Weight"
              value={newTask.weight}
              onChange={(e) => setNewTask({...newTask, weight: e.target.value})}
            />
            <textarea
              placeholder="Description"
              value={newTask.description}
              onChange={(e) => setNewTask({...newTask, description: e.target.value})}
            />
            <button type="submit">Add Task</button>
          </form>
        </div>
      </div>

      <div className="projects-list">
        <h2>Projects</h2>
        {data.projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p className="weight">Weight: {project.weight}</p>
            <p className="description">{project.description}</p>
            <div className="tasks-section">
              <h4>Tasks</h4>
              {project.tasks.map(task => (
                <div key={task.id} className="task-card">
                  <h5>{task.title}</h5>
                  <p className="weight">Weight: {task.weight}</p>
                  <p className="description">{task.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;