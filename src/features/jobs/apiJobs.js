import supabase from '../../services/supabase';

export async function getJobs() {
  const { data, error } = await supabase.from('jobs').select('*');
  if (error) {
    console.error(error);
    throw new Error('Jobs could not be loaded');
  }
  return data;
}

// Select job by id

export async function getJobByID(id) {
  let { data, error } = await supabase.from('jobs').select('*').eq('id', id);

  if (error) console.log(error);
  return data;
}
