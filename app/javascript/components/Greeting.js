import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/reducers/greetingsReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.messages);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

Greeting.propTypes = {
  message: PropTypes.text
};

export default Greeting;