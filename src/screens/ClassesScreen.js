import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { BoldText } from "../components/UI/BoldText";
import { RegularText } from "../components/UI/RegularText";
import { LightText } from "../components/UI/LightText";
import { ClassItem } from "../components/ClassItem";
import { RoundButton } from "../components/UI/RoundButton";
import { AddClassesModal } from "../components/AddClassesModal";
import { Button } from "react-native-paper";

export const ClassesScreen = () => {
	const [counter, setCounter] = useState(3);
	const [modalVisible, setModalVisbile] = useState(false);
	return (
		<ScrollView style={styles.wrapper}>
			<RoundButton
				onPress={() => console.log("true")}
				style={styles.roundButton}
			/>
			<View style={styles.header}>
				<BoldText style={styles.headerTitle}>Classes</BoldText>
				<LightText style={styles.counter}>
					You have {counter} classes today
				</LightText>
			</View>
			<View style={styles.classes}>
				<ClassItem />
				<ClassItem />
				<ClassItem />
			</View>
			<AddClassesModal
				visible={modalVisible}
				closeModal={() => setModalVisbile(false)}
			/>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: "#f9f9f7",
	},
	header: {
		padding: 20,
	},
	headerTitle: {
		fontSize: 40,
	},
	counter: {
		fontSize: 20,
		paddingTop: 10,
	},
	classes: {
		justifyContent: "center",
		alignItems: "center",
	},
	roundButton: {
		left: 5,
	},
});
