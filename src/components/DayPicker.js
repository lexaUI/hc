import React, { useState } from "react";
import { View, StyleSheet, Picker } from "react-native";

export const DayPicker = ({ onChange }) => {
	const days = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];
	const curDay = new Date().getDay() - 1;
	const [selectedValue, setSelectedValue] = useState(curDay);

	const changeHandler = (itemValue) => {
		onChange(itemValue);
		setSelectedValue(itemValue);
	};

	return (
		<View style={styles.container}>
			<Picker
				selectedValue={selectedValue}
				onValueChange={changeHandler}
				mode="dropdown"
				style={{
					height: 30,
					width: 130,
					marginTop: 10,
				}}
			>
				{days.map((day, index) => {
					return <Picker.Item key={index} label={day} value={index} />;
				})}
			</Picker>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 130,
		height: 32,
	},
});
