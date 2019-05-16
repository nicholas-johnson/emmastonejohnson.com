import React from 'react';
import { Link } from '@reach/router';
import styles from './sidebar.scss';

console.log('styles', styles);

export const Sidebar = () => (
  <nav className='sidebar'>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);
