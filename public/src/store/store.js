import { create } from "zustand";
import { createListingSlice } from "./slices/ListingsSlice";
import { createAuthSlice } from "./slices/AuthSlice";
import { createProcessSlice } from "./slices/ProcessSlice";
import { createSearchSlice } from "./slices/SearchSlice";

export const useAppStore = create()((...a) => ({
  ...createAuthSlice(...a),
  ...createProcessSlice(...a),
  ...createListingSlice(...a),
  ...createSearchSlice(...a),
}));
