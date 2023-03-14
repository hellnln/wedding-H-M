import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import Routing from './Root';
import './sass/main.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routing />
 	</BrowserRouter>
	
)

