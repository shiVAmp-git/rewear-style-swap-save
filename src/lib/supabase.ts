
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string | null
          full_name: string | null
          avatar_url: string | null
          website: string | null
          updated_at: string | null
        }
        Insert: {
          id: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          website?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          website?: string | null
          updated_at?: string | null
        }
      }
      items: {
        Row: {
          id: string
          title: string
          description: string
          price: number
          category: string
          brand: string
          size: string
          condition: string
          images: string[]
          user_id: string
          created_at: string
          updated_at: string
          is_sold: boolean
          original_price: number | null
          available_for_sale: boolean
          open_to_swaps: boolean
        }
        Insert: {
          id?: string
          title: string
          description: string
          price: number
          category: string
          brand: string
          size: string
          condition: string
          images: string[]
          user_id: string
          created_at?: string
          updated_at?: string
          is_sold?: boolean
          original_price?: number | null
          available_for_sale?: boolean
          open_to_swaps?: boolean
        }
        Update: {
          id?: string
          title?: string
          description?: string
          price?: number
          category?: string
          brand?: string
          size?: string
          condition?: string
          images?: string[]
          user_id?: string
          created_at?: string
          updated_at?: string
          is_sold?: boolean
          original_price?: number | null
          available_for_sale?: boolean
          open_to_swaps?: boolean
        }
      }
    }
  }
}
