export default function FrameworkResult({data}) {
  return (
    <div className="mt-2 p-2 bg-green-50 border-l-4 border-green-500">
      <strong>Framework:</strong> {data.name} — {data.description}
    </div>
  );
}
