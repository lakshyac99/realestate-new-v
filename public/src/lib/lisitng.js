import qs from "qs";
import { createUrl, post } from "./http";
import axios from "axios";

export const createListingAPI = async (listingData) => {
  const result = (
    await post(createUrl("/api/listings"), {
      ...listingData,
    }).catch(() => null)
  )?.data;

  if (!result) {
    return alert("Could not create listing.");
  }

  return result;
};

export const getAllListings = async () => {
  const query = qs.stringify({
    orderBy: { createdAt: "asc" },
  });

  const result = await axios.get(createUrl(`/api/listings?${query}`));

  if (!result) {
    alert("Could not get all listings.");
    return [];
  }
  return result.data;
};

export const getSearchListing = async (searchTerm) => {
  const query = qs.stringify({
    where: {
      OR: [
        {
          locationData: {
            path: ["place"],
            string_contains: searchTerm,
          },
        },
        {
          locationData: {
            path: ["region"],
            string_contains: searchTerm,
          },
        },
        {
          locationData: {
            path: ["country"],
            string_contains: searchTerm,
          },
        },
        {
          locationData: {
            path: ["district"],
            string_contains: searchTerm,
          },
        },
        {
          locationData: {
            path: ["landmark"],
            string_contains: searchTerm,
          },
        },
        {
          locationData: {
            path: ["locality"],
            string_contains: searchTerm,
          },
        },
        {
          locationData: {
            path: ["postcode"],
            string_contains: searchTerm,
          },
        },
        {
          locationData: {
            path: ["neighborhood"],
            string_contains: searchTerm,
          },
        },
      ],
    },
    orderBy: { createdAt: "asc" },
  });
  const result = await axios.get(createUrl(`/api/listings?${query}`));
  if (!result) {
    console.log("not found");
  }

  console.log({ result });
  return result.data;
};

// export const getUserListings = async (userId) => {
//   const query = qs.stringify({
//     where: { listingCreatedBy: userId },
//   });

//   const result = await axios.get(createUrl(`/api/listings?${query}`));
//   if (!result) {
//     console.log("not found");
//   }
//   console.log({ result });
//   return result.data;
// };



export const getUserListings = async (userId) => {
  // Correctly structure the filter for Prisma
  const query = qs.stringify({
    where: {
      listingCreatedBy: {
        id: userId, // Use the userId to filter by the related user's ID
      },
    },
  });

  try {
    const result = await axios.get(createUrl(`/api/listings?${query}`));

    if (!result || !result.data) {
      console.log("No listings found for the user.");
      return [];
    }

    console.log({ result });
    return result.data;
  } catch (error) {
    console.error("Error fetching user listings:", error);
    return [];
  }
};



export const deleteListingAPI = async (id) => {
  const result = await axios.delete(createUrl(`/api/listings/${id}`));
  if (!result) {
    alert("Cannot delete listing");
  }
  return result;
};

export const getUserWishlists = async (userId) => {
  const query = qs.stringify({
    where: {
      user: { id: userId },
    },
    select: {
      listing: true,
    },
  });
  const result = (
    await axios.get(createUrl(`/api/wishlists?${query}`)).catch(() => null)
  )?.data;

  // if (result?.data) {
  //   alert("Failed to get user wishlists.");
  //   return [];
  // }

  return result;
};

// export const addToWishList = async (id, userId) => {
//   const query = {
//     listing: { id },
//     user: { id: userId },
//   };

//   const result = await post(createUrl("/api/wishlists"), { ...query }).catch(
//     () => null
//   )?.data;

//   if (!result.data) {
//     return alert("Could not create wishlist");
//   }
//   return result;
// };

export const addToWishList = async (id, userId) => {
  const query = {
    listing: { id },
    user: { id: userId },
  };

  try {
    const response = await post(createUrl("/api/wishlists"), { ...query });

    if (!response || !response.data) {
      return alert("Could not create wishlist");
    }

    return response.data; // Assuming data is the correct return value
  } catch (error) {
    console.error("Error creating wishlist:", error);
    alert("Could not create wishlist");
    return null;
  }
};

export const removeFromWishListAPI = async (id) => {
  const result = await axios.delete(createUrl(`/api/wishlists/${id}`));
  if (!result) {
    console.log("cannot delete");
  }
  return result;
};

export const getListing = async (listingId) => {
  const result = await axios.get(createUrl(`/api/listings/${listingId}`));
  if (!result) {
    alert("no listing with given id");
  }
  return result.data;
};

export const addTrip = async (data) => {
  const query = {
    listing: {
      id: data.listingId,
    },
    user: { id: data.userId },
    triptData: data.tripData,
  };
  const result = await axios.post(createUrl("/api/trips"), { ...query });
  if (!result) {
    alert("failed");
  } else {
    return result;
  }
};

export const getUserTrips = async (userId) => {
  const query = qs.stringify({
    where: {
      user: { id: userId },
    },
    select: {
      listing: true,
    },
  });
  const result = (
    await axios.get(createUrl(`/api/trips?${query}`)).catch(() => null)
  )?.data;

  console.log({ result });
  return result;
};
