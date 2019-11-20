# react-collapser
A simple collapser solution for ReactJS

## Getting Started

```js
  import { CollapserContainer, CollapserBody, CollapserButton } from './Collapser';
```
```jsx
    <CollapserContainer> {/* defines the collapse context */}
      <div className="card">
          <div className="card-header">
              <h3>
                  Title
                  <CollapserButton
                      onButton={<button class="btn btn-primary float-right" type="button">+</button>}
                      offButton={<button class="btn btn-primary float-right" type="button">-</button>}
                  /> {/* button to control the collapse toggle */}
              </h3>
          </div>
          <CollapserBody> {/* content to be collapsed or not */}
              <div className="card-body">
                  Body
              </div>
          </CollapserBody>
      </div>
    </CollapserContainer>
```
