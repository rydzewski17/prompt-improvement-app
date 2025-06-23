import { useState } from 'react';
import PromptForm from '../components/PromptForm';
import ModelResult from '../components/ModelResult';
import FrameworkResult from '../components/FrameworkResult';

export default function Home() {
  const [modelData, setModelData] = useState(null);
  const [frameworkData, setFrameworkData] = useState(null);
  const [output, setOutput] = useState('');

  const handleAnalyze = async (prompt) => {
    const res1 = await fetch('/api/analyze', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({prompt}) });
    const {model, framework} = await res1.json();
    setModelData(model);
    setFrameworkData(framework);

    const res2 = await fetch('/api/generate', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({prompt, model, framework}) });
    const {output: result} = await res2.json();
    setOutput(result);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Prompt Improvement Tool</h1>
      <PromptForm onAnalyze={handleAnalyze} />
      {modelData && <ModelResult data={modelData} />}
      {frameworkData && <FrameworkResult data={frameworkData} />}
      {output && <pre className="bg-gray-100 p-4 mt-4 rounded">{output}</pre>}
    </div>
  );
}
