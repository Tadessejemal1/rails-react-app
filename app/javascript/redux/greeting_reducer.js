const initialState = {
    messages: []
  };
  
  const DISPLAY_GREETING = 'DISPLAY_GREETING';
  
  // Action creator for display greeting
  const displayGreeting = (payload) => ({
    type: DISPLAY_GREETING,
    payload
  });
  
  //Reducer for greeting
  const greetingReducer = (state = initialState, action) => {
    switch (action.type) {
      case DISPLAY_GREETING:
        return { ...state, message: [action.payload.messages] };
      default:
        return state;
    }
  };
  
  // get (load) greetings from API
  export const fetchGreeting = () => async (dispatch) => {
    try {
      const response = await fetch('/api/v1/greetings');
      const data = await response.json();
      dispatch(displayGreeting(data));
    } catch (err) {
      throw new Error(err);
    }
  };
  
export default greetingReducer;