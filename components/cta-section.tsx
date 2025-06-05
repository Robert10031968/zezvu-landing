import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { joinWaitlist } from "@/app/actions"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#3D5AFE] to-[#00C4FF]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Viewing Experience?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Join thousands of early adopters and be among the first to experience the future of content translation.
          </p>

          <div className="max-w-md mx-auto">
            <form action={joinWaitlist} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 h-14 text-lg border-2 border-white/20 bg-white/10 text-white placeholder:text-white/70 focus:border-white rounded-lg"
              />
              <Button
                type="submit"
                className="h-14 px-8 bg-white text-[#3D5AFE] hover:bg-white/90 font-semibold text-lg rounded-lg transition-all duration-200"
              >
                Join Waitlist
              </Button>
            </form>
            <p className="text-sm text-white/80 mt-4">
              No spam, just updates on availability and exclusive early-bird pricing
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
