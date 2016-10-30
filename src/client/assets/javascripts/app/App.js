import React, { PropTypes } from 'react';

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const App = (props) => (
  <div className="page-container">
    <Navbar />
    {React.cloneElement({...props}.children, {...props})}
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
