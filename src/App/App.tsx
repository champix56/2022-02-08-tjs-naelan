import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import FlexWLayout from "./components/layout/FlexWLayout/FlexWLayout";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeSvgViewer from "./components/ui/MemeSvgViewer/MemeSvgViewer";
import { I_meme, I_memeImage } from "./interfaces/I_meme";
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
export const images: Array<I_memeImage> = [
  { id: 0, title: "futurama", h: 1315, w: 2160, href: '/img/futurama.png' },
  { id: 1, title: "futurama", h: 1080, w: 1920, href: '/img/futurama2.png' },
];
function App() {
  //etat propageable et moddifiable pour le meme en cours
  //etat initial de cette etat -> initialMeme
  const [meme, setmeme] = useState(initialMeme);
  return (
    <div className="App">
      <FlexWLayout>
        <MemeSvgViewer meme={meme} image={images[1]} />
        <MemeForm meme={meme} images={images} onMemeChange={(meme)=>{
          setmeme(meme);
        }}/>
      </FlexWLayout>
    </div>
  );
}

export default App;
