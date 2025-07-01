import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';

const { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY } = process.env;

if (!VITE_SUPABASE_URL || !VITE_SUPABASE_ANON_KEY) {
  console.error('Missing Supabase environment variables.');
  process.exit(1);
}

const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY);
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Music Ads Platform API');
});

app.get('/campaigns', async (req, res) => {
  const { data, error } = await supabase.from('campaigns').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.post('/campaigns', async (req, res) => {
  const campaign = req.body;
  const { data, error } = await supabase.from('campaigns').insert(campaign).select('*').single();
  if (error) return res.status(500).json({ error: error.message });
  try {
    await dispatchCampaignToPlatform(campaign);
  } catch (err) {
    console.error(err);
  }
  res.json(data);
});

async function dispatchCampaignToPlatform(campaign) {
  switch (campaign.platform) {
    case 'meta':
      return createMetaAdCampaign(campaign);
    case 'youtube':
      return createYouTubeAdCampaign(campaign);
    case 'tiktok':
      return createTikTokAdCampaign(campaign);
    default:
      throw new Error('Unknown platform');
  }
}

async function createMetaAdCampaign(campaign) {
  // TODO: integrate with Meta Marketing API
  console.log('Sending campaign to Meta:', campaign);
}

async function createYouTubeAdCampaign(campaign) {
  // TODO: integrate with Google Ads API for YouTube
  console.log('Sending campaign to YouTube:', campaign);
}

async function createTikTokAdCampaign(campaign) {
  // TODO: integrate with TikTok Ads API
  console.log('Sending campaign to TikTok:', campaign);
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
