import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from "./components/WelcomeScreen";
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';


const RootStack = createNativeStackNavigator({
  screens:{
    Welcome:{
      screen: WelcomeScreen,
      options: {headerShown: false}
    },
    Signup:{
      screen: SignUpScreen,
    },
    Signin:{
      screen: LoginScreen,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App(){
  return <Navigation />;
}