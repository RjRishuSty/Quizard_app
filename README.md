# Quizard App

![Quizard App](https://img.shields.io/badge/status-active-brightgreen)

Quizard App is a **React-based quiz creation platform** that allows users to generate quizzes dynamically. Users can create quizzes by entering quiz details, selecting quiz type, and providing a source (URL, PDF, or text).  

The app is built with **React**, **MUI**, **React Router**, and **Swiper** for responsive quiz display.

---

## Live Demo

Check out the live version of the Quizard App here:  

[Quizard App Live on Vercel](https://quize-app-snowy.vercel.app/)

---

## Git Repository

[Quizard App GitHub Repo](https://github.com/RjRishuSty/Quizard_app.git)

---

## Features

- **Dynamic Quiz Creation:** Create quizzes with custom name, number of questions, and type (Personality / Trending).  
- **Source Options:** Input URL, upload PDF, or create Text-based quizzes.  
- **Responsive Design:** Fully responsive using MUI Grid system.  
- **Conditional Rendering:** Fields adapt based on source type.  
- **Navigation:** Redirects to a quiz preview page after submission.  
- **Dark Theme:** Modern UI with dark background and styled components.  

---

## Dependencies and Why They Are Used

- **react** – Core library for building the React UI.  
- **react-dom** – Renders React components in the browser.  
- **react-router-dom** – Handles client-side routing between pages.  
- **@mui/material** – Provides Material UI components for responsive design.  
- **@mui/icons-material** – Adds Material Design icons for UI elements.  
- **@emotion/react** – Enables dynamic styling with MUI components.  
- **@emotion/styled** – Allows creation of styled components for custom theming.  
- **swiper** – Adds swipeable carousels and sliders for quizzes.  

---

## Workflow

1. **Open the App** → Landing on Home Page.  
2. **Generate Quiz** → Click “Generate Quiz” to open the quiz creation modal.  
3. **Fill Quiz Details** → Enter quiz name, number of questions (default 10), select quiz type, and choose source type.  
4. **Conditional Source Field** →  
   - URL → Shows input to enter URL.  
   - PDF → Shows file upload input.  
   - Text Base → Redirects to a separate page for text-based quiz creation.  
5. **Submit Quiz** → Click “Generate” button.  
6. **Navigate to Preview** → After submission, user is redirected to `GenerateQuizePage` to view submitted data.  
7. **Back Navigation** → Users can go back to edit or create another quiz.  

---

## Running the App

### Clone the Repository

```bash
git clone https://github.com/RjRishuSty/Quizard_app.git
cd Quizard_app/Frontend

npm install

npm start
