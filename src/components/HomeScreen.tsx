import * as React from "react";
import { ListView } from "react-nativescript";
import { RouteProp } from "@react-navigation/core";
import { ItemEventData } from "@nativescript/core";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { AuthorisedStackParamList } from "./NavigationParamList";
import { FlickService } from "../services/flick.service";
import { FlickModel } from "../models";

type HomeScreenProps = {
  route: RouteProp<AuthorisedStackParamList, "Home">;
  navigation: FrameNavigationProp<AuthorisedStackParamList, "Home">;
};

export function HomeScreen({ navigation }: HomeScreenProps) {
  const flicks = FlickService.getFlicks();

  const cellFactory = (flick: FlickModel) => {
    return (
      <stackLayout>
        <gridLayout
          height="280"
          borderRadius="10"
          className="bg-secondary"
          rows="*, auto, auto"
          columns="*"
          margin="5 10"
          padding="0"
        >
          <image
            row="0"
            width="100%"
            margin="0"
            stretch="aspectFill"
            src={flick.image}
          />
          <label
            row="1"
            margin="10 10 0 10"
            fontWeight="700"
            className="text-primary"
            fontSize="18"
            text={flick.title}
          />
          <label
            row="2"
            margin="0 10 10 10"
            className="text-secondary"
            fontSize="14"
            textWrap="true"
            text={flick.description}
          />
        </gridLayout>
      </stackLayout>
    );
  };

  const onItemTap = (args: ItemEventData) => {
    const index = args.index;
    const flick = flicks[index];
    navigation.navigate("Details", {
      flickId: flick.id,
    });
  };

  return (
    <stackLayout height="100%">
      <ListView
        items={flicks}
        cellFactory={cellFactory}
        onItemTap={onItemTap}
        separatorColor="transparent"
        height="100%"
      />
    </stackLayout>
  );
}
