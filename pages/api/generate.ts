import type {NextApiRequest, NextApiResponse} from 'next';
import OpenAI from 'openai';

const TEMPLATES = {
  AIDA: p => `Attention: ${p}\nInterest: ...\nDesire: ...\nAction: ...`,
  STAR: p => `Situation: ${p}\nTask: ...\nAction: ...\nResult: ...`,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {prompt, model, framework} = req.body;
  const apiKey = process.env.OPENAI_API_KEY;
  const openai = new OpenAI({apiKey});
  const formatted = TEMPLATES[framework.name] ? TEMPLATES[framework.name](prompt) : prompt;
  const completion = await openai.chat.completions.create({ model:model.name, messages:[{role:'user', content:formatted}] });
  res.status(200).json({output:completion.choices[0].message.content});
}
