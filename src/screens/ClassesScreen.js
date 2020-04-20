import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { BoldText } from "../components/UI/BoldText";
import { LightText } from "../components/UI/LightText";
import { ClassItem } from "../components/ClassItem";
import { RoundButton } from "../components/UI/RoundButton";
import { AddClassesModal } from "../components/AddClassesModal";
import { DayPicker } from "../components/DayPicker";

export const ClassesScreen = () => {
	const [classes, setClasses] = useState({
		Monday: [
			{ time: "7:30 AM", title: "Programming", name: "Ms. Andrews" },
			{ time: "9:45 AM", title: "Ballet", name: "Dr. Chase" },
			{ time: "11:20 AM", title: "Advanced Yoga", name: "Mr. Sawyer" },
		],
		Tuesday: [
			{ time: "7:30 AM", title: "Programming", name: "Ms. Andrews" },
			{ time: "9:45 AM", title: "Ballet", name: "Dr. Chase" },
			{ time: "11:20 AM", title: "Advanced Yoga", name: "Mr. Sawyer" },
		],
		Wednesday: [
			{ time: "7:30 AM", title: "Programming", name: "Ms. Andrews" },
			{ time: "9:45 AM", title: "Ballet", name: "Dr. Chase" },
			{ time: "11:20 AM", title: "Advanced Yoga", name: "Mr. Sawyer" },
		],
		Thursday: [
			{ time: "7:30 AM", title: "Programming", name: "Ms. Andrews" },
			{ time: "9:45 AM", title: "Ballet", name: "Dr. Chase" },
		],
		Friday: [
			{ time: "7:30 AM", title: "Programming", name: "Ms. Andrews" },
			{ time: "9:45 AM", title: "Ballet", name: "Dr. Chase" },
			{ time: "11:20 AM", title: "Advanced Yoga", name: "Mr. Sawyer" },
		],
		Saturday: [
			{ time: "7:30 AM", title: "Programming", name: "Ms. Andrews" },
			{ time: "9:45 AM", title: "Ballet", name: "Dr. Chase" },
			{ time: "11:20 AM", title: "Advanced Yoga", name: "Mr. Sawyer" },
		],
		Sunday: [
			{ time: "7:30 AM", title: "Programming", name: "Ms. Andrews" },
			{ time: "9:45 AM", title: "Ballet", name: "Dr. Chase" },
			{ time: "11:20 AM", title: "Advanced Yoga", name: "Mr. Sawyer" },
		],
	});
	const [modalVisible, setModalVisbile] = useState(false);

	const addNewClass = (info) => {
		setClasses([...classes, info]);
		handleDayChange();
		setModalVisbile(false);
	};

	const handleDayChange = () => {
		const content = classes.Thursday.map((item, index) => {
			return (
				<ClassItem
					key={index}
					time={item.time}
					title={item.title}
					name={item.name}
					active={index + 1}
					total={classes.Thursday.length}
				/>
			);
		});
		return content;
	};

	return (
		<View style={{ flex: 1 }}>
			<ScrollView style={styles.wrapper}>
				<View style={styles.header}>
					<BoldText style={styles.headerTitle}>Classes</BoldText>
					<LightText style={styles.counter}>
						You have {classes.Thursday.length}{" "}
						{classes.Thursday.length === 1 ? "class" : "classes"} on{" "}
						<DayPicker />
					</LightText>
				</View>
				<View style={styles.classes}>{handleDayChange()}</View>
				<AddClassesModal visible={modalVisible} addNewClass={addNewClass} />
			</ScrollView>
			<RoundButton
				onPress={() => setModalVisbile(true)}
				style={styles.roundButton}
			/>
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
	counter: {
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
