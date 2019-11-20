# react-collapser
A simple collapser solution for ReactJS

## Getting Started

```js
  import { CollapserContainer, CollapserBody, CollapserButton } from './Collapser';
```
```js
    <div className="card">
        <div className="card-header">
            <h3>
                Title
                <CollapserButton
                    onButton={<button class="btn btn-primary float-right" type="button">+</button>}
                    offButton={<button class="btn btn-primary float-right" type="button">-</button>}
                />
            </h3>
        </div>
        <CollapserBody>
            <div className="card-body">
                Body
            </div>
        </CollapserBody>
    </div>
```
