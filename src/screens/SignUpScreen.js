import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { LoginInput } from "../components/LoginInput";
import { LoginButton } from "../components/UI/LoginButton";
import { Header } from "../components/UI/Header";

export const SignUpScreen = () => {
	const [fields, setFields] = useState([
		"Username",
		"First Name",
		"Last Name",
		"Phone Number",
		"Password",
		"Repeat Password",
	]);

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Header style={styles.header}>Fill in forms to Sign Up</Header>
			{fields.map((field, index) => {
				return <LoginInput title={field} key={index} />;
			})}
			<LoginButton>Sign Up</LoginButton>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	header: {
		marginBottom: 30,
	},
});
