import { NextResponse } from 'next/server';

export async function GET() {
    const apiKey = process.env.LASTFM_API_KEY;
    const username = 'ibidishu';

    if (!apiKey) {
        return NextResponse.json({ error: 'Last.fm API key is missing' }, { status: 500 });
    }

    try {
        const baseUrl = 'https://ws.audioscrobbler.com/2.0/';

        // Fetch user info, recent tracks, and top artists in parallel
        const [userRes, recentRes, topArtistsRes] = await Promise.all([
            fetch(`${baseUrl}?method=user.getInfo&user=${username}&api_key=${apiKey}&format=json`, { next: { revalidate: 300 } }),
            fetch(`${baseUrl}?method=user.getRecentTracks&user=${username}&api_key=${apiKey}&limit=5&format=json`, { next: { revalidate: 60 } }), // Recent tracks more frequent
            fetch(`${baseUrl}?method=user.getTopArtists&user=${username}&api_key=${apiKey}&period=7day&limit=6&format=json`, { next: { revalidate: 3600 } }) // Weekly artists less frequent
        ]);

        const [userData, recentData, topArtistsData] = await Promise.all([
            userRes.json(),
            recentRes.json(),
            topArtistsRes.json()
        ]);

        return NextResponse.json({
            user: userData.user,
            recent: recentData.recenttracks?.track || [],
            topArtists: topArtistsData.topartists?.artist || []
        });
    } catch (error) {
        console.error('Last.fm API error:', error);
        return NextResponse.json({ error: 'Failed to fetch Last.fm data' }, { status: 500 });
    }
}
