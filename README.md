# 👨‍💼 User Admin Dashboard (React + Redux + Firebase)

A fully responsive React-based Admin Dashboard for managing users with add/edit/view functionality, domain analytics via charts, and Firebase as the backend. Designed with Bootstrap and Chart.js for a clean, interactive UI.

---

## 📸 Preview

![Dashboard UI](https://github.com/user-attachments/assets/b078e57d-05c3-43f3-b357-fef35ae784b9)

---

## 🚀 Features

- ✅ Add / Edit / Delete Users
- ✅ Toggle User Status (Active/Inactive)
- ✅ Role-based input (Admin / User)
- ✅ Firebase Realtime Database integration
- ✅ Dashboard with:
  - Users per Domain (Bar Chart)
  - Domain Share (Pie Chart)
- ✅ Redux Toolkit for state management
- ✅ Bootstrap UI + React Icons
- ✅ Toast notifications for actions

---

## 🧱 Project Structure

```
user-admin-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── api/
│   │   └── axiosApi.js              # Axios instance with Firebase URL
│   ├── components/
│   │   ├── Dashboard.js             # Charts and stats UI
│   │   ├── UserSignup.js            # Add/Edit user form
│   │   └── ViewUserData.js          # List of users
│   ├── features/
│   │   └── users/
│   │       ├── thunk.js             # Async thunks (create/edit/delete)
│   │       └── userSlice.js         # Redux slice for user state
│   ├── App.js                       # Main app layout
│   ├── index.js                     # Entry point
│   └── store.js                     # Redux store setup
├── screenshots/
│   ├── dashboard.png
│   ├── add-user.png
│   └── view-users.png
├── .gitignore
├── package.json
├── README.md
└── yarn.lock or package-lock.json
```

---

## ⚙️ Setup Instructions

1. **Clone this repository:**

```bash
git clone https://github.com/your-username/user-admin-dashboard.git
cd user-admin-dashboard
```

2. **Install dependencies:**
   
```
npm install
```

3. **Configure Firebase:**

```
Open src/api/axiosApi.js and update the baseURL with your Firebase Realtime Database endpoint:

js
Copy
Edit
export const axiosInstance = axios.create({
  baseURL: "https://your-firebase-url.firebaseio.com/users"
});
```

4. **Run The App:**

```
npm run
```

##  🧪 Firebase Rules (Development Only)

{
  "rules": {
    ".read": true,
    ".write": true
  }
}

## 📦 Dependencies

| Package           | Purpose              |
|-------------------|----------------------|
| **React**         | UI Library           |
| **Redux Toolkit** | State Management     |
| **Chart.js**      | Bar & Pie charts     |
| **React Bootstrap** | UI Components     |
| **Axios**         | HTTP Requests        |
| **React Toastify**| Notification System  |
| **Firebase**      | Realtime Database    |

## ✨ Future Enhancements

- [ ] Search / Filter users by name or email  
- [ ] Pagination in View Users  
- [ ] Authentication & login system  
- [ ] Export user data to CSV  

---

## 👨‍💻 Author

**Jainam Pokal**  
📧 pokaljainam24  
🌐 [GitHub](https://github.com/pokaljainam24)

