Sure, here's a clear and concise documentation on how to run the task management application locally:

---

## Task Management Web Application - Local Setup Guide

This guide will walk you through the steps to set up and run the Task Management Web Application on your local machine. The application is built using React for the frontend and Node.js for the backend, with MongoDB as the database.

### Prerequisites

Before you begin, make sure you have the following software installed on your system:

- Node.js (v14 or later)
- npm (Node Package Manager)
- MongoDB (running locally or a cloud-based instance)

### Getting Started

1. **Clone the Repository**

   Clone the repository to your local machine using Git:

   ```bash
   git clone https://github.com/your-username/task-management-app.git
   ```

   Navigate to the project directory:

   ```bash
   cd task-management-app
   ```

2. **Backend Setup**

   Navigate to the backend directory:

   ```bash
   cd backend
   ```

   Install backend dependencies:

   ```bash
   npm install
   ```

   Create a `.env` file in the `backend` directory and provide your MongoDB connection URL:

   ```plaintext
   MONGO_URI=your-mongodb-connection-url
   ```

   Start the backend server:

   ```bash
   npm start
   ```

3. **Frontend Setup**

   Open a new terminal window/tab.

   Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

   Install frontend dependencies:

   ```bash
   npm install
   ```

   Start the frontend development server:

   ```bash
   npm start
   ```

### Accessing the Application

- The frontend will run on `http://localhost:3000`.
- The backend API will run on `http://localhost:5000`.

Open your web browser and visit `http://localhost:3000` to access the Task Management Web Application.

### Usage

1. **Login:**

   - Use the default login credentials: Email: `mahesh@gmail.com`, Password: `1234`.

2. **Home Page:**

   - Upon login, you will be redirected to the home page.
   - Here, you can see the list of tasks.
   - You can mark tasks as completed, edit tasks, and delete tasks.

3. **Add Task:**

   - Click the "Add Task" button on the home page.
   - A modal will open where you can add a new task by entering the title and description.

4. **Edit Task:**

   - Click the "Edit" button next to a task on the home page.
   - The same modal will open with the task details pre-filled. You can update the title and description.

5. **Mark as Completed:**

   - Click the "Mark as Completed" button next to a task.
   - The task's title and description will be visually differentiated with a strikethrough effect.

6. **Logout:**

   - Click the "Logout" button to log out of the application.

### Shutting Down

To stop the application:

1. In the frontend terminal, press `Ctrl + C` to stop the frontend development server.
2. In the backend terminal, press `Ctrl + C` to stop the backend server.

### Conclusion

Congratulations! You have successfully set up and run the Task Management Web Application locally. Feel free to explore the features and functionalities of the application.

For more information or troubleshooting, refer to the project's documentation or consult the project maintainers.

---

Remember to replace placeholders like `your-username`, `your-mongodb-connection-url`, and provide more detailed instructions if needed based on your specific project structure and requirements.
