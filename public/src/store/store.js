import { createAuthSlice } from "./slices/AuthSlice";
import { create } from "zustand";
import { createProcessSlice } from "./slices/ProcessSlice";

export const useAppStore = create()((...a) => ({
    ...createAuthSlice(...a),
    ...createProcessSlice(...a),
}))