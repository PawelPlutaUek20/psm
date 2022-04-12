import * as React from "react";
import { BaseNavigationContainer } from "@react-navigation/core";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { AuthorisedStackParamList } from "./NavigationParamList";
import { HomeScreen } from "./HomeScreen";
import { DetailsScreen } from "./DetailsScreen";
import { FlickService } from "../services";
import { AuthContext } from "./AuthContextProvider";
import { Login } from "./Login";
import { Registration } from "./Registration";

const StackNavigator = stackNavigatorFactory();

export const mainStackNavigator = () => {
  const { state } = React.useContext(AuthContext);
  const flickTitle = (flickId) => FlickService.getFlickById(flickId).title;
  return (
    <BaseNavigationContainer>
      <StackNavigator.Navigator
        initialRouteName="login"
        screenOptions={{
          headerShown: false,
        }}
      >
        {state.userToken == null ? (
          <>
            <StackNavigator.Screen
              options={{ headerShown: true }}
              name="login"
              component={Login}
            />
            <StackNavigator.Screen
              options={{ headerShown: true }}
              name="registration"
              component={Registration}
            />
          </>
        ) : (
          <>
            <StackNavigator.Screen
              name="Home"
              options={{
                headerTitle: "NativeFlix",
              }}
              component={HomeScreen}
            />
            <StackNavigator.Screen
              name="Details"
              options={({ route }) => ({
                title: flickTitle(
                  (route.params as AuthorisedStackParamList["Details"]).flickId
                ),
              })}
              component={DetailsScreen}
            />
          </>
        )}
      </StackNavigator.Navigator>
    </BaseNavigationContainer>
  );
};
