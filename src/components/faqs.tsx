import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faqs() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How accurate is the AI matching?
            </AccordionTrigger>
            <AccordionContent>
              Our AI matching system has been trained on millions of resumes and
              job descriptions, achieving an accuracy rate of over 95% in
              identifying the best candidates for a given role.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Can I integrate this with my existing ATS?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we offer integrations with most popular Applicant Tracking
              Systems. Our team can work with you to ensure a smooth integration
              with your existing workflow.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is my data secure?</AccordionTrigger>
            <AccordionContent>
              Absolutely. We use industry-standard encryption and security
              practices to protect your data. All resumes and job descriptions
              are processed in a secure environment and are never shared with
              third parties.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
