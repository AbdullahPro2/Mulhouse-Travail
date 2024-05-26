import supabase from './supabase';

export async function getJobs() {
  const { data, error } = await supabase.from('jobs').select('*');
  if (error) {
    console.error(error);
    throw new Error('Jobs could not be loaded');
  }
  return data;
}
