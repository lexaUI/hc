import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { AppNavigation } from "./src/navigation/AppNavigation";

async function loadApplication() {
	await Font.loadAsync({
		"roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
		"roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
		"roboto-thin": require("./assets/fonts/Roboto-Thin.ttf"),
		"roboto-light": require("./assets/fonts/Roboto-Thin.ttf"),
	});
}

export default function App() {
	const [isReady, setIsReady] = useState(false);

	if (!isReady) {
		return (
			<AppLoading
				startAsync={loadApplication}
				onError={(err) => console.log(err)}
				onFinish={() => setIsReady(true)}
			/>
		);
	}

	return <AppNavigation />;
}
