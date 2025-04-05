import type { NextApiRequest, NextApiResponse } from 'next';

async function summarizeVideo(url: string): Promise<string> {
  // 여기에 유튜브 API와 NLP 요약 로직을 추가합니다.
  return '요약된 내용';
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { url } = req.body;
    const summary = await summarizeVideo(url);
    res.status(200).json({ summary });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 