import { createSlice } from "@reduxjs/toolkit";
const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    doctors: [],
    appointments: []
  },
  reducers: {
    setDoctors: (state, action) => {
      state.doctors = action.payload;
    },
    setAppointmentsDoctor: (state, action) => {
      state.appointments = action.payload
    }
  },
});

export const { setDoctors, setAppointmentsDoctor } = doctorSlice.actions;
export default doctorSlice.reducer;