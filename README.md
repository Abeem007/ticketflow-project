TicketFlow — Vue.js Version

TicketFlow is a responsive, modern ticket management web application built with Vue 3 and Tailwind CSS.
It allows users to sign up, log in, and manage tickets with CRUD functionality — including validation, local persistence, and smooth UI transitions.
This project is part of a multi-framework implementation, also available in React and Twig with identical layout and design consistency.

Frameworks & Libraries Used
Purpose Library / Framework
Core Framework Vue 3 (Composition API)

Routing Vue Router

Styling Tailwind CSS

Icons & Transitions Native CSS + Tailwind utilities
Local Storage Mock Auth Browser LocalStorage (no backend)
UI Components Overview
Core Components
Component Description
LandingPage.vue Modern hero section with wavy SVG background and decorative circles. Entry point for users.
LoginPage.vue Handles user authentication using mock credentials (stored in LocalStorage). Includes form validation and accessibility feedback.
SignupPage.vue Allows users to register new accounts. Validates inputs (email, password strength, confirmation).
Dashboard.vue Displays ticket statistics — open, resolved, total — with decorative design elements.
TicketManagement.vue Full CRUD interface for managing tickets. Allows creating, editing, deleting, and filtering tickets. Persists data in LocalStorage.
Footer.vue Global footer across all pages. Provides consistent layout and credits section.
🧠 State Structure

TicketFlow uses Vue's reactive ref() variables for managing component state.
Each major page maintains its own localized state:

State Location Purpose
email, password, confirmPassword SignupPage.vue / LoginPage.vue Form data and validation
tickets TicketManagement.vue Stores all user-created tickets
toast All pages Controls temporary notification messages
errors All pages with forms Manages form validation feedback
session LocalStorage (ticketapp_session) Simulates user login state
♿ Accessibility Notes

TicketFlow follows accessibility best practices:

ARIA roles (role="status", aria-live="polite") are used for toast notifications.

Semantic HTML elements (forms, labels, buttons) improve screen reader usability.

Keyboard Navigation is supported throughout all forms and buttons.

Color contrast is ensured between text and background (AA-compliant).

Focus rings and hover states are visible on interactive elements.

⚙️ Setup & Usage
1️⃣ Clone the Repository
git clone https://github.com/your-username/ticketflow-vue.git
cd ticketflow-vue

2️⃣ Install Dependencies
npm install

3️⃣ Run the Development Server
npm run dev

Then visit:
http://localhost:5173

4️Build for Production
npm run build

Switching Between Framework Versions

TicketFlow is implemented in three frameworks: Vue.js, React, and Twig.

Framework Folder / Branch Run Command
Vue.js /vue or main branch npm run dev
React /react npm start
Twig /twig Use Symfony/Express + twig templates

All frameworks share:

Identical layout and hero design (wave, circles, max-width: 1440px)

Same color palette and accessibility

Equivalent authentication + CRUD logic
Only the framework syntax and lifecycle methods differ.

Example Test User Credentials
Field Value
Email test@example.com
Password password123

You can also create your own account directly on the signup page.
All credentials are stored locally in your browser via LocalStorage for mock authentication.

Known Issues

Authentication and tickets are stored locally (no backend or encryption).

Refreshing the page clears toast messages (expected behavior).

Multi-user sessions are not supported.

Data is browser-specific — tickets don’t sync across browsers/devices.

Design Consistency Rules

These are maintained across Vue, React, and Twig versions:

max-width: 1440px centered layout.

Decorative wavy SVG at hero section bottom.

Overlapping decorative circles and gradients.

Identical button styles, shadows, and font weights.

Shared Tailwind configuration for color palette and spacing.

💡 Credits

Developed as part of a multi-framework UI project demonstrating design consistency, accessibility, and state management across modern web technologies.
