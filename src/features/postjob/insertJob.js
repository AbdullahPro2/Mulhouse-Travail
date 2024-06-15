import supabase from '../../services/supabase';

export async function insertJob(newJob) {
  const { data, error } = await supabase.from('jobs').insert([newJob]).select();
  if (error) {
    console.log(error);
    throw error;
  }
  return data;
}
