export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#3D5AFE" }}>ZEZVU — AI TV Translator Box</h1>
      <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
        Watch any content, in any language — with real-time AI subtitles.
      </p>
      <p style={{ marginTop: "1rem" }}>
        Break language barriers on your TV. Enjoy your favorite shows — in your language.
      </p>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem" }}>How it works:</h2>
        <ol style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
          <li>1️⃣ Plug ZEZVU between your device and TV (HDMI IN/OUT)</li>
          <li>2️⃣ ZEZVU listens to the audio</li>
          <li>3️⃣ AI generates real-time subtitles</li>
          <li>4️⃣ Subtitles appear on your TV — or on your phone</li>
        </ol>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem" }}>Why choose ZEZVU?</h2>
        <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem" }}>
          <li>✅ Works with any HDMI device</li>
          <li>✅ Supports 50+ languages</li>
          <li>✅ No apps required</li>
          <li>✅ Private & secure</li>
          <li>✅ Real-time AI translation</li>
          <li>✅ No subscription required</li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem" }}>Join our waitlist:</h2>
        <form style={{ marginTop: "1rem" }}>
          <input type="email" placeholder="Enter your email" style={{ padding: "0.5rem", fontSize: "1rem", width: "300px" }} />
          <button type="submit" style={{ padding: "0.5rem 1rem", marginLeft: "0.5rem", backgroundColor: "#3D5AFE", color: "white", border: "none", cursor: "pointer" }}>
            Join Now
          </button>
        </form>
      </section>

      <footer style={{ marginTop: "4rem", fontSize: "0.9rem", color: "#666" }}>
        © 2025 ZEZVU. All rights reserved.
      </footer>
    </main>
  )
}