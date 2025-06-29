import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Search, MessageCircle, Mail } from "lucide-react";

export default function FAQPage() {
  const faqCategories = [
    {
      title: "General Questions",
      faqs: [
        {
          question: "What is your service about?",
          answer:
            "Our service provides comprehensive solutions for businesses looking to streamline their operations and improve efficiency. We offer a range of tools and features designed to help you manage your workflow, collaborate with team members, and achieve your business goals.",
        },
        {
          question: "How do I get started?",
          answer:
            "Getting started is easy! Simply sign up for an account, choose your plan, and follow our onboarding process. We'll guide you through setting up your workspace and connecting your team members.",
        },
        {
          question: "Is there a free trial available?",
          answer:
            "Yes, we offer a 14-day free trial for all new users. No credit card required. You can explore all features and see how our platform works for your business before making a commitment.",
        },
      ],
    },
    {
      title: "Account & Billing",
      faqs: [
        {
          question: "How do I update my billing information?",
          answer:
            "You can update your billing information by going to your account settings and clicking on the 'Billing' tab. From there, you can update your payment method, billing address, and view your invoice history.",
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer:
            "Yes, you can cancel your subscription at any time. Your account will remain active until the end of your current billing period, and you won't be charged for the next cycle.",
        },
        {
          question: "Do you offer refunds?",
          answer:
            "We offer a 30-day money-back guarantee for annual plans. For monthly plans, we provide prorated refunds on a case-by-case basis. Please contact our support team to discuss your specific situation.",
        },
      ],
    },
    {
      title: "Technical Support",
      faqs: [
        {
          question: "What browsers do you support?",
          answer:
            "We support all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your preferred browser for the best experience.",
        },
        {
          question: "Is my data secure?",
          answer:
            "Absolutely. We use enterprise-grade security measures including SSL encryption, regular security audits, and compliance with industry standards like SOC 2 and GDPR. Your data is stored in secure, redundant data centers.",
        },
        {
          question: "Do you have an API?",
          answer:
            "Yes, we provide a comprehensive REST API that allows you to integrate our service with your existing tools and workflows. Full documentation is available in our developer portal.",
        },
        {
          question: "What if I need help setting up?",
          answer:
            "We offer multiple support channels including live chat, email support, and comprehensive documentation. For enterprise customers, we also provide dedicated onboarding assistance and training sessions.",
        },
      ],
    },
    {
      title: "Features & Functionality",
      faqs: [
        {
          question: "Can I integrate with other tools?",
          answer:
            "Yes, we offer integrations with popular tools like Slack, Google Workspace, Microsoft 365, Salesforce, and many others. You can find the full list of integrations in your account settings.",
        },
        {
          question: "Is there a mobile app?",
          answer:
            "Yes, we have mobile apps available for both iOS and Android. You can download them from the App Store or Google Play Store. The mobile apps sync seamlessly with your web account.",
        },
        {
          question: "How many team members can I add?",
          answer:
            "The number of team members depends on your plan. Our Starter plan includes up to 5 members, Professional plan includes up to 25 members, and Enterprise plan offers unlimited members.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Find answers to common questions about our service, features, and
              policies.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mx-auto mt-8 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
              <Input placeholder="Search FAQs..." className="pl-10" />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-4xl space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="text-2xl">{category.title}</CardTitle>
                <CardDescription>
                  Common questions about {category.title.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`item-${categoryIndex}-${faqIndex}`}
                    >
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mx-auto mt-16 max-w-4xl">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Still have questions?</CardTitle>
              <CardDescription>
                {"Can't find what you're looking for? We're here to help."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Start Live Chat
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 bg-transparent"
                >
                  <Mail className="h-4 w-4" />
                  Email Support
                </Button>
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Our support team typically responds within 24 hours
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
