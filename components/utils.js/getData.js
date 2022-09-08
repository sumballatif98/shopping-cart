import axios from "axios";
export async function getData() {
  try {
    const data = await axios.get("https://dummyjson.com/products");
    return data;
  } catch (e) {
    throw new Error("error in fetching the data", e);
  }
}
