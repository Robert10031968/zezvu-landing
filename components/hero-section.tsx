import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { joinWaitlist } from "@/app/actions"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FAFAFA] to-white">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-12">
            <img src="/logo-zezvu.png" alt="ZEZVU Logo" className="h-16 w-auto" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#212121] mb-6 leading-tight">
            Break Language Barriers
            <span className="block text-[#3D5AFE]">On Any Screen</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
            ZEZVU is the AI-powered translator box that connects to any HDMI device, delivering real-time subtitles for
            movies, shows, and live content in over 100 languages.
          </p>

          {/* CTA Form */}
          <div className="w-full max-w-md">
            <form action={joinWaitlist} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 h-14 text-lg border-2 border-gray-200 focus:border-[#3D5AFE] rounded-lg"
              />
              <Button
                type="submit"
                className="h-14 px-8 bg-[#3D5AFE] hover:bg-[#3D5AFE]/90 text-white font-semibold text-lg rounded-lg transition-all duration-200"
              >
                Join Waitlist
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-4">Be the first to experience seamless translation technology</p>
          </div>

          {/* Product Preview */}
          <div className="mt-16 w-full max-w-2xl">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="ZEZVU Device Setup: Device → ZEZVU BOX → TV"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
