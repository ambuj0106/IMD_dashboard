import React from 'react';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Memory from './Controller/Memory';
import Graph from "./Graph";
import Home from "./Home";
// APi Key : 1-NyJzzvYO4C4bKY7Lvzm9OxeeaOSPQWIZqVYIBLqpHEAifmDwaewfRgpfRkZwTEHx
function App() {
		
return (
	<Router>	
	<Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/graph' element={<Graph />} />
		<Route path='/call' element={<Memory />} />
	</Routes>
	</Router>
);
}

export default App;
