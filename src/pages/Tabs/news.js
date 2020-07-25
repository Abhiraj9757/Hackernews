import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import SmallHeader from "../../components/header/smallerheader";
import LargeHeader from "../../components/header/largerheader";
import LinkList from "../../components/Link/LinkList";

const News = (props) => {
  return (
    <IonPage>
      <SmallHeader title="Newsy" />
      <IonContent fullscreen>
        <LargeHeader title="Newsy" />
        <LinkList location={props.location} />
      </IonContent>
    </IonPage>
  );
};

export default News;
