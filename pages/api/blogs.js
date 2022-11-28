import fs from 'fs/promises';
import path from 'path';

export default async function blogs(req, res) {
  try {
    let allBlogs = [];
    const dir = await fs.readdir(path.join(process.cwd(), 'blogdata'));
    for (const x of dir) {
      const file = await fs.readFile(path.join(process.cwd(), 'blogdata', x), { encoding: 'utf-8' });
      allBlogs.push(JSON.parse(file));
    }
    res.status(200).json(allBlogs);
  } catch (error) {
    res.status(500).json({ error: 'No blogs found' });
  }
}

// http://localhost:3000/api/blogs
