export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 font-sans text-gray-900">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">ZEZVU — AI TV Translator Box</h1>
        <p className="text-lg text-gray-700 mb-6">
          Watch any content, in any language — with real-time AI subtitles.
        </p>
        <p className="text-base text-gray-600">
          Break language barriers on your TV. Enjoy your favorite shows — in your language.
        </p>
      </section>

      {/* How it works */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">How it works:</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Plug ZEZVU between your device and TV (HDMI IN/OUT)</li>
          <li>ZEZVU listens to the audio</li>
          <li>AI generates real-time subtitles</li>
          <li>Subtitles appear on your TV — or on your phone</li>
        </ol>
      </section>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why choose ZEZVU?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Works with any HDMI device</li>
          <li>Supports 50+ languages</li>
          <li>No apps required</li>
          <li>Private & secure</li>
          <li>Real-time AI translation</li>
          <li>No subscription required</li>
        </ul>
      </section>

      {/* Waitlist */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Join our waitlist:</h2>
        <form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-base"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Join Now
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="pt-8 border-t text-sm text-center text-gray-500">
        © 2025 ZEZVU. All rights reserved.
      </footer>
    </main>
  )
}