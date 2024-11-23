# PlanIt - Desktop App 💼

A modern project management application designed to simplify collaboration and task tracking. Built using technologies like ReactJS for the frontend and Firebase for the backend, PlanIt helps teams organize projects, monitor progress, and improve productivity.

## Live Demo
Check out the live demo of PlanIt here:  
[**Live Demo of PlanIt**](https://planit-11ea5.firebaseapp.com/)

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
### 2. Navigate to Project Directory
Change to the project folder:

```bash
cd PlanIt-Desktop-App
```
### 3. Install Dependencies
Install the required dependencies:

```bash
npm install
```

### 4. Configure Firebase
Set up Firebase for backend integration:

Go to the Firebase console and create a new project.

Add your app to the Firebase project and copy the configuration details.

Create a `.env` file in the project directory with the following variables:

- `REACT_APP_API_KEY=<your_firebase_api_key>`
- `REACT_APP_AUTH_DOMAIN=<your_firebase_auth_domain>`
- `REACT_APP_PROJECT_ID=<your_firebase_project_id>`
- `REACT_APP_STORAGE_BUCKET=<your_firebase_storage_bucket>`
- `REACT_APP_MESSAGING_SENDER_ID=<your_firebase_messaging_sender_id>`
- `REACT_APP_APP_ID=<your_firebase_app_id>`

Replace the placeholders with your Firebase project details.

### 5. Run the Application
Start the development server:

```bash
npm start
```
This will launch the application in your default browser at http://localhost:3000.

# 📚 Step-by-Step Process for PlanIt Application

## 1. Architecture
The architecture of PlanIt is designed with modular components to ensure scalability and efficiency:
- **Frontend**: Built with ReactJS to provide a seamless and responsive user interface.
- **Backend**: Developed using Firebase for handling backend services such as authentication and database operations.
- **Database**: Firebase Realtime Database or Firestore is used for data storage, ensuring real-time synchronization of user data.
- **Routing**: React Router handles navigation for a dynamic, single-page application.

---

## 2. User Registration and Authentication

### Sign-Up
- Users can register by providing their email address and a secure password.
- The registration details are validated and stored securely in Firebase Authentication.
- Firebase ensures the credentials are encrypted and protected.

### Login
- Users log in by entering their registered email and password.
- Firebase Authentication verifies the credentials against stored user data.
- On successful login, the application grants access to user-specific features.

### Persistent Sessions
- After successful login, session persistence is maintained through Firebase Authentication.
- Users remain logged in until they explicitly log out or the session token expires.

---

## 3. Project and Event Management

### Creating Projects/Tasks
- Users can create projects  by entering details such as title, description and due date.
- The information is stored in the Firebase database under user-specific nodes for easy retrieval.

### Updating Projects/Tasks
- Users can edit existing projects by updating their details.
- The changes are instantly reflected in the database and synced across all devices.

### Deleting Projects/Tasks
- Users can delete projects they no longer need.
- Deleted entries are removed from the database and UI in real-time.

---

## 4. Real-Time Synchronization
- Firebase ensures that data added, modified, or deleted on one device is updated across all other logged-in devices in real-time.
- Users always have access to the most up-to-date version of their data.

---

## 5. Notifications and Reminders

### In-App Notifications
- Users receive in-app notifications for approaching deadlines or overdue tasks.
- Notifications are displayed prominently to keep users informed.

### Email Reminders (Optional)
- Email reminders can be sent for tasks/events with due dates.
- This feature can be enabled/disabled in the user settings.

---

## 6. User Interface Features

### Dashboard
- Displays a summary of upcoming projects and notifications.
- Users can quickly access key information from a single view.

### Task/Event Lists
- Projects are categorized into sections such as "All," "Sales," "Developement" etc.
- The lists are color-coded and visually organized for better user experience.

### Search and Filters
- Users can search for specific tasks/events using keywords.
- Filters allow sorting by due date, priority, or category.

---

## 7. Environment Variables
To secure sensitive information, environment variables are used. 

### Setting Up `.env`
Create a `.env` file in the project directory with the following variables:
```plaintext
REACT_APP_API_KEY=<your_firebase_api_key>
REACT_APP_AUTH_DOMAIN=<your_firebase_auth_domain>
REACT_APP_PROJECT_ID=<your_firebase_project_id>
REACT_APP_STORAGE_BUCKET=<your_firebase_storage_bucket>
REACT_APP_MESSAGING_SENDER_ID=<your_firebase_messaging_sender_id>
REACT_APP_APP_ID=<your_firebase_app_id>
```


## 📜 License
[MIT](https://choosealicense.com/licenses/mit/)

## 🤖 About Me
I'm Srijayanth Potluri, an aspiring software developer and data analyst with a strong interest in full stack development, machine learning, deep learning, and NLP technologies. I am dedicated to leveraging advanced algorithms to drive insights and foster meaningful interactions across digital platforms.

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/srijayanth-potluri-437519259/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/SrijayanthP)

