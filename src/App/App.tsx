import React, { useEffect, useState } from "react";
import "./App.css";
import FlexBoxThumbnail from "./components/layout/FlexBoxThumbnail/FlexBoxThumbnail";
import FlexWLayout from "./components/layout/FlexWLayout/FlexWLayout";
import MemeForm, { MemeFormWithStore } from "./components/MemeForm/MemeForm";
import MemeSvgViewer, { MemeSvgViewerWithStore } from "./components/ui/MemeSvgViewer/MemeSvgViewer";
import { I_meme, I_memeImage } from "./interfaces/I_meme";
import {store} from './store/store';

export const initialMeme: I_meme = {
  title: "1er meme",
  text: "Mon equipe de dev js",
  x: 450,
  y: 150,
  fontSize: 100,
  fontWeight: "900",
  italic: true,
  underline: true,
  imageId: 0,
  color: "#0000FF",
};

interface I_AppProps {}
interface I_AppState {}
export default class App extends React.Component<I_AppProps, I_AppState> {
  render() {
    console.log("rendu de app");
    return (
      <>
      <div className="App">
        {JSON.stringify(this.state)}
        {/* <FlexBoxThumbnail>
          {this.state.memes.map((e, pos) => (
            <MemeSvgViewer
              key={"meme-" + pos}
              meme={e}
              image={this.state.images.find((ee) => ee.id === e.imageId)}
            />
          ))}
        </FlexBoxThumbnail> */}
        <FlexWLayout>
          <MemeSvgViewerWithStore/>
          <MemeFormWithStore/>
        </FlexWLayout>
      </div>
      </>
    );
  }
}

function AppF() {
  //etat propageable et moddifiable pour le meme en cours
  //etat initial de cette etat -> initialMeme
  const [meme, setmeme] = useState(initialMeme);
  const initialImages: Array<I_memeImage> = [];
  const [images, setimages] = useState(initialImages);
  //component did mount uniquement car dependances vide
  useEffect(() => {
    fetch("http://localhost:7956/images")
      .then((f) => f.json())
      .then((o: Array<I_memeImage>) => {
        setimages(o);
      });
  }, []);
  return (
    <>
      <div className="App">
        {JSON.stringify(meme)}
        <FlexWLayout>
          <MemeSvgViewer
            meme={meme}
            image={images.find((img) => {
              return img.id === meme.imageId;
            })}
          />
          <MemeForm
            meme={meme}
            images={images}
            onMemeChange={(meme: I_meme) => {
              setmeme(meme);
            }}
          />
        </FlexWLayout>
      </div>
    </>
  );
}

export const AppByFunc = AppF;
