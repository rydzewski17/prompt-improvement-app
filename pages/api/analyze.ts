import type {NextApiRequest, NextApiResponse} from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {prompt} = req.body;
  let model, reason;
  const lower = prompt.toLowerCase();
  if(lower.includes('write')||lower.includes('creative')) {
    model='gpt-4'; reason='best for creative tasks';
  } else {
    model='gpt-3.5-turbo'; reason='fast and general-purpose';
  }
  const framework = lower.includes('example') ? {name:'STAR', description:'Situation-Task-Action-Result'} : {name:'AIDA', description:'Attention-Interest-Desire-Action'};
  res.status(200).json({model:{name:model,reason}, framework});
}
