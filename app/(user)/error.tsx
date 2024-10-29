"use client"; // Error components must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="h-screen grid text-center place-content-center">
      <h2>Something went wrong!</h2>
      <div className="text-red-500">{error && <p>{error.message}</p>}</div>

      <div>
        <button
          className="text-white justify-center w-32 rounded-lg bg-red-300"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}
