import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { HelloScreen } from "../screens/HelloScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { SignUpScreen } from "../screens/SignUpScreen";

const Navigator = createStackNavigator(
	{
		Hello: HelloScreen,
		LogIn: LoginScreen,
		SignUp: SignUpScreen,
	},
	{
		initialRouteName: "Hello",
	},
);

export const AppNavigation = createAppContainer(Navigator);
