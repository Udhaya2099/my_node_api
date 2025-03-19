# my_node_api

## 📌 Project Overview
This is a Node.js API that provides backend services for [describe project functionality].

## 🚀 Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Udhaya2099/my_node_api.git
   cd my_node_api


##end points
API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	User Registration
POST	/api/auth/login	User Login
GET	/api/users	Get Users List


##sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password TEXT
);
