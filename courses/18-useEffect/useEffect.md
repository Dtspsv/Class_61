# Virtual DOM

## 1. How Virtual DOM is rendered

only render the necessary compontent

1. When parent change, re-render everything
2. When child change, re-render child

## 2. React component lifecycle

- lifecycle intro
- http://itnext.io/reacts-component-lifecycle-6c13e09d10ad

1. mounting / initialization
2. unmounting
3. updating

## 3. useEffect
`useEffect(callbackFunction, [dependency])`
`useEffect(() => {}, [])`

callbackFunction is used to realize some side effects

side effects:
1. timers (setInterval, setTimeout) - need clean up
2. add event listener clean up
3. fetch data
4. updating/measuring DOM

- some effects need clean up to avoid memory leak
- clearInterval in return of the callback in useEffect
- remove event listener

## 4. dependency
1. When the dependency is empty array []
- callback function only called once when the component mounted

2. When there is no dependency (try to avoid)
- callback function is called when the component mounted and any state updated

3. When the dependency is not empty [state]
- callback function is called when the component mounted and the specified states changed

## Homework
1. Create an APP
2. the app has a component: search bar,
   1. search bar has an input, on change get the value of the input
   2. pass the value to app
3. App will print the search bar data in console
