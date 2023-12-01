import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ckgbngsawejkhlysyvll.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrZ2JuZ3Nhd2Vqa2hseXN5dmxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzNjc3MTEsImV4cCI6MjAxNDk0MzcxMX0.dRx1MolmxN_4FlpX6FpvUozsZqrKLxTw_hHUZj6Mte4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
