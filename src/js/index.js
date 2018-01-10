import '../scss/index.scss'
// import '../scss/abc.scss'
// import '../scss/css.css'
import '../assets/images/1223.jpg'
import LineChartComponent from './Conponents/Linechart.Component'

import React from 'react';
import ReactDOM from 'react-dom';

// Render the main component into the dom
ReactDOM.render(<LineChartComponent title="true"/>, document.getElementById('app'));

// import 'normalize.css'；
console.log('成功')