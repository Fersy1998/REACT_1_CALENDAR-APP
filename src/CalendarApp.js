import React from 'react';

import {store} from './store/store';
import { AppRouter } from './router/AppRouter';
import {Provider} from 'react-redux';
export const CalendarApp = () => {
  return (
    <div>
    <Provider store={store}>
      <AppRouter />
    </Provider>
    </div>
  )
}
