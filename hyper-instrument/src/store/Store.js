import { configureStore } from '@reduxjs/toolkit';
import appSessionReducer from './appSessionSlice';


export default configureStore({
  reducer: {
    appSession: appSessionReducer
  }
});


  //include all reducer (all store features) of the application store below.
// this version sets up a simple store without middleware
// export default configureStore({
//   reducer: {
//     currentSession: currentSessionReducer
//   }
// });