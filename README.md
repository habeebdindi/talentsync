# Talentsync Blogging Platform API

## Overview

Welcome to Talentsync, a simple RESTful API designed for a modern blogging platform. This API enables users to perform essential CRUD (Create, Read, Update, Delete) operations on blog posts. In addition, Talentsync provides user authentication and authorization mechanisms to ensure secure access and management of user-specific content.

### Features
Create: Users can create new blog posts, making it easy to share their thoughts and experiences.

Read: Retrieve blog posts to explore a wealth of content from various users.

Update: Modify and improve your blog posts to keep your content fresh and relevant.

Delete: Remove unwanted or outdated blog posts effortlessly.

Authentication: Securely authenticate users to guarantee controlled access to the api.


### Getting Started

To start using the Talentsync API, follow these simple steps:

1. Clone the Repository:

   ```
   git clone https://github.com/your-username/talentsync-api.git
   ```

3. Install Dependencies:

   ```
   cd talentsync-api
   npm install
   ```

4. Configure Environment:

   Create a .env file based on the provided .env.example.
   Update the environment variables with your specific configuration.

5. Run the Application:

   ```
   npm start
   ```

The API will be accessible at http://localhost:3000 by default.


### API Endpoints

Create a Blog Post:

  ```
  POST /posts
  ```
Read Blog Posts:

  ```  
  GET /posts
  GET /posts/:postId
  ```

Update a Blog Post:

  ```
  PUT /posts/:postId
  ```

Delete a Blog Post:

  ```
  DELETE /posts/:postId
  ```

User Authentication:

  ```
  POST /auth/login
  POST /auth/logout
  ```

Happy blogging with Talentsync! 🚀


NOTE: THIS IS AN ASSESSMENT PROJECT
