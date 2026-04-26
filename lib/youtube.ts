const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

interface Episodes {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: number;
  link: string;
}

export async function getLatestEpisodes(maxResults = 10): Promise<Episodes[]> {
  try {
    if (!API_KEY || !CHANNEL_ID) {
      console.warn("YouTube API Key or Channel ID missing.");
      return [];
    }

    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`,
    );
    const channelData = await channelRes.json();

    if (!channelData.items?.[0]) return [];

    const uploadsPlaylistId =
      channelData.items[0].contentDetails.relatedPlaylists.uploads;

    const playlistRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${API_KEY}`,
      { next: { revalidate: 3600 } }, // Revalidate every hour
    );

    const playlistData = await playlistRes.json();

    if (!playlistData.items) return [];

    return playlistData.items.map((item: any) => ({
      id: item.contentDetails.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail:
        item.snippet.thumbnails?.maxres?.url ||
        item.snippet.thumbnails?.high?.url ||
        item.snippet.thumbnails?.default?.url ||
        "",
      publishedAt: item.snippet.publishedAt,
      link: `https://www.youtube.com/watch?v=${item.contentDetails.videoId}`,
    }));
  } catch (error) {
    console.error("YouTube Fetch Error:", error);
    return [];
  }
}
