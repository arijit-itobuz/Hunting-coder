import fs from 'fs/promises';
import path from 'path';

export default async function blogs(req, res) {
  try {
    const dir = await fs.readdir(path.join(process.cwd(), 'blogdata'));
    res.status(200).json(dir);
  } catch (error) {
    res.status(500).json({ error: 'No such directory found' });
  }
}

// http://localhost:3000/api/blogs
