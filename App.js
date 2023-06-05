import { Provider } from 'react-redux';
import store from './src/reducers/store';

import AppNavigation from './src/router/AppNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}