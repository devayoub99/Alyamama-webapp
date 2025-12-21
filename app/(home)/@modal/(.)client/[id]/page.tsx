// (home)/@modal/(.)client/page.tsx
export default function ClientModal() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold">Client Details</h2>
        {/* Your modal content */}
        <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">
          Close
        </button>
      </div>
    </div>
  );
}
