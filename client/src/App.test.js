import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PostList from './posts/PostList'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PostList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
