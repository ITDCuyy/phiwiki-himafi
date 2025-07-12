import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { HydrateClient } from "~/trpc/server";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default async function HomePage() {
  return (
    <HydrateClient>
      <main className="bg-background text-foreground">
        {/* Hero Section */}
        <section className="flex h-[80vh] flex-col items-center justify-center bg-gradient-to-b from-primary/10 to-transparent text-center">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
            Phiwiki ITB
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Tim buku ajar fisika dasar oleh HIMAFI ITB. Menyediakan sumber
            belajar berkualitas untuk mahasiswa TPB ITB.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild>
              <Link href="/books">Lihat Buku</Link>
            </Button>
            <Button variant="outline">Gabung Tim</Button>
          </div>
        </section>

        {/* Ongoing Program Section */}
        <section className="px-4 py-16 md:px-20">
          <h2 className="mb-8 text-center text-3xl font-bold">Edisi Terbaru</h2>
          <div className="mx-auto max-w-4xl">
            <Card className="overflow-hidden md:flex">
              <div className="relative h-64 md:h-auto md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?q=80&w=2124&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Book Cover"
                  layout="fill"
                  className="h-full w-full"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <h3 className="text-2xl font-bold">
                  Buku Fisika Dasar IIA Edisi 2024
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Edisi terbaru buku ajar Fisika Dasar IIA (FI-1201) yang
                  mencakup materi Mekanika Kuantum, Relativitas, dan Fisika
                  Modern.
                </p>
                <p className="mt-4">
                  Tersedia dalam bentuk cetakan. Preorder sekarang!
                </p>
                <Button className="mt-6" asChild>
                  <Link href="/books/fisika-dasar-2a-2024">Lihat Detail</Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Posts & Blogs Section */}
        <section className="bg-muted/40 px-4 py-16 md:px-20">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Tulisan & Kabar
          </h2>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder for posts */}
            {[1, 2, 3].map((post) => (
              <Card key={post}>
                <CardHeader>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&text=Post+${post}`}
                      alt={`Post ${post}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <CardTitle className="pt-4">
                    Konsep Entropi dalam Termodinamika {post}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ringkasan singkat dari tulisan atau kabar yang ada di sini.
                    Ini akan menarik pembaca untuk mengklik dan membaca lebih
                    lanjut.
                  </p>
                  <Button variant="link" className="mt-4 p-0" asChild>
                    <Link href={`/posts/${post}`}>Baca Selengkapnya</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* About Us Section */}
        <section className="px-4 py-16 md:px-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Tentang Phiwiki</h2>
            <p className="text-muted-foreground">
              Phiwiki ITB adalah tim di bawah HIMAFI ITB yang berfokus pada
              pembuatan dan pengembangan buku ajar Fisika Dasar untuk mahasiswa
              Tahap Persiapan Bersama (TPB) ITB. Kami berkomitmen menyediakan
              materi yang mudah dipahami, komprehensif, dan sesuai dengan
              kurikulum terbaru.
            </p>
            <Button className="mt-6" variant="outline" asChild>
              <Link href="/about">Pelajari Lebih Lanjut</Link>
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted/40 px-4 py-16 md:px-20">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="mx-auto max-w-2xl">
            <AccordionItem value="item-1">
              <AccordionTrigger>Apa itu Phiwiki ITB?</AccordionTrigger>
              <AccordionContent>
                Phiwiki ITB adalah tim buku ajar fisika dasar yang beroperasi di
                bawah naungan Himpunan Mahasiswa Fisika (HIMAFI) ITB.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Bagaimana cara bergabung dengan tim Phiwiki?
              </AccordionTrigger>
              <AccordionContent>
                Perekrutan anggota baru biasanya dibuka setiap tahun ajaran
                baru. Informasi lebih lanjut akan diumumkan melalui kanal media
                sosial HIMAFI ITB.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Di mana saya bisa mendapatkan buku Phiwiki?
              </AccordionTrigger>
              <AccordionContent>
                Buku kami dapat dipesan melalui tautan yang kami sediakan saat
                periode pemesanan dibuka.
              </AccordionContent>
            </AccordionItem>
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
                  <Link
                    href="https://www.instagram.com/himafi.itb"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://x.com/HIMAFI_ITB"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <FaTwitter className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/himafiitb/"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </Link>
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
