import React from "react";
import { RouteProp, StackActions } from "@react-navigation/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { AuthContext } from "./AuthContextProvider";
import { UnauthorisedStackParamList } from "./NavigationParamList";

type LoginScreenProps = {
  route: RouteProp<UnauthorisedStackParamList, "login">;
  navigation: FrameNavigationProp<UnauthorisedStackParamList, "login">;
};

export function Login({ navigation }: LoginScreenProps) {
  const { signIn } = React.useContext(AuthContext);

  function onSwitchButtonTap(): void {
    // __unstable__forwardNavOpts.push({
    //     animated: false,
    // });
    navigation.dispatch(StackActions.replace("registration", {}));
  }

  function onLogInButtonTap(): void {
    // __unstable__forwardNavOpts.push({
    //     /**
    //      * What happens from here is that the whole Unauthorised stack is popped off, one screen at a time,
    //      * until we reach the bottom of the stack. However, the animation only represents one screen getting
    //      * popped off, so although there IS an animation to see, it's very confusing to look at.
    //      */
    //     animated: false,
    // });
    signIn({ username: "dummy", password: "whatever" });
  }

  return (
    <flexboxLayout
      style={{
        flexGrow: 1,
        width: "100%",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "yellow",
      }}
    >
      <label fontSize={24} fontWeight={"bold"} text={"Login Screen"} />
      <button
        onTap={onSwitchButtonTap}
        fontSize={24}
        text={"Switch to registration screen"}
      />
      <button
        onTap={onLogInButtonTap}
        fontSize={24}
        text={"Log in (go to Home screen)"}
      />
    </flexboxLayout>
  );
}
