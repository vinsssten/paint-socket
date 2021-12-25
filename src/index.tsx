import React from 'react'
import ReactDom from 'react-dom'
import Router from './Router';
import './index.css'

window.React = React

ReactDom.render(<React.StrictMode><Router /></React.StrictMode>, document.getElementById('root'));