# Function based component
- Stateless component

## Clean up the app
- Delete files:
  - App.test.js
  - logo.svg
  - reportWebVitals.js
  - setupTests.js
- Edit index.js
  - remove unused imports
  - remove unused functions
- Edit App.js
  - remove inner tags
  - remove unused imports
- Now we have a clean app to work with

## 10. function based component

1. Function 

- Naming
  - use PascalCase
- Use variable in jsx:
  - name = 'CY'

2. Return
- Must return single tag
- Multiple sibling tags:
  - avoid using '<div>'
  - use '<>', '<React.Fragment>'
  - do not create a node in DOM
  - need to import React from "react" to use
  - `<React.Fragment>` can have key, but `<>` can not

  ### Classwork: Create a component weather component
1. return a '<h1>' with city name
2. return a '<p>' with string of weather details

## 11. export and import
1. When components get too big
2. Export
   1. export / export default
3. Import
   1. {} destruction for regular export
   2. No {} for export default


## 12. state
- Use a variable {appNumber} in `<h1>`
- Use an onClick to update the appNumber
- UI does not change

- Use state to track data change and update UI
1. set up the state
   `const [a variable to store the current state, a function to update the state] = useState(initialValue)`
   - useState (a hook)
2. Consume the state
   - Same as regular variable
3. Update the state
   - setState(newValue)

4. optional:
   1. state is immutable - can not reassign a new value to it
   2. can only use the method setState(newValue) to update it

- Change appNumber from regular variable to a local state
- Set up the callback function in onClick to update the appNumber


## 13. data communication

1. Parent to child: pass as props
in parent:
`<Child name = {argument}/>`

in child:
- Use props as input parameter of the function
- Then consume props .name

2. Child to parent:
in parent:
`const nameFun = () => {}`
`<Child name = {nameFun} />`
3. in child
- Use the function in props to pass data to parent
nameFun(dataPassed)

## Homework:
- Rewrite react app, 
- and weather component, 
- and pass data between parent and child
- Think and practice how to pass data between siblings