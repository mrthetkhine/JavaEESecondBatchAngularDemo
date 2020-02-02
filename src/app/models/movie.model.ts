export class Movie {
  id: number;
  name:string;
  year:number;
  liked?:boolean;

  constructor(name:string, year:number)
  {
    this.name = name;
    this.year  = year;
  }
}
