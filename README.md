# Todo Application

This is a small todo application built using ReactJS with Vite, Styled-components, React-query, Node.js, and Express. The application allows users to manage their todo tasks efficiently.

## Features

1. **Todo Management**: Users can create, read, update, and delete todo tasks.
2. **External API Integration**: The application seeds the database with todo data obtained from an external API ([https://dummyjson.com/todos](https://dummyjson.com/todos)) during the initial request.
3. **Containerized Deployment**: You can easily run the application using Docker Compose.
4. **Native Development**: Alternatively, you can run the application natively on your machine.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (version 18)
- Docker (if using Docker Compose)
- MongoDB (if running natively)

## Getting Started

To run the application, follow these steps:

1. Clone the repository to your local machine.
2. Open a terminal and navigate to the main directory of the application.

### Running with Docker Compose

If you prefer using Docker Compose to run the application, follow these steps:

1. Update the database connection URL in the `backend/.env` file. Change `DB_CONNECTION` to `mongodb://mongo:27017/todos`.
2. In the terminal, run the following command:
   ```shell
   docker-compose up
   ```
   This command will start the application and set up the necessary containers.

### Running Natively

If you choose to run the application natively, follow these steps:

1. Ensure you have MongoDB up and running on your local machine.
2. Open a terminal and navigate to the `backend` folder of the application.
3. Update the database connection URL in the `.env` file. Change `DB_CONNECTION` to `mongodb://127.0.0.1:27017/todos`.
4. Install the backend dependencies by running the following command:
   ```shell
   npm install
   ```
5. Start the backend server by running the following command:
   ```shell
   npm run dev
   ```
6. Open another terminal window and navigate to the `frontend` folder of the application.
7. Install the frontend dependencies by running the following command:
   ```shell
   npm install
   ```
8. Start the frontend development server by running the following command:
   ```shell
   npm start
   ```

## Usage

Once the application is up and running, you can access it by opening a web browser and navigating to `http://localhost:5173`. You will be presented with the todo application interface.

- To create a new todo task, enter the task details in the input field and press Enter or click the "Add" button.
- To mark a task as complete, click the checkbox next to it.
- To edit a task, click the task name and modify it in the input field. Press Enter or click outside the field to save the changes.
- To delete a task, click the "Delete" button next to it.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to modify and use it according to your needs.

## Acknowledgments

- This application was built using various open-source libraries and frameworks, including ReactJS, Styled-components, React-query, Node.js, and Express.
- Thanks to the [dummyjson.com](https://dummyjson.com) API for providing sample todo data.