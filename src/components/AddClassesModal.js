import React, { useState } from "react";
import { Modal, View, StyleSheet, TextInput, Button } from "react-native";
import { BoldText } from "./UI/BoldText";
import { ModalButton } from "./UI/ModalButton";

export const AddClassesModal = ({ visible, addNewClass }) => {
	const [info, setInfo] = useState({ time: "", title: "", name: "" });

	const handleClick = () => {};

	return (
		<Modal animationType="slide" visible={visible} transparent={true}>
			<View style={styles.wrapper}>
				<View style={styles.container}>
					<BoldText style={{ fontSize: 18, color: "#000", marginBottom: 20 }}>
						Fill in the fields to add a new class
					</BoldText>
					<TextInput
						style={styles.input}
						maxLength={64}
						placeholder="Time of the class"
						value={info.time}
						onChange={(time) => setInfo((info.time = time))}
					/>
					<TextInput
						style={styles.input}
						maxLength={30}
						placeholder="Name of the class"
						value={info.title}
						onChange={(title) => setInfo((info.title = title))}
					/>
					<TextInput
						style={styles.input}
						maxLength={30}
						placeholder="Teacher's name"
						value={info.name}
						onChange={(name) => setInfo((info.name = name))}
					/>
					<Button
						title="check"
						onPress={(info) => console.log(info.name, info.title, info.time)}
					/>
					<ModalButton
						style={{ marginTop: 20 }}
						onPress={() => addNewClass("test")}
					/>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	container: {
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fdfdfd",
		width: 300,
		height: 300,
		elevation: 5,
		borderRadius: 5,
		paddingTop: 10,
		paddingBottom: 10,
	},
	input: {
		fontSize: 16,
		borderWidth: 1,
		width: 200,
		marginBottom: 10,
		borderRightColor: "transparent",
		borderLeftColor: "transparent",
		borderTopColor: "transparent",
	},
});
