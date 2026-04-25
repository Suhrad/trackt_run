import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://snntchmjwwfljvyxqrkq.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNubnRjaG1qd3dmbGp2eXhxcmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzMjMyMTAsImV4cCI6MjA2OTg5OTIxMH0.7Sswm3rpGH3-z-63fmoFqC2QXtvYmvoQHvhs3Hs3kp8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface EmailWaitlist {
  id: string
  email: string
  created_at: string
  updated_at: string
  status: 'pending' | 'confirmed' | 'unsubscribed'
  source: string
  metadata: Record<string, any>
}

// Function to add email to waitlist
export async function addToWaitlist(email: string, source: string = 'website') {
  try {
    console.log('addToWaitlist called with:', { email, source });
    console.log('Supabase URL:', supabaseUrl);
    console.log('Supabase key exists:', !!supabaseAnonKey);
    
    const { data, error } = await supabase
      .from('email_waitlist')
      .insert([
        {
          email: email.toLowerCase().trim(),
          source,
          status: 'pending',
          metadata: {
            user_agent: typeof window !== 'undefined' ? window.navigator.userAgent : null,
            timestamp: new Date().toISOString(),
          }
        }
      ])
      .select()

    if (error) {
      console.error('Error adding to waitlist:', error)
      throw error
    }

    console.log('Successfully added to waitlist:', data);
    return { data, error: null }
  } catch (error) {
    console.error('Error adding to waitlist:', error)
    return { data: null, error }
  }
}

// Function to check if email already exists
export async function checkEmailExists(email: string) {
  try {
    const { data, error } = await supabase
      .from('email_waitlist')
      .select('id, email, status')
      .eq('email', email.toLowerCase().trim())
      .single()

    if (error && error.code !== 'PGRST116') { // PGRST116 is "not found" error
      console.error('Error checking email:', error)
      throw error
    }

    return { exists: !!data, data, error: null }
  } catch (error) {
    console.error('Error checking email:', error)
    return { exists: false, data: null, error }
  }
}
