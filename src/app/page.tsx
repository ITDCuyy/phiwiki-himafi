"use client";

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
import { motion } from "framer-motion";
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

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 px-4 py-16 md:px-20"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -50, 0],
              y: [0, 100, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-4 -right-4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
          />
        </div>

        <div className="relative mx-auto grid min-h-[80vh] max-w-6xl items-center gap-12 md:grid-cols-2">
          {/* First Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8 px-2"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-5xl font-bold tracking-tight text-transparent md:text-6xl lg:text-7xl"
            >
              Your Physics Solution
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-2xl text-lg leading-relaxed text-muted-foreground"
            >
              Tim buku ajar fisika dasar oleh BSO (Badan Semi Otonom) HIMAFI
              ITB. Phiwiki ITB menyediakan sumber belajar berkualitas berupa
              bank soal dan pembahasan lengkap, serta video dikhususkan untuk
              mahasiswa TPB ITB.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="transform bg-gradient-to-r from-primary to-secondary px-8 py-4 text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:from-primary/90 hover:to-secondary/90 hover:shadow-xl"
                asChild
              >
                <Link href="https://linktr.ee/PhiwikiITB">
                  Explore Our Books
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="transform border-2 px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:bg-primary/10"
                asChild
              >
                <Link href="#features">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Second Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col items-center justify-center space-y-6 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg"
            >
              <h2 className="mb-6 text-3xl font-bold text-foreground">
                Our Main Product
              </h2>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative mx-auto mb-8 max-w-72 overflow-hidden rounded-xl shadow-2xl"
              >
                <Image
                  src="/hero.png"
                  alt="Physics Book"
                  width={288}
                  height={288}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-primary px-8 py-4 text-lg shadow-lg transition-all duration-300 hover:from-accent/90 hover:to-primary/90 hover:shadow-xl"
                  asChild
                >
                  <Link href="https://linktr.ee/PhiwikiITB">Grab it now!</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex h-10 w-6 justify-center rounded-full border-2 border-primary"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-2 h-3 w-1 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Featured Products Section */}
      <motion.section
        id="features"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative bg-gradient-to-br from-muted/40 via-background to-muted/20 px-4 py-20 md:px-20"
      >
        {/* Section background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />
        </div>

        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl"
          >
            Featured Products
          </motion.h2>

          {/* Books Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <CarouselSection title="Books" className="mb-12">
              {BOOKS_DATA.map((book, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <ProductCard {...book} />
                </motion.div>
              ))}
            </CarouselSection>
          </motion.div>

          {/* Bundles Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <CarouselSection title="Bundles">
              {BUNDLES_DATA.map((bundle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <ProductCard {...bundle} />
                </motion.div>
              ))}
            </CarouselSection>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Videos Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative px-4 py-20 md:px-20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5" />

        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16 bg-gradient-to-r from-accent to-primary bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl"
          >
            Featured Videos
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mx-10 max-w-7xl"
          >
            <Carousel className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {VIDEOS_DATA.map((video, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 pl-2 md:pl-4 lg:basis-1/3"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="h-full"
                    >
                      <VideoCard {...video} />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="transition-colors hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="transition-colors hover:bg-primary hover:text-primary-foreground" />
            </Carousel>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary px-8 py-4 text-lg shadow-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-xl"
                  asChild
                >
                  <Link href="https://www.youtube.com/@PHIWIKIITB">
                    Lihat Semua Video
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Us Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative"
      >
        {/* Full-width background header */}
        <div className="relative h-96 overflow-hidden md:h-[500px] lg:h-screen">
          <Image
            src="/our-team.png"
            alt="Physics Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />

          {/* Mobile title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute inset-0 flex items-center justify-center lg:invisible"
          >
            <h2 className="text-5xl font-bold text-white md:text-6xl">
              About Us
            </h2>
          </motion.div>

          {/* Content overlay for lg+ screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="invisible absolute inset-0 flex items-center justify-center lg:visible"
          >
            <div className="mx-auto max-w-5xl px-8 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mb-8 text-6xl font-bold text-white xl:text-7xl"
              >
                About Us
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="max-w-4xl px-2 text-xl leading-relaxed text-white/95 xl:text-2xl"
              >
                Phiwiki ITB adalah sebuah Badan Semi Otonom (BSO) HIMAFI ITB
                yang bertujuan untuk membuat karya buku ajar Fisika Dasar
                beserta soal dan pembahasan untuk mahasiswa Tahap Persiapan
                Bersama (TPB) ITB. Phiwiki ITB berkomitmen menyediakan materi
                yang mudah dipahami, komprehensif, dan sesuai dengan kurikulum
                terbaru.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8"
              >
                <Button
                  className="bg-gradient-to-r from-primary to-secondary px-8 py-4 text-lg shadow-xl transition-all duration-300 hover:from-primary/90 hover:to-secondary/90 hover:shadow-2xl"
                  variant="default"
                  size="lg"
                  asChild
                >
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Content section for smaller screens */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-muted/40 to-background px-4 py-16 md:px-20 lg:hidden"
        >
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Phiwiki ITB adalah sebuah Badan Semi Otonom (BSO) HIMAFI ITB yang
              bertujuan untuk membuat karya buku ajar Fisika Dasar beserta soal
              dan pembahasan untuk mahasiswa Tahap Persiapan Bersama (TPB) ITB.
              Phiwiki ITB berkomitmen menyediakan materi yang mudah dipahami,
              komprehensif, dan sesuai dengan kurikulum terbaru.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8"
            >
              <Button
                className="bg-gradient-to-r from-primary to-secondary px-8 py-4 text-lg shadow-lg transition-all duration-300 hover:from-primary/90 hover:to-secondary/90 hover:shadow-xl"
                size="lg"
                asChild
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        id="faq"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative bg-gradient-to-br from-muted/40 via-background to-accent/5 px-4 py-20 md:px-20"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/3 top-1/3 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
        </div>

        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Accordion
              type="single"
              collapsible
              className="mx-auto max-w-3xl space-y-4"
            >
              {FAQ_DATA.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem
                    value={`item-${index + 1}`}
                    className="rounded-lg border border-border/50 bg-card/50 px-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-card/80 hover:shadow-md"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold transition-colors hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pt-2 text-base leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative border-t bg-gradient-to-br from-card via-background to-muted/20"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="bg-primary/3 absolute left-1/4 top-0 h-64 w-64 rounded-full blur-3xl" />
          <div className="bg-secondary/3 absolute bottom-0 right-1/4 h-80 w-80 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-12 md:grid-cols-3"
          >
            <motion.div whileHover={{ scale: 1.02 }} className="space-y-4">
              <h3 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-2xl font-bold text-transparent">
                Phiwiki ITB
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                Sebuah tim gacor.
                <br />
                Gedung Fisika, Jl. Ganesha No. 10, Bandung
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Tautan</h3>
              <ul className="space-y-3">
                {[
                  { href: "/about", text: "Tentang" },
                  { href: "https://linktr.ee/PhiwikiITB", text: "Buku" },
                  { href: "/contact", text: "Kontak" },
                ].map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors duration-300 hover:text-primary hover:underline"
                    >
                      {link.text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Media Sosial
              </h3>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <SocialLink {...social} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 border-t pt-8 text-center"
          >
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Phiwiki ITB. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </main>
  );
}
