import React from "react";
import { View, StyleSheet } from "react-native";
import { THEME } from "../../constants/theme";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { LoginButton } from "../components/UI/LoginButton";
import { Header } from "../components/UI/Header";
import { SocialButton } from "../components/UI/SocialButton";

export const HelloScreen = ({ navigation }) => {
	const goToSignUp = () => {
		navigation.navigate("SignUp");
	};
	const goToLogIn = () => {
		navigation.navigate("LogIn");
	};
	return (
		<View style={styles.login}>
			<Header>Are you new here?</Header>
			<LoginButton onPress={goToSignUp}>Sing Up</LoginButton>
			<LoginButton onPress={goToLogIn}>Log In</LoginButton>
			<View style={styles.socialButtons}>
				<SocialButton>
					<Entypo name="facebook" size={25} />
				</SocialButton>
				<SocialButton>
					<AntDesign name="google" size={25} />
				</SocialButton>
				<SocialButton>
					<Entypo name="vk" size={25} />
				</SocialButton>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	login: {
		flex: 1,
		backgroundColor: THEME.LOGIN_BACKGROUND,
		justifyContent: "center",
		alignItems: "center",
	},
	socialButtons: {
		flexDirection: "row",
		marginLeft: 15,
	},
});
