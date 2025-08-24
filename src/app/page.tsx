import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { HydrateClient } from "~/trpc/server";
import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { ProductCard } from "~/components/product-card";
import { VideoCard } from "~/components/video-card";
import { CarouselSection } from "~/components/carousel-section";
import { SocialLink } from "~/components/social-link";
import type { ProductData, VideoData, FAQData, SocialLinkData } from "~/types";

// Data constants
const BOOKS_DATA: ProductData[] = [
  {
    title: "[PRE-ORDER] Fisika Dasar I 2025",
    description:
      "Buku ajar lengkap untuk mata kuliah FI-1101 dengan pembahasan mendalam",
    price: "Rp ??",
    image: "/[PRE-ORDER]-PHIWIKI-ITB-Fisika-Dasar-I-2025.png",
    link: "https://bit.ly/BukuDariMasaDepan",
  },
  {
    title: "Fisika Dasar II 2025",
    description: "Lanjutan materi fisika dasar untuk semester 2",
    price: "Rp ??",
    image: "/PHIWIKI-ITB-Fisika-Dasar-II-2025.png",
    link: "https://bit.ly/BukuDariMasaDepan",
  },
  {
    title: "Fisika Dasar I 2024",
    description: "Edisi tahun lalu",
    price: "Rp ??",
    image: "/PHIWIKI-ITB-Fisika-Dasar-I-2024.png",
    link: "https://bit.ly/BukuDariMasaDepan",
  },
];

const BUNDLES_DATA: ProductData[] = [
  {
    title: "Bundles",
    description: "Paket lengkap kebutuhan TPB dengan harga potong",
    price: "Rp 89.900-335.000",
    originalPrice: "Rp 92.500-337.500",
    image: "/bundles.jpg",
    link: "https://bit.ly/BukuDariMasaDepan",
    badge: { text: "HEMAT ??%", variant: "primary" as const },
  },
  {
    title: "Phiwiki 911",
    description: "Paket lengkap untuk kebutuhan lab TPB",
    // price: "Rp 127.000",
    // originalPrice: "Rp 150.000",
    image: "/phiwiki-911.jpg",
    link: "https://bit.ly/BukuDariMasaDepan",
    badge: { text: "HEMAT ??%", variant: "secondary" as const },
  },
  {
    title: "Bundle Digital",
    description:
      "Akses digital ke semua materi + bank soal + video pembelajaran",
    price: "Rp 99.000",
    image:
      "https://cornwallwithkids.co.uk/wp-content/uploads/2020/11/Coming-soon.jpg",
    link: "/products/bundle-digital",
    badge: { text: "DIGITAL", variant: "accent" as const },
  },
];

const VIDEOS_DATA: VideoData[] = [
  {
    title: "Mekanika Klasik - Dasar",
    description: "Penjelasan konsep dasar mekanika klasik untuk mahasiswa TPB",
    thumbnail: "video1.png",
    videoUrl: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
  },
  {
    title: "Termodinamika - Entropi",
    description: "Memahami konsep entropi dalam termodinamika dengan mudah",
    thumbnail: "video2.png",
    videoUrl: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
  },
  {
    title: "Gelombang & Optik",
    description: "Eksplorasi fenomena gelombang dan optik geometris",
    thumbnail: "video3.png",
    videoUrl: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
  },
];

const FAQ_DATA: FAQData[] = [
  {
    question: "Apa itu Phiwiki ITB?",
    answer:
      "Phiwiki ITB adalah tim buku ajar fisika dasar yang beroperasi di bawah naungan Himpunan Mahasiswa Fisika (HIMAFI) ITB.",
  },
  {
    question: "Bagaimana cara bergabung dengan tim Phiwiki?",
    answer:
      "Perekrutan anggota baru biasanya dibuka setiap tahun ajaran baru. Informasi lebih lanjut akan diumumkan melalui kanal media sosial HIMAFI ITB.",
  },
  {
    question: "Di mana saya bisa mendapatkan buku Phiwiki?",
    answer:
      "Buku kami dapat dipesan melalui tautan yang kami sediakan saat periode pemesanan dibuka.",
  },
];

const SOCIAL_LINKS: SocialLinkData[] = [
  {
    href: "https://www.instagram.com/phiwiki.itb/itb",
    icon: FaInstagram,
    label: "Instagram Phiwiki ITB",
  },
  {
    href: "https://www.tiktok.com/@phiwiki.itb?_t=ZS-8yG48NYbTlY&_r=1 ",
    icon: FaTiktok,
    label: "Tiktok Phiwiki ITB",
  },
  {
    href: "https://www.youtube.com/@PHIWIKIITB ",
    icon: FaYoutube,
    label: "YouTube Phiwiki ITB",
  },
  {
    href: "https://x.com/phiwikiitb ",
    icon: FaXTwitter,
    label: "X Phiwiki ITB",
  },
  {
    href: "https://www.linkedin.com/company/phiwiki-itb/",
    icon: FaLinkedin,
    label: "LinkedIn Phiwiki ITB",
  },
];

