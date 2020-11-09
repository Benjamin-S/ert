import React from 'react';
import Titlebar from './parts/titlebar/titlebar';

const App = () => {
	return (
		<div className="Windows" style={{top: '0px', right: '0px', bottom: '0px', left: '0px', position: 'relative', width: '100%', height: '300px'}}>
			<Titlebar/>
		</div>
	);
};

export default App;
