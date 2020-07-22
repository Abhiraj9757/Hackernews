import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import SmallHeader from '../../components/header/smallerheader';
import LargeHeader from '../../components/header/largerheader';

const News = () => {
  return (
    <IonPage>
      <SmallHeader title="Submit" />
      <IonContent fullscreen>
        <LargeHeader title="Submit" />
      </IonContent>
    </IonPage>
  );
};

export default News;
