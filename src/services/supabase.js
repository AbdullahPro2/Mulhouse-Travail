import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iifcwriiqospoishlcwi.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpZmN3cmlpcW9zcG9pc2hsY3dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY3MTg1NjAsImV4cCI6MjAzMjI5NDU2MH0.BuMgSqyviBTGhhPtkVIs5zvqF6fGaUh6VPTFyM5h3Rk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
