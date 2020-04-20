import React, { useState } from "react";
import { View, StyleSheet, Picker } from "react-native";

export const DayPicker = ({ dayArr }) => {
	const [selectedValue, setSelectedValue] = useState("Today");

	const days = [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];
	const curDay = days[new Date().getDay() - 1];

	return (
		<View style={styles.container}>
			<Picker
				selectedValue={selectedValue}
				onValueChange={(itemValue) => setSelectedValue(itemValue)}
				mode="dropdown"
				style={{
					height: 30,
					width: 130,
					marginTop: 10,
				}}
			>
				{days.map((day, index) => {
					return (
						<Picker.Item
							key={index}
							label={curDay === day ? "Today" : day}
							value={curDay === day ? "Today" : day}
							name={day}
						/>
					);
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
