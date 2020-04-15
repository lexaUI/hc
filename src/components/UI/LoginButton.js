import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../../theme";
import { BoldText } from "./BoldText";

export const LoginButton = ({ children, color = THEME.LOGIN_BTN_COLOR }) => {
	return (
		<View>
			<Text style={{ ...styles.button, color: color }}>{children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		textAlign: "center",
		backgroundColor: THEME.LOGIN_BTN_BG,
		width: 250,
		height: 50,
		paddingLeft: 10,
		paddingTop: 14,
		marginTop: 20,
		marginBottom: 7,
		fontSize: 16,
		textTransform: "uppercase",
	},
});
