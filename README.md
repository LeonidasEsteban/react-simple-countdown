# react-simple-countdown
A simple countdown component with React &lt;3


## install

```bash
npm install react-simple-countdown --save
```
## How to use

import component:
```javascript
import CountDown from 'react-simple-countdown';
```

## Props
### date
A string width valid date like isoformat or js dates
### className
Custom component class

##Example
``` javascript
import React from 'react';
import CountDown from 'react-simple-countdown';

const MyComponent = React.createClass({
  render() {
    return(<CountDown date="2015-09-12T00:00:00+00:00" className="CountDown"/>);
  }
})
React.render(<MyComponent/>, document.body);
```
