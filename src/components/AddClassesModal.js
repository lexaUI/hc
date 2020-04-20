import React from "react";
import { Modal, View, StyleSheet, TextInput, Text } from "react-native";
import { Button } from "react-native-paper";

export const AddClassesModal = ({ visible, closeModal }) => {
	return (
		<Modal animationType="slide" visible={visible} transparent={true}>
			<View style={styles.wrapper}>
				<View style={styles.container}>
					<Text style={{ fontSize: 30, color: "red" }}>Hello</Text>
					<Button onPress={() => closeModal()} />
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	wrapper: { flex: 1, justifyContent: "center", alignItems: "center" },
	container: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fdfdfd",
		width: 300,
		height: 400,
		elevation: 5,
		borderRadius: 5,
	},
});
