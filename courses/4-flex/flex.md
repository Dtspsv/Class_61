# Flexbox

- Why use flexbox
- https://bitsofco.de/6-reasons-to-start-using-flexbox/

## key in parent:

### display: flex
- manage children
- display in children will not work

### flex-direction
- value:
  - row (default)
  - column
- main axis: same as the flex-direction
- cross axis: the other one

- optional:
- value:
  - row-reverse
  - column-reverse

### flex-wrap
- value:
  - nowrap (default)
  - wrap
  - wrap-reverse

- optional:
- flex-flow === flex-direction + flex-wrap
  - value:
    - row wrap
    - column wrap

### justify-content
- manage spacing on main axis
- value:
  - flex-start (default)
  - center
  - flex-end
  - space-around
  - space-between
  - space-evenly

### align-content
- manage entire block on cross axis
- value:
  - stretch (default)
  - flex-start
  - center
  - flex-end
  - space-around
  - space-between


### align-items
- manage each row/column on cross axis
- Or there is only one row/column
- value:
  - flex-start (default)
  - center
  - flex-end
  - stretch
  - baseline (content's baseline)



## key in child

### align-self
- manage single child in the row/column
- value:
  - flex-start
  - center
  - flex-end


### order
- value:
  - 0 (default)
  - -1, 1, 2

## Homework
- https://flexboxfroggy.com/
- clone weatherstack forecast panel
- deadline: 7:00pm before class
