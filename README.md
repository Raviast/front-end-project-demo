# Project- Real Demo

<<<<<<< HEAD
A full-stack application consisting of a landing page and an admin panel. The application should include various features for managing project and client information, viewing contact form details, and tracking newsletter subscriptions.


=======
# Project- Real Demo

## Please consider Frontend git repository Link:
```
https://github.com/Raviast/front-end-project-demo
```

## Backend git repository link
```
https://github.com/Raviast/react-backend-demo
```
Vercel link:
```
https://front-end-project-demo.vercel.app/
```

A full-stack application consisting of a landing page and an admin panel. The application should include various features for managing project and client information, viewing contact form details, and tracking newsletter subscriptions.


>>>>>>> 2270ed3c9857892390dc201868a5792545fc1d79
# Project Management Platform

## Table of Contents

1. [Overview](#overview)
2. [Approach](#approach)
3. [Technologies Used](#technologies-used)
4. [Folder Structure](#folder-structure)
5. [Setup and Installation](#setup-and-installation)
6. [Running the Project Locally](#running-the-project-locally)
7. [API Endpoints](#api-endpoints)

---

## Overview

This project is a full-stack web application built with the MERN (MongoDB, Express.js, React, Node.js and Tailwind CSS) stack. It is designed for managing projects, collecting client feedback, and capturing user subscriptions. Key features include CRUD operations for project management and client data, a contact form, and a subscription feature to store email addresses.

## Approach

1. **Modular Structure:** Organized as separate backend and frontend directories to keep the codebase scalable and maintainable.
2. **Backend API:** Developed a RESTful API to handle requests, perform CRUD operations, and interact with MongoDB for data storage.
3. **Responsive UI:** Created a user-friendly interface that aligns with the provided design specifications, focusing on accessibility and user experience.

## Technologies Used

- **Frontend:** React.js, HTML, TailwindCSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with MongoDB Atlas
- **Other Tools:** Vercel (for deployment), Git (version control)

## Folder Structure

### Frontend Structure
```
front-end-project-demo/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
│       └── images/
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button/
│   │   │   ├── Input/
│   │   │   ├── Navbar/
│   │   │   └── Footer/
│   │   ├── layout/
│   │   ├── admin/
│   │   └── landing/
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Admin/
│   │   ├── Projects/
│   │   └── Contact/
│   │
│   ├── services/
│   │   ├── api.js
│   │   └── auth.js
│   │
│   ├── hooks/
│   │   └── useForm.js
│   │
│   ├── context/
│   │   └── AuthContext.js
│   │
│   ├── utils/
│   │   └── helpers.js
│   │
│   ├── styles/
│   │   └── tailwind.css
│   │
│   ├── App.js
│   └── index.js
│
├── package.json
├── tailwind.config.js
├── .env
├── .gitignore
└── README.md

```

### Backend Structure
```
react-backend-demo/
├── config/
│ └── db.js
├── controllers/
│ └── userController.js
├── models/
│ └── User.js
├── routes/
│ └── userRoutes.js
├── middleware/
│ └── auth.js
├── .env
├── .gitignore
├── package.json
└── server.js
```


## Setup and Installation

### Prerequisites
- Node.js and npm installed
- MongoDB Atlas account and cluster set up

### Backend Installation

1. Navigate to the backend directory:
bash
             cd react-backend-demo
   
2. Install dependencies:
bash
        npm install

      
3. Create a .env file in the backend directory with the following environment variables:
plaintext

        MONGO_USER=<username>
        MONGO_PASS=<password>
- Inside src/config/config.js
    You can also add your Mongodb atlas 
    connection string-
    It should look like this-
    ```
    dbUrl:`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.ngfwe.mongodb.net/RealTrust`
    ```
4. Start the backend server:
bash

      npm start

      
### Frontend Installation
1. Navigate to the frontend directory:
bash
    ```
    cd front-end-project-demo
    ```
      
2. Install dependencies:
bash
    ```
      npm install
    ```
      
3. Update any instances of the backend URL in the frontend code to point to your deployed backend URL (e.g., https://your-backend-url/).
4. Start the frontend server:
bash
    ```
    npm run dev
    ```
        
Running the Project Locally
1. Run both the backend and frontend servers. The backend will run on http://localhost:4000 or any other available port, and the frontend on http://localhost:5173/.
2. Open http://localhost:5173/in your browser to view the application.


API Endpoints
Here are some of the key API endpoints:

- Projects: GET /project/allProject - Fetch all projects
- Projects: POST /project/addProject - POST Project data on database
- Clients: GET /client/allClient - Fetch all client 
- Clients: GET /client/allClient - Fetch all client
- Clients: POST /client/addClient - POST Clinet data on database
- Contact Form Submission: POST /contact/addContact - 
Submit contact form data
- Contact Details Fetch: GET /contact/allContact - 
Fetch all contact form details
- Subscribe: POST /subscription/create-sub - Subscribe to newsletter
- Subscribe: GET /subscription/all-sub - Fetch details of Subscribe to newsletter



        
<<<<<<< HEAD
=======
# Project-Real-demo
>>>>>>> 2270ed3c9857892390dc201868a5792545fc1d79
