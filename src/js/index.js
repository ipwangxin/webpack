import '../scss/index.scss'
import '../scss/abc.scss'
import '../scss/css.css'
import '../assets/images/1223.jpg'

import React from 'react';
import ReactDOM from 'react-dom';

// Render the main component into the dom
ReactDOM.render(<div>div</div>, document.getElementById('app'));

// import 'normalize.css'；
console.table({
    a:[1,2,4,5],
    b:new RegExp(/1/),
    c:{
        a:1,b:2,c:{d:'d',e:'e',f:'f'},d:'d'
    }
})