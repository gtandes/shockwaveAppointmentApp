import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bnovhwriyfbtdgcorpqd.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJub3Zod3JpeWZidGRnY29ycHFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcwNzMzNDMsImV4cCI6MjAwMjY0OTM0M30.0Jj-DHIXYbyAnUnkogBOvX8l8jVNNY2ZdPcgPPWQWmo';

export const supabase = createClient(supabaseUrl, supabaseKey);
