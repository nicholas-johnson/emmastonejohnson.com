import React from 'react';
import { Link } from '@reach/router';

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">About</Link>
      </nav>
    </header>
  )
}
