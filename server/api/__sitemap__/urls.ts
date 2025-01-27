import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default defineSitemapEventHandler(async () => {
  // Fetch slugs from your Supabase database
  const { data, error } = await supabase.from("Posts").select("slug");

  if (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    });
  }

  // Map the slugs to the required URL format
  const urls = data.map((item) => ({
    loc: `/posts/${item.slug}`,
  }));

  return urls;
});
