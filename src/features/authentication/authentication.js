import supabase from '../../services/supabase';

// LOGIN
export async function login(email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    console.error('Error during sign-up:', error);
    return { error };
  }
}

// SIGNUP

export async function signUpNewUser(email, password, userDetails) {
  try {
    let { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userDetails, // user metadata
      },
    });
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error during sign-up:', error);
    return { error };
  }
}
// ADD USER DATA

export async function insertUserData(userData) {
  const { data, error } = await supabase
    .from('users')
    .insert(userData)
    .select();

  if (error) {
    console.log(error);
  }
  return data;
}

// Get user with Filtering

export async function getUserWithUid(userUID) {
  let { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('userUID', userUID);

  if (error) {
    console.log(error);
    throw error;
  }

  return data;
}

// Update user
export async function updateAuthUser(userData) {
  const { data, error } = await supabase.auth.updateUser({
    // email: email,
    // password: password,
    data: {
      ...userData,
    },
  });

  if (error) {
    console.log(error);
    throw error;
  }
  return data;
}
// Update user
export async function updateAuthUserEmailPass(userData) {
  const { data, error } = await supabase.auth.updateUser({
    email: userData.email,
    password: userData.password,
  });

  if (error) {
    console.log(error);
    throw error;
  }
  return data;
}

// Update user data
export async function updateUserData(uid, newData) {
  const { data, error } = await supabase
    .from('users')
    .update({ ...newData })
    .eq('userUID', uid)
    .select();
  if (error) {
    throw error;
  }
  return data;
}
