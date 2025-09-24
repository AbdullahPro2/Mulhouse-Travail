import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://luyfyzbjkusyvexdyltu.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1eWZ5emJqa3VzeXZleGR5bHR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg2OTQ4MDMsImV4cCI6MjA3NDI3MDgwM30.WJf_1SfL5cFEu8RO67yaCxKdbWELbNJ_koUti9Md6Do';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
