import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { BoldText } from "./UI/BoldText";
import { RegularText } from "./UI/RegularText";
import { LightText } from "./UI/LightText";
import { TouchableOpacity } from "react-native-gesture-handler";

export const ClassItem = ({
	time,
	title,
	name,
	active,
	total,
	mode,
	onAdd,
}) => {
	const [classTime, setClassTime] = useState("1:30 PM");
	const [classTitle, setClassTitle] = useState("Advanced React Native");
	const [teacherName, setTeacherName] = useState("Alexa Bachurski");
	const [check, setCheck] = useState(false);

	const handleClick = () => {
		if (classTime === "" || classTitle === "") {
			setCheck(true);
			return;
		}
		onAdd(classTime, classTitle, teacherName);
		setClassTime("");
		setClassTitle("");
		setTeacherName("");
		setCheck(false);
	};

	return (
		<TouchableOpacity
			onPress={mode === "add" ? () => handleClick() : null}
			activeOpacity={0.8}
			style={styles.touchable}
		>
			{mode === "add" ? (
				<View style={styles.card}>
					<AntDesign style={styles.icon} name="addfile" />
					<View style={styles.container}>
						<TextInput
							autoCapitalize="characters"
							autoCorrect={true}
							style={{ ...styles.input }}
							returnKeyType="go"
							maxLength={64}
							placeholder={check ? "Fill in the field" : "Time of the class"}
							placeholderTextColor={check ? "#e74c3c" : "gray"}
							value={classTime}
							onChangeText={(value) => setClassTime(value)}
						/>
						<TextInput
							autoCorrect={true}
							style={styles.input}
							maxLength={30}
							returnKeyType="go"
							placeholder={check ? "Fill in the field" : "Name of the class"}
							placeholderTextColor={check ? "#e74c3c" : "gray"}
							value={classTitle}
							onChangeText={(value) => setClassTitle(value)}
						/>
						<TextInput
							autoCapitalize="words"
							autoCorrect={true}
							style={styles.input}
							maxLength={30}
							placeholder="Teacher's name"
							placeholderTextColor="gray"
							value={teacherName}
							onChangeText={(value) => setTeacherName(value)}
						/>
						<LightText>Click on the card to add class</LightText>
					</View>
				</View>
			) : (
				<View style={styles.card}>
					<MaterialIcons style={styles.icon} name="class" />
					<View>
						<BoldText style={styles.time}>{time}</BoldText>
						<RegularText style={styles.title}>{title}</RegularText>
						<RegularText style={styles.name}>{name}</RegularText>
						<LightText style={styles.number}>
							{active} of {total}
						</LightText>
					</View>
				</View>
			)}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		flexDirection: "row",
		alignItems: "center",
		width: 315,
		height: 140,
		backgroundColor: "#fdfdfd",
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
	touchable: {
		shadowColor: "rgba(0,0,0, .4)", // IOS
		shadowOffset: { height: 1, width: 1 }, // IOS
		shadowOpacity: 1, // IOS
		shadowRadius: 1, //IOS
		backgroundColor: "#fff",
		elevation: 2, // Android
		marginBottom: 20,
		borderRadius: 5,
	},
	input: {
		fontSize: 16,
		borderWidth: 1,
		width: 200,
		marginBottom: 10,
		borderRightColor: "transparent",
		borderLeftColor: "transparent",
		borderTopColor: "transparent",
		borderBottomColor: "gray",
	},
	container: {
		marginTop: 10,
	},
});
