import {useState} from 'react';
export default function PromptForm({onAnalyze}) {
  const [text, setText] = useState('');
  return (
    <form onSubmit={e=>{e.preventDefault(); onAnalyze(text);}} className="space-y-2">
      <textarea className="w-full p-2 border" rows={4} value={text} onChange={e=>setText(e.target.value)} placeholder="Enter prompt description..." />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Optimize Prompt</button>
    </form>
  );
}
