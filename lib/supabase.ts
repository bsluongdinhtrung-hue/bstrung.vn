import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://wxdpzmjbhqjggqvyxguh.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_oQW8IYMr1MT-LmvFIpVWhA_8a9Ey__z';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface BstrungArticle {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  category: string;
  priority_order: number;
  external_link: string;
  image_url: string;
  badges: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
