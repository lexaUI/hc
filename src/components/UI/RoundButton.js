import React from "react";
import {
	View,
	StyleSheet,
	Platform,
	TouchableNativeFeedback,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export const RoundButton = ({ style, onPress }) => {
	const Wrapper =
		Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
	return (
		<View style={{ ...styles.button, ...style }}>
			<Wrapper
				background={TouchableNativeFeedback.Ripple("red")}
				activeOpacity={0.8}
				onPress={onPress}
			>
				<Feather name="plus" style={styles.title} />
			</Wrapper>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		width: 70,
		height: 70,
		backgroundColor: "red",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 45,
		elevation: 5,
	},
	title: {
		fontSize: 45,
		color: "#fff",
	},
});