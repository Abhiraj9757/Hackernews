import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import SmallHeader from '../../components/header/smallerheader';
import LargeHeader from '../../components/header/largerheader';

const News = () => {
  return (
    <IonPage>
      <SmallHeader title="Trending" />
      <IonContent fullscreen>
        <LargeHeader title="Trending" />
      </IonContent>
    </IonPage>
  );
};

export default News;
