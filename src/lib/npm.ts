export type NpmPackage = {
  _id: string;
  name: string;
  description: string | null;
  version: string;
  downloads: number;
  links: Record<string, string>;
};

export async function getNpmPackages(): Promise<NpmPackage[]> {
  try {
    const username = "ihsanbakidogan";
    const response = await fetch(
      `https://registry.npmjs.org/-/v1/search?text=maintainer:${username}&size=20`,
      {
        headers: {
          Accept: "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error("NPM API error");
    }

    const data = await response.json();

    const packagesWithDownloads = await Promise.all(
      (data.objects || []).map(async (obj: any) => {
        const pkg = obj.package;
        try {
          const downloadRes = await fetch(
            `https://api.npmjs.org/downloads/point/last-week/${pkg.name}`,
          );
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
      }),
    );

    return packagesWithDownloads.sort((a, b) => b.downloads - a.downloads);
  } catch (error) {
    console.error("NPM API error:", error);
    return [];
  }
}
