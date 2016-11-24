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
import { render } from 'react-dom';
import CountDown from 'react-simple-countdown';

function finish() {
  console.log('Countdown finished');
}

function MyComponent() {
  // i18n or custom messages
  const messages = {
    days: {
      plural: 'Days',
      singular: 'Day',
    },
    hours: 'Hours',
    mins: 'Min',
    segs: 'Seg',
  }
  return (
    <CountDown
      date="2015-09-12T00:00:00+00:00"
      className="MyCoundown"
      {...messages}
      onEnd={finish}
    />
  );
}

render(<MyComponent/>, document.body);
```


### Custom classNames
Rendered html output for prop className="MyCountdown"

``` html
<div className="MyCountdown">
  <div class="MyCountdown-col is-day">
    <p><strong>01</strong><span>Days</span></p>
  </div>

  <div class="MyCountdown-col is-hour">
    <p><strong>00</strong><span>Hours</span></p>
  </div>
  <div class="MyCountdown-col is-min">
    <p><strong>00</strong><span>Mins</span></p>
  </div>
  <div class="MyCountdown-col is-seg">
    <p><strong>10</strong><span>Seg</span></p>
  </div>
</div>
```
