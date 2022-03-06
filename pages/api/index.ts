// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { webkit } from 'playwright'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { url, text } = req.query;

  const browser = await webkit.launch();
  const page = await browser.newPage();
  await page.setViewportSize({
    width: 1280,
    height: 720,
  });
  await page.goto(`http://localhost:3000/?url=${url}&text=${text}`);
  const file = await page.screenshot({ type: 'jpeg', });
  
  await browser.close();

  res.setHeader('Content-Type', `image/jpeg`);
  res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
  res.end(file);
}
