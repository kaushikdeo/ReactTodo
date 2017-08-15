// let's go!
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';
//component refs
import Todo from './components/ContainerComponents/Todo';
import NotFound from './components/NotFound';



const Root = () => {
  return(
    <BrowserRouter>
    <div>
      <Match exactly pattern="/" component={Todo} />
      <Miss component={NotFound} />
    </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<Root />, document.getElementById('main'));
