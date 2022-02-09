import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
import MemeSvgViewer from "./components/ui/MemeSvgViewer/MemeSvgViewer";
import { I_meme, I_memeImage } from "./interfaces/I_meme";
export const meme: I_meme = {
  title: "1er meme",
  text: "Mon equipe de dev js",
  x: 450,
  y: 150,
  fontSize: 100,
  fontWeight: "900",
  italic: true,
  underline: true,
  imageId: 0,
  color: "white",
};
export const images: Array<I_memeImage> = [
  { id: 0, title: "futurama", h: 1315, w: 2160, href: '/img/futurama.png' },
  { id: 1, title: "futurama", h: 1080, w: 1920, href: '/img/futurama2.png' },
];
function App() {
  return (
    <div className="App">
      <MemeSvgViewer meme={meme} image={images[1]} />
    </div>
  );
}

export default App;
