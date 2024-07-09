import {RatingRep} from "./rating-rep";

export interface ProductRep {

  id?: string,
  title?: string,
  description?: string,
  category?: string,
  image?: string,
  price?: number,
  ranting?: RatingRep
}
