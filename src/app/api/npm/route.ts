import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const username = 'ihsanbakidogan';
    // NPM Registry API'den kullanıcı paketlerini çek
    const response = await fetch(`https://registry.npmjs.org/-/v1/search?text=maintainer:${username}&size=20`, {
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 3600 } // 1 saat cache
    });

    if (!response.ok) {
      throw new Error('NPM API error');
    }

    const data = await response.json();

    // Her paket için download sayısını al
    const packagesWithDownloads = await Promise.all(
      (data.objects || []).map(async (obj: any) => {
        const pkg = obj.package;
        try {
          // Son bir haftalık download sayısını al
          const downloadRes = await fetch(`https://api.npmjs.org/downloads/point/last-week/${pkg.name}`, {
            next: { revalidate: 3600 }
          });
          const downloadData = await downloadRes.json();

          return {
            _id: pkg.name,
            name: pkg.name,
            description: pkg.description,
            version: pkg.version,
            downloads: downloadData.downloads || 0,
            links: pkg.links,
          };
        } catch {
          return {
            _id: pkg.name,
            name: pkg.name,
            description: pkg.description,
            version: pkg.version,
            downloads: 0,
            links: pkg.links,
          };
        }
      })
    );

    // Download sayısına göre sırala
    const sortedPackages = packagesWithDownloads.sort((a, b) => b.downloads - a.downloads);

    return NextResponse.json(sortedPackages);
  } catch (error) {
    console.error('NPM API error:', error);
    return NextResponse.json({ error: 'Failed to fetch NPM packages' }, { status: 500 });
  }
}