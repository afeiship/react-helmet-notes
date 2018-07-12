import ReactDOM from 'react-dom';
import React from 'react';
import { Helmet } from "react-helmet";


const App = () => {
  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h3>Hello helmet!</h3>
    </div>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
