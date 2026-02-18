import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

export async function GET() {
    const contentDirectory = path.join(process.cwd(), 'src/content/blog');

    try {
        if (!fs.existsSync(contentDirectory)) {
            return NextResponse.json([]);
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

        return NextResponse.json(posts);
    } catch (error) {
        console.error('Blog API error:', error);
        return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
    }
}
