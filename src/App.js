import { Fragment } from 'react';
import './App.css';

import Demo from './components/8_ErrorBoundary/Parent';

function App(props) {
  return (
    <Fragment>
      <Demo root={props.root} />
    </Fragment>
  );
}

export default App;
