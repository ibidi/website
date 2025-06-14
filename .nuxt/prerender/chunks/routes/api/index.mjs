import { defineEventHandler } from 'file:///Users/ibidi/Desktop/website/node_modules/h3/dist/index.mjs';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const index = defineEventHandler(async (event) => {
  try {
    const filePath = resolve(process.cwd(), "data/songs.json");
    const fileContent = readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileContent);
    return {
      songs: data.songs
    };
  } catch (error) {
    event.node.res.statusCode = 500;
    return {
      statusCode: 500,
      error: error instanceof Error ? error.message : "Bilinmeyen hata",
      songs: []
    };
  }
});

export { index as default };
//# sourceMappingURL=index.mjs.map
