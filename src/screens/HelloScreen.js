import React from "react";
import { View, StyleSheet } from "react-native";
import { THEME } from "../theme";
import { LoginButton } from "../components/UI/LoginButton";
import { Header } from "../components/UI/Header";

export const HelloScreen = () => {
	return (
		<View style={styles.login}>
			<Header>Are you new here?</Header>
			<LoginButton>Sing Up</LoginButton>
			<LoginButton>Log In</LoginButton>
		</View>
	);
};

const styles = StyleSheet.create({
	login: {
		flex: 1,
		backgroundColor: THEME.LOGIN_BACKGROUND,
		justifyContent: "center",
		alignItems: "center",
	},
});
