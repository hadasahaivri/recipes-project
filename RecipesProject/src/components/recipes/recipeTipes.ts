export type RecipeDetailsProps={
  id:number;
}
export type Recipe ={
  image: string | undefined;
  id:number,
  title:string,
  products:string,
  description:string,
  authorId:number
 }