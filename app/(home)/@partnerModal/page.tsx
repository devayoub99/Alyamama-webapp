// app/@modal/page.js
"use client"; // Needed if you use state or client-side interactions

import { useRouter } from "next/navigation";

export default function Modal() {
  const router = useRouter();

  const handleClose = () => {
    // Navigate back to the underlying route to close the modal
    router.back();
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Modal Title</h2>
        <p>This is the content of the modal.</p>
        <button onClick={handleClose}>Close Modal</button>
      </div>
    </div>
  );
}