export default async function HomePage() {
  return (
    <HydrateClient>
      <main className="bg-background text-foreground">
        {/* Hero Section */}
        <section className="min-h-[80vh] bg-gradient-to-b from-primary/10 to-transparent px-4 py-16 md:px-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            {/* First Column */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Your Physics Solution
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Tim buku ajar fisika dasar oleh BSO (Badan Semi Otonom) HIMAFI
                ITB. Phiwiki ITB menyediakan sumber belajar berkualitas berupa
                bank soal dan pembahasan lengkap, serta video dikhususkan untuk
                mahasiswa TPB ITB.
              </p>
            </div>

            {/* Second Column */}
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="rounded-lg bg-white/10 p-8 backdrop-blur-sm">
                <h2 className="mb-4 text-2xl font-bold">Our main product</h2>
                <div className="relative mx-auto mb-6 max-w-64 overflow-hidden rounded-lg">
                  <Image
                    src="/hero.png"
                    alt="Physics Book"
                    width={256}
                    height={256}
                    className="h-full w-full object-cover"
                  />
                </div>
                <Button size="lg" asChild>
                  <Link href="https://linktr.ee/PhiwikiITB">Grab it now!</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="bg-muted/40 px-4 py-16 md:px-20">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Featured Products
          </h2>

          {/* Books Section */}
          <CarouselSection title="Books" className="mb-12">
            {BOOKS_DATA.map((book, index) => (
              <ProductCard key={index} {...book} />
            ))}
          </CarouselSection>

          {/* Bundles Section */}
          <CarouselSection title="Bundles">
            {BUNDLES_DATA.map((bundle, index) => (
              <ProductCard key={index} {...bundle} />
            ))}
          </CarouselSection>
        </section>

        {/* Featured Videos Section */}
        <section className="px-4 py-16 md:px-20">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Featured Videos
          </h2>
          <div className="mx-10 max-w-6xl">
            <Carousel className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {VIDEOS_DATA.map((video, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 pl-2 md:pl-4 lg:basis-1/3"
                  >
                    <VideoCard {...video} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <Link href="https://www.youtube.com/@PHIWIKIITB">
                  Lihat Semua Video
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="relative">
          {/* Full-width background header */}
          <div className="relative h-64 overflow-hidden md:h-80 lg:h-screen">
            <Image
              src="/our-team.png"
              alt="Physics Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center justify-center lg:invisible">
              <h2 className="text-4xl font-bold text-white md:text-5xl">
                About Us
              </h2>
            </div>

            {/* Content overlay for lg+ screens */}
            <div className="ems-center invisible absolute inset-0 flex items-center justify-center lg:visible">
              <div className="mx-auto max-w-4xl px-4 text-center">
                <h2 className="mb-8 text-6xl font-bold text-white">About Us</h2>
                <p className="text-xl leading-relaxed text-white/90">
                  Phiwiki ITB adalah sebuah Badan Semi Otonom (BSO) HIMAFI ITB
                  yang bertujuan untuk membuat karya buku ajar Fisika Dasar
                  beserta soal dan pembahasan untuk mahasiswa Tahap Persiapan
                  Bersama (TPB) ITB. Phiwiki ITB berkomitmen menyediakan materi
                  yang mudah dipahami, komprehensif, dan sesuai dengan kurikulum
                  terbaru.
                </p>
                <Button
                  className="mt-8"
                  variant="outline"
                  size="lg"
                  asChild
                ></Button>
              </div>
            </div>
          </div>

          {/* Content section for smaller screens */}
          <div className="px-4 py-16 md:px-20 lg:hidden">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                Phiwiki ITB adalah sebuah Badan Semi Otonom (BSO) HIMAFI ITB
                yang bertujuan untuk membuat karya buku ajar Fisika Dasar
                beserta soal dan pembahasan untuk mahasiswa Tahap Persiapan
                Bersama (TPB) ITB. Phiwiki ITB berkomitmen menyediakan materi
                yang mudah dipahami, komprehensif, dan sesuai dengan kurikulum
                terbaru.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted/40 px-4 py-16 md:px-20">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="mx-auto max-w-2xl">
            {FAQ_DATA.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Footer */}
        <footer className="border-t bg-background">
          <div className="mx-auto max-w-6xl px-4 py-8 md:px-20">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-lg font-semibold">Phiwiki ITB</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Sebuah tim gacor.
                  <br />
                  Gedung Fisika, Jl. Ganesha No. 10, Bandung
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Tautan</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>
                    <Link
                      href="/about"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Tentang
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/books"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Buku
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Kontak
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Media Sosial</h3>
                <div className="mt-2 flex space-x-4">
                  {SOCIAL_LINKS.map((social, index) => (
                    <SocialLink key={index} {...social} />
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Phiwiki ITB. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </HydrateClient>
  );
}
