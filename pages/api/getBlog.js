import fs from 'fs/promises';
import path from 'path';

export default async function getblog(req, res) {
  try {
    const file = await fs.readFile(path.join(process.cwd(), 'blogdata', `${req.query.slug}.json`), { encoding: 'utf-8' });
    res.status(200).json(JSON.parse(file));
  } catch (error) {
    res.status(500).json({ error: 'No such blog found' });
  }
}
// http://localhost:3000/api/getBlog?slug=learn-js
