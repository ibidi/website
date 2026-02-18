import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getAllPosts() {
    const contentDirectory = path.join(process.cwd(), 'src/content/blog');

    try {
        if (!fs.existsSync(contentDirectory)) {
            return [];
        }

        const files = fs.readdirSync(contentDirectory);

        const posts = files
            .filter(file => file.endsWith('.md'))
            .map(file => {
                const filePath = path.join(contentDirectory, file);
                const fileContent = fs.readFileSync(filePath, 'utf8');
                const { data } = matter(fileContent);

                return {
                    slug: file.replace('.md', ''),
                    title: data.title || 'Untitled',
                    description: data.description || '',
                    date: data.date || '',
                    category: data.category || 'Genel',
                    tags: data.tags || [],
                    image: data.image || null,
                };
            })
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        return posts;
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return [];
    }
}
