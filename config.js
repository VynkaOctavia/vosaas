// Replace these strings with your actual Supabase Project details
const SUPABASE_URL = 'https://pimuvnkgestacnjkwrjf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpbXV2bmtnZXN0YWNuamt3cmpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY3ODM1NDksImV4cCI6MjEwMjM1OTU0OX0.Rpma5cn-GOj0JTu3Na2Q7Hlh4W35Jo8A1UtY6JXmpDw';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);