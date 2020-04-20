import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { BoldText } from "./UI/BoldText";
import { RegularText } from "./UI/RegularText";
import { LightText } from "./UI/LightText";

export const ClassItem = () => {
	return (
		<View style={styles.card}>
			<MaterialIcons style={styles.icon} name="class" />

			<View>
				<BoldText style={styles.time}>7:30 AM</BoldText>
				<RegularText style={styles.title}>Product designer meeting</RegularText>
				<RegularText style={styles.name}>John Karmack</RegularText>
				<LightText style={styles.number}>1 of 3</LightText>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		flexDirection: "row",
		alignItems: "center",
		width: 315,
		height: 140,
		backgroundColor: "#fdfdfd",
		elevation: 5,
		borderRadius: 5,
		padding: 10,
		marginBottom: 20,
	},
	icon: {
		fontSize: 70,
		marginBottom: 15,
		marginRight: 10,
		color: "#4043c9",
	},
	time: {
		color: "#a9afbc",
		fontSize: 22,
		marginBottom: 5,
	},
	title: {
		fontSize: 16,
		marginBottom: 5,
	},
	name: {
		fontSize: 16,
		marginBottom: 5,
	},
	number: {},
});
