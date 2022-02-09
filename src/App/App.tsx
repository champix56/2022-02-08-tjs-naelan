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
  { id: 0, title: "futurama all", h: 1315, w: 2160, href: '/img/futurama.png' },
  { id: 1, title: "futurama solo", h: 1080, w: 1920, href: '/img/futurama2.png' },
 ];
interface I_AppProps{}
interface I_AppState{
  meme:I_meme;
  images:Array<I_memeImage>;
}
export default class App extends React.Component<I_AppProps,I_AppState>{
  constructor(props:I_AppProps){
    super(props);
    //init de la seule vameur etat possible
    this.state={meme:initialMeme,images:images}
  }
  //fonction obligatoir de rendu du cmp
  render(){
    return  <div className="App">
           {JSON.stringify(this.state.meme)}
           <FlexWLayout>
             <MemeSvgViewer meme={this.state.meme} image={this.state.images.find((img)=>{return img.id===this.state.meme.imageId})} />
             <MemeForm meme={this.state.meme} images={images} onMemeChange={(meme:I_meme)=>{
               //modifficateur de contenu d'etat
               this.setState({meme});
             }}/>
           </FlexWLayout>
         </div>
  }
} 

 // function App() {
//   //etat propageable et moddifiable pour le meme en cours
//   //etat initial de cette etat -> initialMeme
//   const [meme, setmeme] = useState(initialMeme);
//   return (
//     <div className="App">
//       {JSON.stringify(meme)}
//       <FlexWLayout>
//         <MemeSvgViewer meme={meme} image={images.find((img)=>{return img.id===meme.imageId})} />
//         <MemeForm meme={meme} images={images} onMemeChange={(meme:I_meme)=>{
//           setmeme(meme);
//         }}/>
//       </FlexWLayout>
//     </div>
//   );
// }

// export default App;
