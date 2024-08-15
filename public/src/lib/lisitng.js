import qs from "querystring";
import { createUrl, post } from "./http";
import axios from "axios";

export const createListingAPI = async (listingData) => {
  const result = await post(createUrl("/api/listings"), {
    ...listingData,
  }).catch(() => null);
  console.log({ result });
  if (!result.data) {
    return alert("Could not create listing.");
  }

  return result;
};

export const getAllListingsAPI = async () => {
  const result = await axios.get(createUrl(`/api/listings`));

  if (!result) {
    alert("Could not get all listings.");
    return [];
  }
  return result.data;
};
