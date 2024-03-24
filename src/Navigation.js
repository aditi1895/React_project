import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/page1">Page 1</Link></li>
        <li><Link to="/page2">Page 2</Link></li>
        <li><Link to="/page3">Page 3</Link></li>
        <li><Link to="/page4">Page 4</Link></li>
        <li><Link to="/page5">Page 5</Link></li>
        <li><Link to="/page6">Page 6</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
