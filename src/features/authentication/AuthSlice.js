import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  familyName: '',
  email: '',
  password: '',
  postalCode: '',
  city: '',
  streetNumber: '',
  street: '',
  nationality: '',
  phoneNumber: '',
  dateOfBirth: '',
  userUID: '',
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
        postalCode,
        city,
        streetNumber,
        street,
        nationality,
        phoneNumber,
        dateOfBirth,
        userUID,
      ) {
        return {
          payload: {
            firstName,
            familyName,
            email,
            password,
            postalCode,
            city,
            streetNumber,
            street,
            nationality,
            phoneNumber,
            dateOfBirth,
            userUID,
          },
        };
      },
      reducer(state, action) {
        state.firstName = action.payload.firstName;
        state.familyName = action.payload.familyName;
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.postalCode = action.payload.postalCode;
        state.city = action.payload.city;
        state.streetNumber = action.payload.streetNumber;
        state.street = action.payload.street;
        state.nationality = action.payload.nationality;
        state.phoneNumber = action.payload.phoneNumber;
        state.dateOfBirth = action.payload.dateOfBirth;
        state.userUID = action.payload.userUID;
      },
    },
    logOutUser(state, payload) {
      state.firstName = '';
      state.familyName = '';
      state.email = '';
      state.password = '';
      state.postalCode = '';
      state.city = '';
      state.streetNumber = '';
      state.street = '';
      state.nationality = '';
      state.phoneNumber = '';
      state.dateOfBirth = '';
      state.userUID = '';
    },
  },
});

export const { createUser, logOutUser } = authSlice.actions;
export default authSlice.reducer;
