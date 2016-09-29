import React from 'react';
import {render} from 'react-dom';

import "bootstrap/dist/css/bootstrap.min.css"
import "./main.css"
import Rocters from './rocters';
import 'highlight.js/styles/github.css';
import './post.css';


render(<Rocters />,document.getElementById('root'));
