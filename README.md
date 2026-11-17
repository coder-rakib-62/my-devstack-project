### project question-------

### 1. What is the name of your project?
**Answer:** DevStack - Build Your Ideal Development Stack.

### 2. What is your project about?
**Answer:** DevStack is a web application that helps developers explore different web development technologies and build their ideal technology stack. Users can explore technologies from different categories and add their favorite technologies to their personal stack.

### 3. Which technologies have you used in this project?
**Answer:**
- React.js
- JavaScript
- Tailwind CSS
- DaisyUI
- React Toastify
- React Icons
- HTML5
- CSS3

### 4. What are the three main features of your project?

**Answer:**

1. **Explore Technologies:** Users can explore different web development technologies with their names, descriptions, categories, and ratings.

2. **Build Your Own Stack:** Users can select their favorite technologies and add them to their personal development stack.

3. **Manage Your Stack:** Users can remove individual technologies or clear all selected technologies with interactive notifications.



## React Questions & Answers

### 1. What is JSX, and why is it used in React?

**Answer:** JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript. React uses JSX to describe how the user interface should look. It makes code easier to read and understand.

### 2. What is the difference between props and state?

**Answer:** Props are used to pass data from a parent component to a child component. Props are read-only. State is used to manage data inside a component. State can change over time using functions like `useState`.

### 3. What does the `useState` hook do, and where did you use it in this project?

**Answer:** The `useState` hook allows us to manage and update data in a React component. In this project, I used `useState` to store selected technologies in the Your Stack section. It also helps update the UI when a technology is added or removed.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

**Answer:** The `useEffect` hook is used to perform side effects in React, such as fetching data from an API or loading JSON data. I used it to load technology data when the component first renders and store the data in state.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

**Answer:** React uses the `key` prop to identify each item in a list. It helps React understand which items have changed, been added, or removed. A unique key improves list rendering and helps avoid unnecessary updates.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

**Answer:** Conditional rendering means displaying different UI elements based on a condition. In this project, I used conditional rendering in the Your Stack section. When no technology is selected, it displays "Your stack is empty." Otherwise, it displays the selected technologies.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Answer:** We can pass data from a parent component to a child component using props. To send information from a child component back to the parent, we can pass a callback function as a prop. The child component calls that function to send data back to the parent.
