import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { HelloScreen } from "../screens/HelloScreen";
import { ClassesScreen } from "../screens/ClassesScreen";

const Tab = createMaterialBottomTabNavigator();

export const BottomNavigation = () => {
	return (
		<Tab.Navigator
			activeColor="#4043c9"
			inactiveColor="#3e2465"
			barStyle={{ backgroundColor: "#fdfdfd", elevation: 15 }}
		>
			<Tab.Screen
				name="Hello"
				component={HelloScreen}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="home" color={color} size={26} />
					),
				}}
			/>
			<Tab.Screen
				name="Classes"
				component={ClassesScreen}
				options={{
					tabBarLabel: "Classes",
					tabBarIcon: ({ color }) => (
						<MaterialIcons name="class" color={color} size={26} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};
