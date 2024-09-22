# Starting the Server

Follow these steps to start the server for the FluxoSimples application:

1. **Navigate to the server directory**
   Open a terminal or command prompt and change to the server directory:
   ```
   cd path/to/Start up Idea/server
   ```
   Replace `path/to` with the actual path on your system.

2. **Check the .env file**
   Ensure that the `.env` file exists in the server directory and contains the following information:
   ```
   JWT_SECRET=your_jwt_secret_here
   MONGODB_URI=your_mongodb_connection_string_here
   PORT=3000
   ```
   Replace `your_jwt_secret_here` and `your_mongodb_connection_string_here` with your actual JWT secret and MongoDB connection string.

3. **Verify .gitignore**
   Make sure that `.env` is listed in the `.gitignore` file to prevent sensitive information from being committed to version control.

4. **Install dependencies (if not already done)**
   If you haven't installed the dependencies yet, run:
   ```
   npm install
   ```

5. **Start the server**
   Run the following command to start the server:
   ```
   node server.js
   ```

6. **Verify server is running**
   You should see output similar to:
   ```
   Server running on port 3000
   Connected to MongoDB
   ```
   This indicates that the server is running successfully and connected to the database.

7. **Testing the server**
   You can now test the API endpoints:
   - Submit a contact form: POST to `http://localhost:3000/api/contact`
   - Admin login: POST to `http://localhost:3000/api/admin/login`
   - View messages (requires login): GET to `http://localhost:3000/api/admin/messages`

Remember to keep your `.env` file secure and never share or commit it to version control.
