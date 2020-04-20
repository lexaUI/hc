import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const RoundButton = ({ title, style, onPress }) => {
	return (
		<View onPress={onPress} style={{ ...styles.button, ...style }}>
			<Text style={styles.title}>Test{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		width: 100,
		height: 100,
		backgroundColor: "red",
	},
});
