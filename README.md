# Talentsync Blogging Platform API

![image](https://github.com/habeebdindi/talentsync/assets/76703071/dd0fc872-b6bd-482f-94a2-64210c9ce5c7)

## Overview

Welcome to Talentsync, a simple RESTful API designed for a modern blogging platform. This API enables users to perform essential CRUD (Create, Read, Update, Delete) operations on blog posts. In addition, Talentsync provides user authentication and authorization mechanisms to ensure secure access and management of user-specific content.


## Features

Create: Users can create new blog posts, making it easy to share their thoughts and experiences.

Read: Retrieve blog posts to explore a wealth of content from various users.

Update: Modify and improve your blog posts to keep your content fresh and relevant.

Delete: Remove unwanted or outdated blog posts effortlessly.

Authentication: Securely authenticate users to guarantee controlled access to the api.


## Getting Started

To start using the Talentsync API, follow these simple steps:

1. Clone the Repository:

   ```
   git clone https://github.com/your-username/talentsync.git
   ```

3. Install Dependencies:

   ```
   cd talentsync
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


## API Endpoints

User Authentication:

  ```
  POST /auth/signup
  POST /auth/login
  ```

![image](https://github.com/habeebdindi/talentsync/assets/76703071/35095ba5-50b8-4dff-8d3a-faa717523101)

Or you can make your request from the documentation directly, see creating a blog post below.


Create a Blog Post:

  ```
  POST /post
  ```

![image](https://github.com/habeebdindi/talentsync/assets/76703071/2f19d9b3-bed3-481c-9410-534abc17dc44)

![image](https://github.com/habeebdindi/talentsync/assets/76703071/d69e10bb-8d8a-4e20-b063-035c1f4c71ea)

Read Blog Posts:

  ```  
  GET /posts
  GET /post/:postId
  GET /post/author/:author
  ```

Update a Blog Post:

  ```
  PUT /post/:postId
  ```

Delete a Blog Post:

  ```
  DELETE /post/:postId
  ```

Happy blogging with Talentsync Assessment API! 🚀
