import { Check } from "lucide-react"

const benefits = [
  "Real-time AI translation in 100+ languages",
  "Works with any HDMI device (streaming, cable, gaming)",
  "No internet required after initial setup",
  "Customizable subtitle appearance and positioning",
  "Supports multiple audio tracks and formats",
  "Plug-and-play installation in under 2 minutes",
  "Regular AI model updates for improved accuracy",
  "Compatible with 4K and HDR content",
]

export function BenefitsSection() {
  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">Why Choose ZEZVU?</h2>
            <p className="text-xl text-gray-600">Advanced AI technology meets simple, elegant design</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-[#3D5AFE] rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="text-[#212121] font-medium leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
