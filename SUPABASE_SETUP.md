# Supabase Setup Instructions

## 1. Database Setup

Run the SQL script in your Supabase SQL Editor:

```sql
-- Copy and paste the contents of supabase-setup.sql
```

## 2. Environment Variables

Create a `.env.local` file in your project root with:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://snntchmjwwfljvyxqrkq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Database URL (for direct connection if needed)
DATABASE_URL=postgresql://postgres:qwerd12345@db.snntchmjwwfljvyxqrkq.supabase.co:5432/postgres

# Vercel Blob Storage
BLOB_READ_WRITE_TOKEN=your_blob_token_here
```

## 3. Get Your Supabase Keys

1. Go to your Supabase project dashboard
2. Navigate to Settings > API
3. Copy the "anon public" key and paste it as `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Copy the "service_role" key and paste it as `SUPABASE_SERVICE_ROLE_KEY`

## 4. Test the Setup

1. Start your development server: `npm run dev`
2. Try submitting an email through the waitlist form
3. Check your Supabase database to see if the email was saved

## 5. Database Schema

The `email_waitlist` table includes:
- `id`: UUID primary key
- `email`: User's email address (unique)
- `created_at`: Timestamp when email was added
- `updated_at`: Timestamp when record was last updated
- `status`: pending, confirmed, or unsubscribed
- `source`: Where the email came from (default: 'website')
- `metadata`: JSON data with additional info

## 6. Analytics

You can query waitlist statistics using the `waitlist_stats` view:

```sql
SELECT * FROM waitlist_stats;
```

This will show you:
- Total emails collected
- Pending vs confirmed emails
- Daily, weekly, and monthly signup counts
