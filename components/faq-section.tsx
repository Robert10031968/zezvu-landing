import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How accurate are the AI-generated subtitles?",
    answer:
      "ZEZVU uses advanced AI models trained on millions of hours of content, achieving 95%+ accuracy for most languages. The system continuously learns and improves with regular updates.",
  },
  {
    question: "Does ZEZVU work with streaming services like Netflix and Disney+?",
    answer:
      "Yes! ZEZVU works with any HDMI source including streaming devices, cable boxes, gaming consoles, and Blu-ray players. It processes the audio signal directly, regardless of the content source.",
  },
  {
    question: "Do I need an internet connection to use ZEZVU?",
    answer:
      "After initial setup and language pack downloads, ZEZVU works completely offline. This ensures privacy and consistent performance without depending on internet speed.",
  },
  {
    question: "Can I customize the subtitle appearance?",
    answer:
      "You can adjust font size, color, position, background opacity, and timing. ZEZVU offers extensive customization to match your viewing preferences.",
  },
  {
    question: "What languages are supported?",
    answer:
      "ZEZVU supports over 100 languages including all major world languages. Popular options include Spanish, French, German, Japanese, Korean, Mandarin, Arabic, and many more.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Setup is incredibly simple - just connect your device to ZEZVU, then ZEZVU to your TV. The entire process takes less than 2 minutes with our guided setup wizard.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about ZEZVU</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-[#FAFAFA] rounded-xl px-6 border-none">
                <AccordionTrigger className="text-left text-[#212121] font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
