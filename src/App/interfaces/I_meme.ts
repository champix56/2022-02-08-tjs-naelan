export interface I_meme{
    id?:number;
    title:string;
    text:string;
    x:number;
    y:number;
    color:string;
    fontSize:number;
    fontWeight:string;
    underline:boolean;
    italic:boolean;
    imageId:number;
}
export interface I_memeImage{
    id:number;
    title:string;
    href:string;
    w:number;
    h:number;
}