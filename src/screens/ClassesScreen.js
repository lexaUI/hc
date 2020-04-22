import React, { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet, Button, Alert } from "react-native";
import { BoldText } from "../components/UI/BoldText";
import { LightText } from "../components/UI/LightText";
import { ClassItem } from "../components/ClassItem";
import { DayPicker } from "../components/DayPicker";

export const ClassesScreen = () => {
	// const [Monday, setMonday] = useState([
	// 	{ time: "7:30 AM", title: "Programming", name: "Ms. Andrews" },
	// ]);
	// const [Tuesday, setTuesday] = useState([
	// 	{ time: "9:45 AM", title: "Ballet", name: "Dr. Chase" },
	// ]);
	const [Wednesday, setWednesday] = useState([
		{ time: "9:45 AM", title: "Training", name: "Dr. Chase" },
		{ time: "11:20 AM", title: "Advanced Yoga", name: "Mr. Sawyer" },
	]);
	// const [Thursday, setThursday] = useState([
	// 	{ time: "9:45 AM", title: "Ballet", name: "Dr. Chase" },
	// 	{ time: "7:30 AM", title: "Programming", name: "Ms. Andrews" },
	// 	{ time: "11:20 AM", title: "Advanced Yoga", name: "Mr. Sawyer" },
	// ]);
	// const [Friday, setFriday] = useState([
	// 	{ time: "7:30 AM", title: "Programming", name: "Ms. Andrews" },
	// 	{ time: "11:20 AM", title: "Advanced Yoga", name: "Mr. Sawyer" },
	// ]);
	// const [Saturday, setSaturday] = useState([]);
	// const [Sunday, setSunday] = useState([
	// 	{ time: "7:30 AM", title: "Programming", name: "Ms. Andrews" },
	// ]);

	// const days = [Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday];
	const days = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];
	const [curDayName, setCurDayName] = useState(days[new Date().getDay() - 1]);

	const [classes, setClasses] = useState([]);

	const addNewClass = (time, title, name) => {
		setClasses((prev) => {
			return [
				...prev,
				{
					id: Date.now().toString(),
					time,
					title,
					name,
				},
			];
		});
	};

	return (
		<View style={{ flex: 1 }}>
			<ScrollView style={styles.wrapper}>
				<View style={styles.header}>
					<BoldText style={styles.headerTitle}>Classes</BoldText>

					<LightText style={styles.headerInfo}>Today is {curDayName}</LightText>
					<LightText style={styles.headerInfo}>
						You have {classes.length}{" "}
						{classes.length === 1 ? "class" : "classes"} today{" "}
						{/* <DayPicker onChange={(day) => handleChange(day)} /> */}
					</LightText>
				</View>

				<View style={styles.classes}>
					{classes.map((item, index) => {
						return (
							<ClassItem
								key={index}
								time={item.time}
								title={item.title}
								name={item.name}
								active={index + 1}
								total={classes.length}
							/>
						);
					})}
					<ClassItem mode="add" onAdd={addNewClass} />
				</View>
			</ScrollView>
		</View>
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
	headerInfo: {
		fontSize: 18,
		paddingTop: 10,
	},
	classes: {
		justifyContent: "center",
		alignItems: "center",
	},
	roundButton: {
		position: "absolute",
		bottom: 10,
		right: 10,
	},
});
