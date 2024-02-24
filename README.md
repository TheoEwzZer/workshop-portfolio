# WORKSHOP PORTFOLIO

## Pre-requisites

- Install [Node.js](https://nodejs.org/en/download/) (Node 18.17 or higher)
- Install [npm](https://www.npmjs.com/get-npm) (npm 5.2 or higher)

## Project setup

### Create a new Next.js project

We recommend starting a new Next.js app using `create-next-app`, which sets up everything automatically for you. To create a project, run:

```bash
npx create-next-app@latest
```

On installation, you'll see the following prompts, which you can answer as follows:

```bash
What is your project named? portfolio
Would you like to use TypeScript? No
Would you like to use ESLint? Yes
Would you like to use Tailwind CSS? Yes
Would you like to use `src/` directory? Yes
Would you like to use App Router? (recommended) Yes
Would you like to customize the default import alias (@/*)? No
```

After the prompts, `create-next-app` will create a folder with your project name and install the required dependencies.

If you're new to Next.js, see the [project structure](https://nextjs.org/docs/getting-started/project-structure) docs for an overview of all the possible files and folders in your application.

### Run the Development Server

1. Run `npm run dev` to start the development server.
2. Visit <http://localhost:3000> to view your application.

## Explanation of files

In the `src/app` folder, you'll find two files: `page.js` and `layout.js`. Here's what they're for:

### page.js

`page.js` is the basic component of your page. It contains the main content of your page.

### layout.js

`layout.js` is a component that wraps your page. It's used to include elements that are common to all pages, such as headers, footers, navigation, etc. You can think of it as the skeleton of your website, where `page.js` is the content that changes within that skeleton.

The main difference between `page.js` and `layout.js` is their use: `page.js` is used for content specific to each page, while `layout.js` is used for content common to all pages.

## Start with the Header Section

The header section is the first thing that users see when they visit your website. It's important to make a good first impression, so we'll start by creating the header section.

### Create a new component

Create a new directory called `components` in the `src` folder. Inside the `components` directory, create a new file called `HeaderSection.jsx`.

Why `jsx`? Because we're using React, and React uses JSX to create components.

But what is a component? A component is a reusable piece of code that can be used to create elements with the same functionality and appearance. In our case, we'll use a component to create the header section of our website.

#### Do you know tailwindcss?

Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without having to leave your HTML. It's a great way to create a custom design without having to write a lot of CSS.

Traditionally, whenever you need to style something on the web, you write CSS.

```js
<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img class="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>

<style>
  .chat-notification {
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .chat-notification-logo-wrapper {
    flex-shrink: 0;
  }
  .chat-notification-logo {
    height: 3rem;
    width: 3rem;
  }
  .chat-notification-content {
    margin-left: 1.5rem;
    padding-top: 0.25rem;
  }
  .chat-notification-title {
    color: #1a202c;
    font-size: 1.25rem;
    line-height: 1.25;
  }
  .chat-notification-message {
    color: #718096;
    font-size: 1rem;
    line-height: 1.5;
  }
</style>
```

This code is a simple example of a chat notification. It's a simple design, but it requires a lot of CSS. With Tailwind CSS, you can achieve the same design with the following code:

```js
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
```

In the example above, we’ve used:

- Tailwind’s `flexbox` and `padding` utilities (`flex`, `shrink-0`, and `p-6`) to control the overall card layout
- The `max-width` and `margin` utilities (`max-w-sm` and `mx-auto`) to constrain the card width and center it horizontally
- The `background color`, `border radius`, and `box-shadow` utilities (`bg-white`, `rounded-xl`, and `shadow-lg`) to style the card’s appearance
- The `width` and `height` utilities (`w-12` and `h-12`) to size the logo image
- The `space-between` utilities (`space-x-4`) to handle the spacing between the logo and the text
- The `font size`, `text color`, and `font-weight` utilities (`text-xl`, `text-black`, `font-medium`, etc.) to style the card text

This approach allows us to implement a completely custom component design without writing a single line of custom CSS.

You can use the Tailwind CSS documentation to find the utility classes you need to build your designs.
You can also use the `Tailwind CSS IntelliSense` extension for Visual Studio Code to get instant feedback as you type in your HTML.

After creating the `HeaderSection.jsx` file, add the following code to it:

```jsx
import React from "react";

const HeaderSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
          <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {"Hello, I'm John Doe"}
          </span>
        </h1>
        <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
      </div>
    </section>
  );
};

export default HeaderSection;
```

In the code above, we've created a simple header section with a title, and a description. We've used Tailwind CSS to style the header section.

Whe have now the header section, but we need to include it in our page. To do that, we'll import the `HeaderSection` component into the `page.js` file and use it there.

```jsx
import HeaderSection from "@/components/HeaderSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto px-12 py-4">
        <HeaderSection />
      </div>
    </main>
  );
}
```

In the code above, we've imported the `HeaderSection` component and used it in the `Home` component. We've also added some Tailwind CSS classes to the `main` and `div` elements to style the page.

Now, if you visit <http://localhost:3000>, you'll see the header section at the top of the page.

## Add the navigation bar

The navigation bar is an important part of your website. It helps users navigate through your website and find the information they're looking for. We'll add a simple navigation bar to our website.

### Create a new component

Create a new file called `Navbar.jsx` in the `components` directory. Complete the empty space of the following code:

```jsx
import React from "react";
import Link from "next/link";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap items-center justify-end mx-auto p-8">
        <div className="block w-auto">
          <ul className="font-medium flex rounded-lg flex-row space-x-8 mt-0">...</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```

Already heard about `Link` from `next/link`?
Link is a built-in Next.js component that allows you to link to other pages in your application. It's a wrapper around the HTML anchor (`<a>`) tag, and it handles client-side navigation for you.

For a better code, use a `map` function to iterate over the `navLinks` array and create a list of links.

### Implement the Navbar component

After creating the `Navbar.jsx` file, import the `Navbar` component into the `page.js` file and use it there.

```jsx
import HeaderSection from "@/components/HeaderSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-24">
        <HeaderSection />
      </div>
    </main>
  );
}
```

In the code above, we've imported the `Navbar` component and used it in the `Home` component. We've also added some Tailwind CSS classes to the `main` and `div` elements to style the page.

Now, if you visit <http://localhost:3000>, you'll see the navigation bar at the top of the page.

## Add the About section

The About section is where you tell users about yourself. It's important to make a good first impression, so we'll add a simple About section to our website.

### Create a new component

Create a new file called `AboutSection.jsx` in the `components` directory. Complete the empty space of the following code:

```jsx
"use client";

import React, { useState } from "react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>...</li>
        <li>...</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>...</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>...</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-white">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          ...
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
```

Already heard about `find` function?
The `find` function is a built-in JavaScript function that allows you to find an item in an array based on a condition. It returns the first item that matches the condition, or `undefined` if no item matches the condition.

### Explanation of "use client" and useState

#### use client

"use client" is a directive that indicates that the following code should be executed only on the client (i.e. in the user's browser) and not on the server. This is useful for code that uses browser-specific features, such as the location API or cookies, which are not available on the server.

#### useState

`useState` is a React Hook that lets you add a local state to your functional component. State is data that is maintained by the component throughout its lifetime. For example, you can use the state to keep track of the value of an input field, the opening state of a drop-down menu, etc.

Here's how you can use `useState` :

```jsx
const [state, setState] = useState(initialState);
```

In the code above, `state` is the current state value, and `setState` is a function that lets you update the state. `initialState` is the initial value of the state.

Why use `useState` and not a simple variable? Because when you update the state using `setState`, React will re-render the component with the new state value. This is useful for updating the UI when the state changes.

### Implement the AboutSection component

After creating the `AboutSection.jsx` file, import the `AboutSection` component into the `page.js` file and use it there.

```jsx
import HeaderSection from "@/components/HeaderSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-24">
        <HeaderSection />
        <AboutSection />
      </div>
    </main>
  );
}
```

In the code above, we've imported the `AboutSection` component and used it in the `Home` component. We've also added some Tailwind CSS classes to the `main` and `div` elements to style the page.

Now, if you visit <http://localhost:3000>, you'll see the About section below the header section.

## Add the Projects section

If you've made it this far, congratulations! You've created the header section, the navigation bar, and the About section. Now, let's add the Projects section to our website.

Good luck ;)
