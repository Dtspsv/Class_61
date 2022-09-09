# Lesson 19 React router

## 1. Router
- SPA: Single Page App
- Complex website needs more pages
- need router to create multi pages app

## 2. Initial Setup
1. Use a basic react-app
2. npm i
3. npm install react-router-dom
4. index.js
   <BrowserRouter>
   <App />
   </BrowserRouter>
5. App.js
   function App() {


    return (
        <div className="App">
            <h1>
                My app
            </h1>
            <Routes>
                
            </Routes>
        </div>
    );
}

## 3. Create Page1
- Create a component for Page1
- Put the component in <Routes></Routes>
  `<Route path="/page1" element={<Page1/>}/>`
- when type /page1 in url, component Page1 will be rendered

## 4. Classwork: Page2

## 5. Create a nav bar
- A regular react component

## 6. Create page with passing data - Page3
- url is generated through programming
- https://songshop.ca/product/not-today/
- Page3 for products/song-name

## 7. useParams
- Not same as props
- to get the value passed in url
- `let page3 = useParams()`
- destruct to use the value passed in url



## 8. useNavigate
- add: `let navigate = useNavigate()` in component
- go to path
   - `navigate(`/singer/${props.singerId}`)`
      - Page4
   - without "/" `navigate('detail')`
      - Page5
- go backward and forward
- redirect and conditional redirect using `<Navigate>`

## 9. use window


## 10. redirect
- unconditional
   - `<Route path="/" element={<Navigate to="page1" />} />`
- conditional
   - ` <Route
     path="/checkout"
     element={isCartEmpty ? <Navigate to="/page1" /> : <p>checkout</p>}
     />
     `


## 11. NoMatch
- everything else other than the listed path goes here
  `<Route path="*" element={<NoMatch/>}/>`


## Homework:
- refactor all components to their own files

- make city view a multi-page-app
   - a separate page to show one picture, with description
   - url is created dynamically based on index
   - example: localhost:3000/picture/2
   - the picture page has a button to go back