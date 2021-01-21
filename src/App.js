import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import fetchFreelancer from './redux/actions/fetchFreelancer';

import About from './components/About';
import Navbar from './components/Navbar';
import Person from './components/Person';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App({ results, error, loading }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFreelancer());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Person />
      <Portfolio
        results={results}
        error={error}
        loading={loading}
      />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  results: state.freelancer.items,
  loading: state.freelancer.loading,
  error: state.freelancer.error,
});

App.propTypes = {
  results: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(App);
