import React from 'react';

// CSS
import './styles/geral.scss';

// COMPONENTS
import Header from './components/header/index';
import Guideline from './components/guideline/index';
import ListMovies from './components/list/index';

function App() {
  return (
    <div>
			<Header />
			<Guideline />
    	<ListMovies />
		</div>
  );
}

export default App;
