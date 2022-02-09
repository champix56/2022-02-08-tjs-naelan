import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
import MemeSvgViewer from "./components/ui/MemeSvgViewer/MemeSvgViewer";
import { I_meme, I_memeImage } from "./interfaces/I_meme";
export const meme: I_meme = {
  title: "1er meme",
  text: "Mon meme",
  x: 50,
  y: 50,
  fontSize: 30,
  fontWeight: "900",
  italic: true,
  underline: true,
  imageId: 0,
  color: "blue",
};
export const images: Array<I_memeImage> = [
  { id: 0, title: "futurama", h: 1315, w: 2160, href: '/img/futurama.png' },
];
function App() {
  return (
    <div className="App">
      <MemeSvgViewer meme={meme} image={images[0]} />
    </div>
  );
}

export default App;
