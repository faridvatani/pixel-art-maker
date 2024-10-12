import PixelArtMaker from "@/components/PixelArtMaker";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 lg:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-950">
      <main className="w-full max-w-4xl">
        <PixelArtMaker />
      </main>
      <footer className="mt-8 flex gap-4 flex-wrap items-center justify-center">
        <p className="text-center">
          Built with{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Tailwind CSS
          </a>
        </p>
      </footer>
    </div>
  );
}
