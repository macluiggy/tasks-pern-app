# Fullstack PERN Stack Tasks App

A fullstack PERN Stack Tasks App with React, PostgreSQL, Webpack, Babel, TypeScript, Express, and Node.js. This app is a simple todo list app that uses the PERN Stack, where the user can create tasks, edit them, and delete them. The backend is deployed on Heroku and the frontend is deployed on Netlify.

## Frontend

[Live demo](https://tasks-pern.netlify.app/) to see this app in action. Or:

1. Clone this repository

```bash
git clone https://github.com/macluiggy/tasks-pern-app.git
```

2. Go to frontend folder

```bash
cd tasks-pern-app/frontend
```

3. Install dependencies

```bash
npm install
```

4. Run the app

```bash
npm start
```

5. Open the app in your browser on [localhost:8080](http://localhost:8080)

## Backend

[Live demo](https://tasks-pern-stack.herokuapp.com/) to see this app in action. Or:

1. Clone this repository

```bash
git clone https://github.com/macluiggy/tasks-pern-app.git
```

2. Go to backend folder

```bash
cd tasks-pern-app/backend
```

3. Install dependencies

```bash
npm install
```

4. You must have PostgreSQL installed on your machine. If so open postgres and run the following command to create the database, a table and insert some data on it.

```sql
CREATE DATABASE tasks_pern;

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) UNIQUE,
  description VARCHAR(255) NOT NULL,
  status VARCHAR(40)
);

INSERT INTO tasks (title, description, status) VALUES
    ('Learn to code', 'Learn to code in a language of your choice', 'todo'),
    ('Learn to cook', 'Learn to cook in a language of your choice', 'todo'),
    ('Learn to dance', 'Learn to dance in a language of your choice', 'todo');

```

5. Add the environment variables to your .env file like the sample.env file

```env
PG_USER=postgres
PG_PASSWORD=''
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=tasks_pern
```

6. Run the app

```bash
npm dev
```

7. Open the app in your browser on [localhost:3000](http://localhost:3000)

HTTP Methods:

- GET: `/tasks`
- GET: `/tasks/:id`
- POST: `/tasks`
  - Body: `{ title: 'Some title', description: 'Some description' }`
- PUT: `/tasks/:id`
  - Body: `{ title: 'Some title', description: 'Some description' }`
- DELETE: `/tasks/:id`
