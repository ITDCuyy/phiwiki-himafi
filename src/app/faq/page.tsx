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
import {
  Search,
  MessageCircle,
  Mail,
  HelpCircle,
  CreditCard,
  Settings,
  Zap,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Component() {
  const faqCategories = [
    {
      title: "General Questions",
      icon: HelpCircle,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
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
      icon: CreditCard,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
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
      icon: Settings,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
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
      icon: Zap,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <div className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 opacity-10"></div>
        <div className="absolute left-1/4 top-0 h-72 w-72 animate-pulse rounded-full bg-purple-300 opacity-20 mix-blend-multiply blur-xl filter"></div>
        <div className="absolute right-1/4 top-0 h-72 w-72 animate-pulse rounded-full bg-cyan-300 opacity-20 mix-blend-multiply blur-xl filter delay-1000"></div>

        <div className="container relative mx-auto px-4 py-16">
          <div className="space-y-6 text-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
            <h1 className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-600">
              Find answers to common questions about our service, features, and
              policies. We're here to help you succeed.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mx-auto mt-10 max-w-md">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
              <Input
                placeholder="Search FAQs..."
                className="h-12 border-gray-200 bg-white/80 pl-12 shadow-lg backdrop-blur-sm transition-all duration-300 focus:border-blue-500 focus:shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl space-y-8">
          {faqCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={categoryIndex}
                className="overflow-hidden border-0 bg-white/80 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl"
              >
                <CardHeader className={`${category.bgColor} relative`}>
                  <div className="flex items-center space-x-4">
                    <div
                      className={`inline-flex h-12 w-12 items-center justify-center bg-gradient-to-r ${category.color} rounded-xl shadow-lg`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900">
                        {category.title}
                      </CardTitle>
                      <CardDescription className="mt-1 text-gray-600">
                        Common questions about {category.title.toLowerCase()}
                      </CardDescription>
                    </div>
                  </div>
                  {/* Decorative gradient */}
                  <div
                    className={`absolute right-0 top-0 h-32 w-32 bg-gradient-to-br ${category.color} -translate-y-8 translate-x-8 rounded-full opacity-10`}
                  ></div>
                </CardHeader>
                <CardContent className="p-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full space-y-2"
                  >
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`item-${categoryIndex}-${faqIndex}`}
                        className="rounded-lg border border-gray-100 px-4 transition-colors duration-200 hover:border-gray-200"
                      >
                        <AccordionTrigger className="py-4 text-left font-semibold text-gray-900 hover:text-gray-700">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 leading-relaxed text-gray-600">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mx-auto mt-20 max-w-4xl">
          <Card className="overflow-hidden border-0 bg-gradient-to-r from-blue-50 via-white to-purple-50 shadow-2xl">
            <CardHeader className="relative pb-6 text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-3xl font-bold text-transparent">
                  Still have questions?
                </CardTitle>
                <CardDescription className="mt-2 text-lg text-gray-600">
                  {
                    "Can't find what you're looking for? We're here to help you succeed."
                  }
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pb-8">
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button className="flex h-12 items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-500 px-8 shadow-lg transition-all duration-300 hover:from-pink-600 hover:to-rose-600 hover:shadow-xl">
                  <Instagram className="h-5 w-5" />
                  Follow on Instagram
                </Button>
                <Button className="flex h-12 items-center gap-3 bg-gradient-to-r from-sky-500 to-blue-500 px-8 shadow-lg transition-all duration-300 hover:from-sky-600 hover:to-blue-600 hover:shadow-xl">
                  <Twitter className="h-5 w-5" />
                  Follow on Twitter
                </Button>
                <Button
                  variant="outline"
                  className="flex h-12 items-center gap-3 border-2 border-gray-200 bg-white px-8 shadow-lg transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-xl"
                >
                  <Mail className="h-5 w-5" />
                  Email Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
