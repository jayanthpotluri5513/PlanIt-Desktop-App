# PlanIt - Desktop App 💼

A modern project management application designed to simplify collaboration and task tracking. Built using technologies like ReactJS for the frontend and Firebase for the backend, PlanIt helps teams organize projects, monitor progress, and improve productivity.

## 🛠 Features
- **Task Management**: Create, assign, update, and track tasks effortlessly.
- **Team Collaboration**: Share updates and communicate with team members in real-time.
- **Project Timeline**: Visualize project milestones and deadlines with a user-friendly timeline.
- **User Authentication**: Secure signup and login to protect user data.
- **Custom Notifications**: Receive alerts for task updates and deadlines.

## 📁 Technologies Used
- **Frontend**:  
  - **ReactJS**: For building dynamic user interfaces.  
  - **HTML/CSS**: For responsive and visually appealing designs.  
  - **JavaScript**: For interactive and seamless user experiences.  
- **Backend**:  
  - **Firebase**: For backend-as-a-service, handling real-time database, hosting, and authentication.  
- **Styling**:  
  - **CSS/Styled Components**: To enhance the visual appeal and usability of the application.
 
## 📦 Dependencies

PlanIt requires the following dependencies to function correctly:

- **ReactJS**: For creating the user interface.  
- **React Router**: For navigation and routing within the application.  
- **Firebase**: For backend services like authentication and database management.  
- **Axios**: For API requests (if applicable).

To install the dependencies, run the following command:

```bash
npm install
```

## 🚀 Project Setup and Execution

To get started with **PlanIt**, follow the steps below:

### 1. Clone the Repository  
Clone the project repository to your local machine:

```bash
git clone https://github.com/jayanthpotluri5513/PlanIt-Desktop-App.git
```
2. Navigate to Project Directory
Change to the project folder:

```bash
cd PlanIt-Desktop-App
```
3. Install Dependencies
Install the required dependencies:

```bash
npm install
```

4. Configure Firebase
Set up Firebase for backend integration:

Go to the Firebase console and create a new project.

Add your app to the Firebase project and copy the configuration details.

Create a .env file in the project directory with the following variables:
REACT_APP_API_KEY=`<your_firebase_api_key>`
REACT_APP_AUTH_DOMAIN=`<your_firebase_auth_domain>`
REACT_APP_PROJECT_ID=`<your_firebase_project_id>`
REACT_APP_STORAGE_BUCKET=`<your_firebase_storage_bucket>`
REACT_APP_MESSAGING_SENDER_ID=`<your_firebase_messaging_sender_id>`
REACT_APP_APP_ID=`<your_firebase_app_id>`
Replace the placeholders with your Firebase project details.


5. Run the Application
Start the development server:

```bash
npm start
```
This will launch the application in your default browser at http://localhost:3000.
