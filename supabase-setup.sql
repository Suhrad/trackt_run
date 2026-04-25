-- Create the email waitlist table
CREATE TABLE IF NOT EXISTS email_waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'unsubscribed')),
  source VARCHAR(100) DEFAULT 'website',
  metadata JSONB DEFAULT '{}'::jsonb
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_email_waitlist_email ON email_waitlist(email);

-- Create an index on created_at for analytics
CREATE INDEX IF NOT EXISTS idx_email_waitlist_created_at ON email_waitlist(created_at);

-- Create an index on status for filtering
CREATE INDEX IF NOT EXISTS idx_email_waitlist_status ON email_waitlist(status);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update updated_at
CREATE TRIGGER update_email_waitlist_updated_at 
    BEFORE UPDATE ON email_waitlist 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE email_waitlist ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert emails (for the waitlist signup)
CREATE POLICY "Allow public to insert emails" ON email_waitlist
    FOR INSERT 
    WITH CHECK (true);

-- Create a policy that allows reading emails (you might want to restrict this later)
CREATE POLICY "Allow reading emails" ON email_waitlist
    FOR SELECT 
    USING (true);

-- Optional: Create a view for analytics
CREATE OR REPLACE VIEW waitlist_stats AS
SELECT 
    COUNT(*) as total_emails,
    COUNT(CASE WHEN status = 'pending' THEN 1 END) as pending_emails,
    COUNT(CASE WHEN status = 'confirmed' THEN 1 END) as confirmed_emails,
    COUNT(CASE WHEN created_at >= CURRENT_DATE THEN 1 END) as today_signups,
    COUNT(CASE WHEN created_at >= CURRENT_DATE - INTERVAL '7 days' THEN 1 END) as week_signups,
    COUNT(CASE WHEN created_at >= CURRENT_DATE - INTERVAL '30 days' THEN 1 END) as month_signups
FROM email_waitlist;

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON email_waitlist TO anon, authenticated;
GRANT SELECT ON waitlist_stats TO anon, authenticated;
