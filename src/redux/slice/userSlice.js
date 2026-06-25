import { createSlice } from "@reduxjs/toolkit";
import { user } from "../../assests/assests";
const userSlice = createSlice({
    name: "doctor",
    initialState: {
        user: user,
    },
    reducers: {
        setUsers: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;