import { RouteProp, StackActions } from "@react-navigation/core";
import React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { AuthContext } from "./AuthContextProvider";
import { UnauthorisedStackParamList } from "./NavigationParamList";

type RegistrationScreenProps = {
  route: RouteProp<UnauthorisedStackParamList, "registration">;
  navigation: FrameNavigationProp<UnauthorisedStackParamList, "registration">;
};

export function Registration({ navigation }: RegistrationScreenProps) {
  const { signIn } = React.useContext(AuthContext);

  function onSwitchButtonTap(): void {
    // __unstable__forwardNavOpts.push({
    //     animated: false,
    // });
    navigation.dispatch(StackActions.replace("login", {}));
  }

  function onRegisterButtonTap(): void {
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
        backgroundColor: "green",
      }}
    >
      <label fontSize={24} fontWeight={"bold"} text={"Registration Screen"} />
      <button
        onTap={onSwitchButtonTap}
        fontSize={24}
        text={"Switch to login screen"}
      />
      <button
        onTap={onRegisterButtonTap}
        fontSize={24}
        text={"Register (go to Home screen)"}
      />
    </flexboxLayout>
  );
}
