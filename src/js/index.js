import React from 'react';
import ReactDOM from 'react-dom';

import '../scss/index.scss'

import LineChart from './Conponents/linechart/linechart';
import GuessPrice from './Conponents/guessPrice/guessPrice';



// Render the main component into the dom
ReactDOM.render((<div className="a">
<GuessPrice />
<LineChart title="true"/>
</div>), document.getElementById('app'));
console.log('成功')