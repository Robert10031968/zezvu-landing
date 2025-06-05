import { Monitor, Zap, Languages, Tv } from "lucide-react"

const steps = [
  {
    icon: Monitor,
    title: "Connect Your Device",
    description: "Plug your streaming device, cable box, or gaming console into ZEZVU",
  },
  {
    icon: Zap,
    title: "Connect to TV",
    description: "Connect ZEZVU to your TV via HDMI for seamless integration",
  },
  {
    icon: Languages,
    title: "AI Listens & Translates",
    description: "Advanced AI processes audio in real-time and generates accurate translations",
  },
  {
    icon: Tv,
    title: "Enjoy Subtitles",
    description: "Watch with perfect subtitles in your preferred language, instantly",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Four simple steps to unlock content in any language</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#3D5AFE] rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#00C4FF] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#212121] mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
