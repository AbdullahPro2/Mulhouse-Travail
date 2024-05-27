import supabase from '../../services/supabase';

// LOGIN
export async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    console.log(error);
  }
  return data;
}

// SIGNUP

export async function signUpNewUser(email, password) {
  let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  if (error) {
    console.log(error);
  }
  return data;
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
}
