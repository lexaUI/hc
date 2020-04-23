import React, { useState, useEffect } from "react";
import { ScrollView, View, Button, Alert } from "react-native";
import { BoldText } from "../components/UI/BoldText";
import { LightText } from "../components/UI/LightText";
import { ClassItem } from "../components/ClassItem";
import { DayPicker } from "../components/DayPicker";
import EStyleSheet from "react-native-extended-stylesheet";

export const ClassesScreen = () => {
	const [daysClasses, setdaysClasses] = useState([
		[
			{
				id: "1",
				time: "6:15 AM",
				title: "Gaming",
				name: "Ms Kalonice Connally",
			},
			{
				id: "2",
				time: "10:00 PM",
				title: "Ballet",
				name: "Mr Acacio Stringfellow",
			},
		],
		[{ id: "1", time: "7:30 AM", title: "Programming", name: "Ms. Andrews" }],
		[
			{ id: "1", time: "8:00 AM", title: "Coding", name: "Ms Anne Inman" },
			{
				id: "2",
				time: "9:45 AM",
				title: "Higher Mathematics",
				name: "Dr. Chase",
			},
			{ id: "3", time: "11:20 AM", title: "Advanced Yoga", name: "Mr. Sawyer" },
		],
		[
			{ id: "1", time: "9:45 AM", title: "Ballet", name: "Dr. Chase" },
			{ id: "2", time: "11:20 AM", title: "Advanced Yoga", name: "Mr. Sawyer" },
		],
		[
			{ id: "1", time: "5:00 AM", title: "Economics", name: "Mr. Richards" },
			{ id: "2", time: "7:30 AM", title: "Programming", name: "Ms. Andrews" },
			{ id: "3", time: "9:45 AM", title: "Ballet", name: "Dr. Chase" },
		],
		[
			{
				id: "1",
				time: "7:30 AM",
				title: "Programming",
				name: "Ms Chana Virden",
			},
			{ id: "2", time: "9:45 AM", title: "Ballet", name: "Dr. Chase" },
			{ id: "3", time: "11:20 AM", title: "Advanced Yoga", name: "Mr. Sawyer" },
		],
		[
			{ id: "1", time: "7:30 AM", title: "Programming", name: "Ms. Andrews" },
			{ id: "2", time: "9:45 AM", title: "Ballet", name: "Dr. Chase" },
			{ id: "3", time: "11:20 AM", title: "Advanced Yoga", name: "Mr. Sawyer" },
		],
	]);

	const days = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];
	const [curDay, setCurDay] = useState(new Date().getDay() - 1);
	const [curDayName] = useState(days[new Date().getDay() - 1]);

	const [classes, setClasses] = useState(daysClasses[curDay]);

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

	const changeDay = (day) => {
		setCurDay(day);
		setClasses(daysClasses[day]);
	};

	return (
		<View style={{ flex: 1 }}>
			<ScrollView style={styles.wrapper}>
				<View style={styles.header}>
					<BoldText style={styles.headerTitle}>Classes</BoldText>

					<LightText style={styles.headerInfo}>Today is {curDayName}</LightText>
					<LightText style={styles.headerInfo}>
						You have {classes.length}{" "}
						{classes.length === 1 ? "class" : "classes"} on{" "}
						<DayPicker onChange={changeDay} />
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

const styles = EStyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: "#f9f9f7",
	},
	header: {
		padding: 20,
	},
	headerTitle: {
		fontSize: "2.6rem",
		paddingTop: 20,
	},
	headerInfo: {
		fontSize: "1.2rem",
		paddingTop: 5,
	},
	classes: {
		justifyContent: "center",
		alignItems: "center",
	},
});
