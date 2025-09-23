import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config()
const supabaseUrl = process.env.SUPABASE_PROJECT_URL || "https://test.supabase.co";
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || "my-secret-key"
console.log(supabaseUrl, supabaseAnonKey)

if (!supabaseUrl) console.warn('⚠️ SUPABASE_PROJECT_URL is not set!');
if (!supabaseAnonKey) console.warn('⚠️ SUPABASE_ANON_ROLE_KEY is not set!');

console.log('Initializing Supabase client...');
console.log(`Supabase URL: ${supabaseUrl}`);
console.log(`Supabase Key is set: ${supabaseAnonKey ? '✅' : '❌'}`);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log('Supabase client initialized successfully');