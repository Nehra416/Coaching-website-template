import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does the IELTS preparation course take?",
    a: "Our standard course duration is 4-8 weeks, depending on your current proficiency level. We also offer crash courses (2 weeks) and extended mentorship programs.",
  },
  {
    q: "Do you offer online classes?",
    a: "Yes, we have live interactive online batches with recorded sessions for revision, enabling you to learn from the comfort of your home.",
  },
  {
    q: "What is the batch size?",
    a: "We maintain small batch sizes of 10-12 students to ensure every student gets individual attention and feedback from the trainer.",
  },
  {
    q: "Do you assist with university applications?",
    a: "Absolutely. Our visa counseling team provides end-to-end support, from shortlisting universities to filing your visa and interview preparation.",
  },
];

export default function FAQ() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-heading font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-border"
            >
              <AccordionTrigger className="text-lg font-medium text-left text-foreground hover:text-primary transition-colors">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
