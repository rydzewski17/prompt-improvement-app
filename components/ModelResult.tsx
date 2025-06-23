export default function ModelResult({data}) {
  return (
    <div className="mt-4 p-2 bg-blue-50 border-l-4 border-blue-500">
      <strong>Model:</strong> {data.name} — {data.reason}
    </div>
  );
}
