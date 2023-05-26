/* eslint-disable prettier/prettier */
import { NextApiRequest, NextApiResponse } from 'next/types';

/* eslint-disable prettier/prettier */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log({ req });
  try {
    // await res.revalidate('/isr-page');
    await res.revalidate('/');
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
}
