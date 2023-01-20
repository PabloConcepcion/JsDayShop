
export default interface IProduct {
  Id: string;
  Name: string;
  Description: string;
  Images: string;
  Price: string;
  Category: string;
}

export const GetEmptyProduct = (): IProduct => {
  return {
    Id: "",
    Name: "",
    Description: "",
    Images: "",
    Price: "",
    Category: "", //TODO: Change to enum with categories
  };
};