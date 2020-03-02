import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

const NavStack = createStackNavigator(
  {
    Main: {
      screen: Main,
    },
    Product: {
      screen: Product,
    },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#DA552F',
      },
      headerTintColor: '#FFF',
    },
  },
);

const App = createAppContainer(NavStack);

export default App;
