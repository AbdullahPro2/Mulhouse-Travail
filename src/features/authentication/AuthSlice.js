import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  familyName: '',
  email: '',
  password: '',
  address: '',
  postalCode: '',
  city: '',
  nationality: '',
  phoneNumber: '',
  dateOfBirth: '',
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: {
      prepare(
        firstName,
        familyName,
        email,
        password,
        address,
        postalCode,
        city,
        nationality,
        phoneNumber,
        dateOfBirth,
      ) {
        return {
          payload: {
            firstName,
            familyName,
            email,
            password,
            address,
            postalCode,
            city,
            nationality,
            phoneNumber,
            dateOfBirth,
          },
        };
      },
      reducer(state, action) {
        state.firstName = action.payload.firstName;
        state.familyName = action.payload.familyName;
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.address = action.payload.address;
        state.postalCode = action.payload.postalCode;
        state.city = action.payload.city;
        state.nationality = action.payload.nationality;
        state.phoneNumber = action.payload.phoneNumber;
        state.dateOfBirth = action.payload.dateOfBirth;
      },
    },
  },
});

export const { createUser } = authSlice.actions;
export default authSlice.reducer;
