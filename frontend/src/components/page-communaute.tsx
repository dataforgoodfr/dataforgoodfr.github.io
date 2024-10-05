'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Users, Lightbulb, Heart, GraduationCap, Globe, Eye, Target, Star } from "lucide-react"

export function PageCommunaute() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-[#35c4d7] text-white">
        <Link className="flex items-center justify-center" href="#">
          <Globe className="h-6 w-6" />
          <span className="sr-only">Projets Communautaires</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#vision">
            Notre Vision
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#projets">
            Projets
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#apropos">
            À Propos
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#rejoindre">
            Nous Rejoindre
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Nature background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Façonnons l'Avenir, Ensemble
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Rejoignez notre communauté d'acteurs du changement et travaillez sur des projets concrets qui répondent
                  aux défis réels dans les domaines de la santé, de l'environnement, de l'inclusion sociale, de l'éducation
                  et de la citoyenneté.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#cce03d] px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-[#cce03d]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#cce03d] disabled:pointer-events-none disabled:opacity-50"
                  href="#rejoindre"
                >
                  S'impliquer
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#cce03d] disabled:pointer-events-none disabled:opacity-50"
                  href="#projets"
                >
                  Explorer les Projets
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="vision" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="border-[#35c4d7]">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Eye className="h-12 w-12 text-[#fca311]" />
                  <h3 className="text-2xl font-bold text-center text-[#35c4d7]">Notre Vision</h3>
                  <p className="text-center text-muted-foreground">
                    Un monde où chaque individu a le pouvoir de contribuer à des changements positifs et durables dans sa communauté et au-delà.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-[#35c4d7]">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Target className="h-12 w-12 text-[#fca311]" />
                  <h3 className="text-2xl font-bold text-center text-[#35c4d7]">Notre Mission</h3>
                  <p className="text-center text-muted-foreground">
                    Catalyser et soutenir des projets innovants qui répondent aux défis sociaux et environnementaux pressants, en favorisant la collaboration et l'engagement communautaire.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-[#35c4d7]">
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Star className="h-12 w-12 text-[#fca311]" />
                  <h3 className="text-2xl font-bold text-center text-[#35c4d7]">Nos Valeurs</h3>
                  <ul className="text-center text-muted-foreground list-disc list-inside">
                    <li>Collaboration</li>
                    <li>Innovation</li>
                    <li>Durabilité</li>
                    <li>Inclusion</li>
                    <li>Transparence</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="projets" className="w-full py-12 md:py-24 lg:py-32 bg-[#cce03d]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-[#35c4d7]">
              Nos Domaines d'Action
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Heart className="h-12 w-12 text-[#fca311]" />
                  <h3 className="text-2xl font-bold text-center">Santé</h3>
                  <p className="text-center text-muted-foreground">
                    Développer des solutions innovantes pour améliorer l'accès aux soins et le bien-être pour tous.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Globe className="h-12 w-12 text-[#fca311]" />
                  <h3 className="text-2xl font-bold text-center">Environnement</h3>
                  <p className="text-center text-muted-foreground">
                    Créer des projets durables pour protéger notre planète et lutter contre le changement climatique.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Users className="h-12 w-12 text-[#fca311]" />
                  <h3 className="text-2xl font-bold text-center">Inclusion Sociale</h3>
                  <p className="text-center text-muted-foreground">
                    Construire des initiatives qui favorisent l'égalité et l'inclusivité dans nos communautés.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <GraduationCap className="h-12 w-12 text-[#fca311]" />
                  <h3 className="text-2xl font-bold text-center">Éducation</h3>
                  <p className="text-center text-muted-foreground">
                    Concevoir des programmes pour améliorer les opportunités d'apprentissage et le développement des
                    compétences pour tous les âges.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Lightbulb className="h-12 w-12 text-[#fca311]" />
                  <h3 className="text-2xl font-bold text-center">Citoyenneté</h3>
                  <p className="text-center text-muted-foreground">
                    Encourager la participation active et l'engagement dans la vie civique et les processus démocratiques.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="apropos" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#35c4d7]">À Propos de Notre Communauté</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nous sommes un groupe diversifié d'individus unis par un objectif commun : créer un changement positif
                  grâce à des projets concrets et sur mesure. Notre communauté rassemble des experts, des passionnés et des
                  acteurs du changement de divers domaines pour collaborer sur des initiatives qui font une réelle
                  différence.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="rejoindre" className="w-full py-12 md:py-24 lg:py-32 bg-[#cce03d]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#35c4d7]">Rejoignez Notre Communauté</h2>
                <p className="max-w-[600px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Prêt à faire la différence ? Rejoignez notre communauté et commencez à collaborer sur des projets qui
                  comptent.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <Input
                    className="max-w-lg flex-1 border-[#35c4d7]"
                    placeholder="Entrez votre email"
                    type="email"
                  />
                  <Button
                    type="submit"
                    className="bg-[#fca311] text-white hover:bg-[#fca311]/90"
                  >
                    S'inscrire
                  </Button>
                </form>
                <p className="text-xs text-black">
                  En vous inscrivant, vous acceptez nos{" "}
                  <Link className="underline underline-offset-2 text-[#35c4d7]" href="#">
                    Conditions Générales
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#35c4d7] text-white">
        <p className="text-xs">© 2024 Projets Communautaires. Tous droits réservés.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Conditions d'utilisation
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Confidentialité
          </Link>
        </nav>
      </footer>
    </div>
  )
}