import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
    initialState: 0,
    name: "counter",
    reducers: {
        incrementCount: (state) => {
            return state + 1;
        },
        decrementCount: (state) => {
            return state - 1;
        }
    }
});

export let counter = counterSlice.reducer