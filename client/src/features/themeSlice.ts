import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { PaletteMode } from "@mui/material";

// Define a type for the slice state
interface Theme {
  mode: PaletteMode | undefined;
}

const getItem = (): any => {
  const localItem = localStorage.getItem("mode");
  if (typeof localItem === "string") {
    return JSON.parse(localItem); // ok
  }
  return "light";
};

// Define the initial state using that type
const initialState: Theme = {
  mode: getItem().mode,
};

export const themeSlice = createSlice({
  name: "theme",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleTheme: (state: Theme) => {
      if (state.mode === "dark") {
        state.mode = "light";
      } else {
        state.mode = "dark";
      }
      localStorage.setItem("mode", JSON.stringify(state));
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const theme = (state: RootState) => state.theme;

export default themeSlice.reducer;
