import React, { useEffect, useState } from "react";
import "./App.css";
import FlexBoxThumbnail from "./components/layout/FlexBoxThumbnail/FlexBoxThumbnail";
import FlexWLayout from "./components/layout/FlexWLayout/FlexWLayout";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeSvgViewer from "./components/ui/MemeSvgViewer/MemeSvgViewer";
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
interface I_AppState {
  meme: I_meme;
  images: Array<I_memeImage>;
  memes: Array<I_meme>;
  forms:Array<any>;
}
export default class App extends React.Component<I_AppProps, I_AppState> {
  constructor(props: I_AppProps) {
    super(props);
    //init de la seule vaeur etat possible
    this.state = { meme: initialMeme, images: [], memes: [],forms:[] };
  }
  componentDidMount() {
    /*const prImg = fetch("http://localhost:7956/images").then((f) => f.json());

    const prMemes = fetch("http://localhost:7956/memes").then((f) => f.json());
    
    const prForms = fetch("http://localhost:7956/forms").then((f) => f.json());

    Promise.all([prImg, prMemes,prForms]).then((tableauxDeResponses) => {
      this.setState({
        images: tableauxDeResponses[0],
        memes: tableauxDeResponses[1],
        //gestion dyn du form supprimé pour l'exemple
        forms: tableauxDeResponses[2],
      });
    });
*/
this.setState({...store.getState().ressources});
store.subscribe(()=>{
  this.setState({...store.getState().ressources})
})
   // store.dispatch({type:'ADD_MEME',value:{id:3,loaded:true}});
    
    
  }
  componentDidUpdate(oldValue: I_AppState) {}
  componentWillUnmount() {}
  //fonction obligatoire de rendu du cmp
  render() {
    console.log("rendu de app");
    return (
      <>
      <div className="App">
        {JSON.stringify(this.state)}
        <FlexBoxThumbnail>
          {this.state.memes.map((e, pos) => (
            <MemeSvgViewer
              key={"meme-" + pos}
              meme={e}
              image={this.state.images.find((ee) => ee.id === e.imageId)}
            />
          ))}
        </FlexBoxThumbnail>
        <FlexWLayout>
          <MemeSvgViewer
            meme={this.state.meme}
            image={this.state.images.find((img) => {
              return img.id === this.state.meme.imageId;
            })}
          />
          <MemeForm
            meme={this.state.meme}
            images={this.state.images}
            onMemeChange={(meme: I_meme) => {
              //modifficateur de contenu d'etat
              this.setState({ meme });
            }}
          />
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
