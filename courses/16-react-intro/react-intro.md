# React Intro

## 1. software development:
- MVC (Model, View, Controller)
- http://developer.mozilla.org/en-US/docs/Glossary/MVC

- web development (drive, youtube, facebook, echat... lots of data)
- need the separation of frontend from backend (MVVM)


## 2. MVVM: Model => View / View => Model
- data drives UI update


## 3. two representation:
- Angular 30-35% (developed by google, platform, high cost, typescript) (HomeDepot)
- React 60-65% (developed by facebook, fast, low cost) (AirBnb, Walmart, McDonald)
- Vue (Ali)

## 4. React:
- A Javascript library to create UIs using reusable components
- Use virtual DOM to keep track the change of the component, to change DOM

## 5. Core features:
5.1 JSX- JavaScript XML
- A combination of html and js syntax
- use babel to compile

5.2 Virtual DOM
- React creates a virtual DOM in memory
- where it does all the necessary manipulating
- before making changes in the browser DOM

5.3 Component (class vs function)
- reusable and modular pieces of code


## 6. hooks
- react v 16.8 (2019-02)
- function component (became popular)


## 7. react app
7.1 create app
- npx create-react-app my-first-react-app
- 'Happy Hacking' good to go

7.2 command 
- to start app:
 - npm start
- to end app:
 - ctrl + c

7.3 structure
- package.json
- \node_modules
- npm i 

- \public: for static files: index.html
- \src: index.js
- \src: App.js

## 8. App.js

## 9. JSX - syntax
9.1 img
- no closing tag: use/ to close <img/>
- component, Capitalize initial letter <App/>

9.2 attributes
- class => className
- className can be used in css

9.3 style in JSX:
- change style in css
- in-line style: style={{color: 'yellow'}}

9.4 you can use js variable/expression directly in {}
- render a variable name = 'CY' in h1
- use a const myPStyle
- use expression

