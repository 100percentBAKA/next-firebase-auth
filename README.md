# Next.js Authentication and Authorization Template with Firebase

This template provides a basic setup for authentication and authorization using Firebase as a Backend-as-a-Service (BaaS) in a Next.js application.

## Features

- Email and Password Authentication
- Google Sign-In
- Github Sign-In
- User Registration
- Protected Routes

## Prerequisites

- Node.js and npm installed
- A Firebase project

## Getting Started

### 1. Set up a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click on **Add project**.
3. Follow the on-screen instructions to create a new Firebase project.

Once your Firebase project is created, proceed to add Firebase to your web app:

4. Go to **Project settings**.
5. In the **Your apps** section, click on the **</> (Web)** icon to create a new web app.
6. Register your app with a nickname and click **Register app**.
7. Firebase will provide you with your Firebase configuration.

### 2. Configure Firebase in Your Next.js Project

Create a `.env.local` file in the root of your Next.js project and add your Firebase configuration details:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```
Replace the placeholder values (`your_api_key`, `your_project_id`, etc.) with your actual Firebase project credentials.

### 3. Install All Dependencies and start the web server
```bash
npm i
npm run dev
```
## Stack Used

- **Next.js**: A React framework for production.
- **Firebase**: Backend-as-a-Service for authentication, database, and more.
- **Formik**: For form handling and validation.
- **Yup**: For schema validation.
- **React Icons**: For using icons in React.
- **Tailwind CSS**: For styling the application.

## Contributing
- Fork the repository.
- Clone your fork.
- Create a new branch for your feature or bug fix.
- Commit your changes.
- Push to your fork and submit a pull request.

## Screenshots

<img src="https://github.com/100percentBAKA/next-firebase-auth/blob/main/public/1s.png" width="400" alt="">

<img src="https://github.com/100percentBAKA/next-firebase-auth/blob/main/public/2s.png" width="400" alt="Login Page">

<img src="https://github.com/100percentBAKA/next-firebase-auth/blob/main/public/2xl.png" width="400" alt="Register Page">

