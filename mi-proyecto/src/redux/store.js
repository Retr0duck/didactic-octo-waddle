import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer'; // Assuming `rootReducer` is the combined reducer

const store = configureStore({
  reducer: rootReducer // Pass the combined reducer object directly
});

export default store;