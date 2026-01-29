
#  TicketFlow — Vue Version

TicketFlow (Vue) is a modern, lightweight ticket management app built using **Vue 3**, **Vue Router**, and **Tailwind CSS**.  
It mirrors the same user experience as the React and Twig versions, providing a consistent UI across all frameworks.

---
## Live Demo
*ticketflow-vueproject.netlify.app*

---
##  Frameworks & Libraries Used

| Tool | Purpose |
|------|----------|
| **Vue 3** | Core framework for building UI |
| **Vue Router** | Handles routing between pages |
| **Tailwind CSS** | Utility-first styling framework |
| **LocalStorage** | Stores mock authentication & session data |
| **Vite** | Development server and build tool |

---

##  Getting Started

Follow these steps to set up and run the Vue version locally.

### Clone the Repository
```bash
git clone https://github.com/yourusername/ticketflow.git
cd ticketflow/vue
Install Dependencies
npm install
Start the Development Server
npm run dev

Once it compiles, open:
 http://localhost:5173

ticketflow/
└── vue/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── Header.vue
    │   │   ├── Footer.vue
    │   │   └── Toast.vue
    │   ├── views/
    │   │   ├── LandingView.vue
    │   │   ├── LoginView.vue
    │   │   ├── SignupView.vue
    │   │   ├── DashboardView.vue
    │   │   └── TicketsView.vue
    │   ├── router/
    │   │   └── index.js
    │   ├── main.js
    │   └── App.vue
    ├── index.html
    ├── package.json
    └── README.md
Switching Between Versions

TicketFlow has three versions:

/react
/vue
/twig


Each version is independent.
To switch:

Run Vue → cd vue && npm run dev

Run React → cd react && npm run dev

Run Twig → Serve via PHP on MAMP or Render

Styling & Design

All styles are built using Tailwind CSS.
This gives a clean, responsive interface that adapts to all screen sizes.
Local Setup (MAMP / XAMPP)

1️ Start MAMP or XAMPP  
2️ Move the `ticketflow-twig` folder into your local web root, e.g.
Key Files
File	Purpose
config.php	Initializes Twig & session
index.php	Landing page
login.php, signup.php	Auth pages
dashboard.php, tickets.php	Protected pages
includes/auth.php	Helper functions
assets/js/auth.js	Frontend login/signup logic
♿ Accessibility

Forms labeled & keyboard accessible

Toasts use readable colors

Consistent navigation

Test User Credentials
Email: admin@test.com
Password: password

 Known Issues

Client-side mock auth only

No database (demo only)

Uses LocalStorage to simulate sessions
