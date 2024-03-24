// // App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import TableParent from './TableComponent';
import TableInteractiveParent from './TableInteractiveComponent';
import React from 'react';
import NavigationBar from './NaigationBar';
import Example from './muiTableComponent';
import ExampleSingle from './muiSingleTableComponent';
import ExampleSingleAPI from './muiSingleTableComponentFromAPI';
import ComparisonPage from './muiLiveTableFromAPI';

const App = () => {
  return (
    <Router>
    <div>
      <NavigationBar />
      <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/page1" element={<TableParent />} />
           <Route path="/page2" element={<TableInteractiveParent />} />
           <Route path="/page3" element={<ExampleSingle />} />
           <Route path="/livepage3" element={<ExampleSingleAPI />} />
           <Route path="/livecompare" element={<ComparisonPage/>} />
           {/* Add routes for other pages */}
         </Routes>
    </div>
    </Router>
  );
};

export default App;
