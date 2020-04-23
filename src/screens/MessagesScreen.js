import React, { useState } from "react";
import {
	Text,
	View,
	ScrollView,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import { ListItem, SearchBar, Icon } from "react-native-elements";
import { Messages } from "../Messages";

export const MessagesScreen = () => {
	const [search, setSearch] = useState("");

	updateSearch = (search) => {
		setSearch({ search });
	};

	return (
		<View name="view">
			<ScrollView
				name="scroll"
				marginTop="0%"
				height="100%"
				automaticallyAdjustContentInsets={false}
			>
				<Text style={styles.convo}>Conversations</Text>
				<SearchBar
					name="search"
					lightTheme
					round
					placeholder="Search friends"
					onChangeText={this.updateSearch}
					value={search}
				/>
				{Messages.map((user, i) => (
					<ListItem
						height={Dimensions.get("screen").height * 0.13}
						key={i}
						paddingLeft={20}
						leftAvatar={{ source: user.pic, size: "large" }}
						title={user.title}
						titleStyle={styles.title}
						subtitle={user.message}
						subtitleStyle={styles.subtitle}
						chevron
					/>
				))}
			</ScrollView>
			<TouchableOpacity style={styles.fab}>
				<Icon
					reverse
					name="create"
					onPress={() => console.log("hello")}
					color="#ff8282"
					size={25}
				/>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	convo: {
		paddingLeft: 35,
		fontWeight: "bold",
		fontSize: 32,
		color: "#ff8282",
		marginTop: 50,
		marginBottom: 25,
	},
	fab: {
		height: 50,
		width: 50,
		borderRadius: 200,
		position: "absolute",
		bottom: 20,
		right: 20,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#ff8282",
	},
	view: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	search: {
		width: 30,
		marginBottom: 40,
	},
	title: {
		paddingLeft: 10,
		fontSize: 24,
		color: "#3F3F3F",
	},
	subtitle: {
		paddingLeft: 10,
		paddingTop: 3,
		color: "#A5A5A5",
	},
	create: {
		position: "absolute",
	},
});
