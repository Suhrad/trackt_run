"use server";

import { ActionResult, error, success } from "./utils";
import { newsletterSchema } from "./schema";
import { addToWaitlist, checkEmailExists } from "./supabase";

const IS_DEMO = !process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY === 'your_anon_key_here';

export const subscribe = async (email: string): Promise<ActionResult<string>> => {
  console.log('Subscribe function called with email:', email);
  console.log('IS_DEMO:', IS_DEMO);
  console.log('NEXT_PUBLIC_SUPABASE_URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
  console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY exists:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  
  if (IS_DEMO) {
    console.log('Demo mode detected, returning error');
    return error("Missing Supabase configuration")
  }
  
  const parsed = newsletterSchema.safeParse({ email });

  if (!parsed.success) {
    console.log('Email validation failed:', parsed.error.message);
    return error(parsed.error.message);
  }

  try {
    console.log('Checking if email exists...');
    // Check if email already exists
    const { exists, error: checkError } = await checkEmailExists(parsed.data.email);
    
    if (checkError) {
      console.log('Error checking email:', checkError);
      return error("Error checking email status");
    }

    if (exists) {
      console.log('Email already exists');
      return success("You're already on the waitlist!");
    }
    
    console.log('Adding email to waitlist...');
    // Add email to waitlist
    const { data, error: insertError } = await addToWaitlist(parsed.data.email, 'website');

    if (insertError) {
      console.log('Error adding to waitlist:', insertError);
      return error(insertError.message || "Error joining waitlist");
    }

    console.log('Successfully added to waitlist');
    return success("Welcome to the waitlist! We'll notify you when Trackt is ready.");
  } catch (err) {
    console.log('Unexpected error:', err);
    return error(err instanceof Error ? err.message : "Error joining waitlist");
  }
};

export const getDemoState = async () => {
  return IS_DEMO;
};
