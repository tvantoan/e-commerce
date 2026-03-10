import Branch from "./Branch";
import Feedback from "./Comment";
import Comment from "./Comment";
type DiscountAmount = {
  type: "money";
  amount: number;
};

type GiftProduct = {
  type: "gift";
  productName: string;
  note?: string;
};

type SpecialOffer = {
  title: string;
  items: (DiscountAmount | GiftProduct)[];
};

// type Item = {
//   id: number;
//   brand: string;
//   model: string;
//   description: string; // HTML section
//   versions: { basePrice: number; discount: number }[];
//   variants: { color: string; basePrice: number; discount: number }[];
//   discount: number;
//   image: string[];
//   branch: Branch;
//   productGuarantee: number[];
//   specifications: { name: string; value: string }[];
//   feedback: Feedback[];
//   specialOffer?: SpecialOffer;
// };

type Item = {
  id: number;
  url: string;
  name: string;
  images: string[];
  salePrice: string;
  basePrice: string;
  versions: string[];
  colors: { color: string; price: string }[];
  description: string;
  specs: { name: string; value: string }[];
  comments: Comment[];
};

export default Item;
