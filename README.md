# Dev Stack Builder

## Project Description

Dev Stack Builder is a responsive React website that allows users to explore different development technologies and build their own technology stack.

Users can browse technologies, view their category, difficulty level, rating, description, and add their preferred technologies to a personal stack. They can also remove individual technologies or clear the entire stack.

The project is designed with a clean and modern interface and is fully responsive for desktop, tablet, and mobile devices.

---

## Technologies Used

- React
- JavaScript (ES6+)
- Vite
- CSS
- React Toastify
- JSON
- Git & GitHub

---

## Features

### 1. Explore Technologies

Users can explore different development technologies with useful information such as:

- Technology name
- Description
- Category
- Difficulty level
- Rating
- Badge
- Technology icon

The technology information is loaded from a JSON file.

### 2. Build Your Own Stack

Users can add technologies to their own stack.

The selected technologies are displayed in the **Your Stack** section. Users can also remove individual technologies or remove all selected technologies at once.

### 3. Responsive Design

The website is responsive and works properly on:

- Desktop
- Tablet
- Mobile

The technology cards automatically adjust according to the screen size.

### 4. Add to Stack System

When a technology is added to the stack, its button changes to:

`✓ Added to Stack`

This prevents the same technology from being added multiple times.

### 5. Toast Notifications

React Toastify is used to display notifications when users:

- Add a technology
- Remove a technology
- Remove all technologies
- Try to add a technology that is already selected

### 6. Loading State

A loading spinner is displayed while the technology data is being loaded from the JSON file.

### 7. Modern User Interface

The website includes:

- Sticky navigation bar
- Gradient hero section
- Technology cards
- Personal stack sidebar
- Responsive mobile navigation
- Footer with useful links

---

# React Questions & Answers

## 1. What is JSX, and why is it used?

JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript.

JSX makes React components easier to write and understand because we can describe the UI using a syntax similar to HTML.

Example:

```jsx
function Welcome() {
  return <h1>Hello World!</h1>;
}
2. What is the difference between Props and State?

Props and State are both used to handle data in React, but they have different purposes.

Props

Props are used to pass data from a parent component to a child component.

Props are read-only and should not be directly modified by the child component.

Example:
<TechnologyCard
  technology={technology}
  isAdded={isAdded}
  onAdd={handleAddToStack}
/>
Here, technology, isAdded, and onAdd are passed to the TechnologyCard component as props.

State

State is data managed inside a React component. State can change over time, and when the state changes, React re-renders the component.

Example:

const [stack, setStack] = useState([]);

Here, stack is the current state and setStack is used to update it.
3. What is the useState hook and how does it work?

useState is a React Hook that allows functional components to create and manage state.

It returns two values:

The current state value
A function to update that state

Example:

const [stack, setStack] = useState([]);

Here:

stack is the current state.
setStack updates the state.
[] is the initial state.

When setStack is called, React updates the state and re-renders the component.
4. What is the useEffect hook and when should you use it?

useEffect is a React Hook used to perform side effects in a component.

Side effects can include:

Fetching data
Working with APIs
Updating the document title
Setting up subscriptions
Running code after rendering

In this project, useEffect is used to load technology data from the JSON file.

Example:

useEffect(() => {
  fetch("/data/technologies.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load technologies");
      }

      return response.json();
    })
    .then((data) => {
      setTechnologies(data);
      setLoading(false);
    });
}, []);

The empty dependency array [] means the effect runs when the component is initially loaded.
5. What is the purpose of the key prop in React lists?

The key prop helps React identify individual elements in a list.

It allows React to efficiently determine which items have been added, removed, or changed.

Example:

{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}

Here, technology.id is used as the unique key for each technology.

Using a stable and unique key helps React efficiently update the UI.
6. What is conditional rendering in React?

Conditional rendering means displaying different UI elements depending on a condition.

For example, this project displays a loading message while the technology data is being loaded:

{loading ? (
  <div className="loading-state">
    <p>Loading technologies...</p>
  </div>
) : (
  <div className="technology-layout">
    ...
  </div>
)}

Another example is the Your Stack section:

{stack.length === 0 ? (
  <div>
    <p>No technologies selected yet.</p>
  </div>
) : (
  <div>
    ...
  </div>
)}

This allows React to display different content based on the current state.
7. How do you communicate between parent and child components in React?

In React, a parent component can communicate with a child component by passing data and functions through props.

For example:

<TechnologyCard
  technology={technology}
  isAdded={isAdded}
  onAdd={handleAddToStack}
/>

The parent component passes the technology data and the handleAddToStack function to the child component.

The child component can then call the function:

onAdd(technology);

This allows the child component to trigger an action that is handled by the parent component.

Project Structure
B14-A05-DevStack
│
├── public/
│   ├── assets/
│   │   ├── banner-stack.png
│   │   └── logo-text.png
│   │
│   └── data/
│       └── technologies.json
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TechnologyCard.jsx
│   │   ├── YourStack.jsx
│   │   └── Footer.jsx
│   │
│   ├── data/
│   │   └── technologies.json
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── assets/
├── ui/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

How to Run Locally
1. Clone the repository
git clone YOUR_GITHUB_REPOSITORY_URL
2. Go to the project directory
cd B14-A05-DevStack
3. Install dependencies
npm install
4. Start the development server
npm run dev
5. Open the local development server
http://localhost:5173/
Build for Production

To create a production build:

npm run build

To preview the production build:

npm run preview
Author

Developed as part of Programming Hero Assignment 5.

Project Name: Dev Stack Builder