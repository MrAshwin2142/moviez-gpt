import { Provider } from 'react-redux';
import Body from './components/Body';
import appStrore from './utils/appStrore';

function App() {
  return (
    <Provider store={appStrore}>
      <Body />
    </Provider>
  );
}

export default App;
