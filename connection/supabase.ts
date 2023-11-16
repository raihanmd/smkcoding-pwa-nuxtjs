import { createClient } from "@supabase/supabase-js";

const { baseUrl, apikey } = useAppConfig();

export const supabase = createClient(baseUrl, apikey);
