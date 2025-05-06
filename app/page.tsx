import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import ActivityCard from "@/components/activity-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">ContainerLoft</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              Sobre Nosotros
            </Link>
            <Link href="#activities" className="text-sm font-medium transition-colors hover:text-primary">
              Actividades
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contacto
            </Link>
          </nav>
          <Button asChild size="sm" className="hidden md:flex">
            <Link href="#contact">Consultar Ahora</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="container flex flex-col items-center justify-center space-y-4 py-24 text-center md:py-32">
            <div className="absolute inset-0 -z-10">
              <Image
                src="/placeholder.svg?height=800&width=1600"
                alt="Container Apartment"
                fill
                className="object-cover opacity-20"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-background/60" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Vive la Experiencia Container
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Un espacio moderno y acogedor transformado de un contenedor a un departamento único.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#contact">Consultar Disponibilidad</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#about">
                  Conocer Más <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Sobre el Departamento</h2>
                <p className="mt-4 text-muted-foreground">
                  Nuestro departamento container es una innovadora solución de vivienda que combina sostenibilidad,
                  diseño moderno y confort. Transformamos un contenedor marítimo en un espacio acogedor y completamente
                  funcional.
                </p>
                <div className="mt-8 grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Ubicación Privilegiada</h3>
                      <p className="text-sm text-muted-foreground">
                        Situado en una zona tranquila pero cercana a múltiples actividades y atracciones.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Contacto Directo</h3>
                      <p className="text-sm text-muted-foreground">
                        Comunicación directa con el propietario para resolver cualquier duda.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Interior del Container"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Owner Info */}
            <div className="mt-16 rounded-lg border bg-card p-6 shadow-sm">
              <h3 className="text-xl font-bold">Sobre el Propietario</h3>
              <div className="mt-4 flex flex-col gap-6 md:flex-row">
                <div className="flex-shrink-0">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Propietario"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium">Carlos Rodríguez</h4>
                  <p className="mt-2 text-muted-foreground">
                    Arquitecto apasionado por el diseño sostenible y la reutilización de materiales. Transformé este
                    contenedor en un espacio habitable moderno como parte de mi compromiso con la arquitectura ecológica
                    y accesible.
                  </p>
                  <div className="mt-4 flex gap-4">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">+123 456 7890</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">carlos@containerloft.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Actividades Cercanas</h2>
            <p className="mt-4 max-w-[700px] text-muted-foreground">
              Disfruta de numerosas actividades y atracciones a poca distancia de nuestro container departamento.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ActivityCard
                title="Senderismo en Montaña Verde"
                description="Rutas de senderismo para todos los niveles con vistas panorámicas impresionantes."
                distance="2.5 km"
                imageUrl="/placeholder.svg?height=400&width=600"
              />
              <ActivityCard
                title="Playa El Dorado"
                description="Hermosa playa de arena dorada perfecta para nadar, tomar el sol o practicar deportes acuáticos."
                distance="3 km"
                imageUrl="/placeholder.svg?height=400&width=600"
              />
              <ActivityCard
                title="Centro Histórico"
                description="Explora la arquitectura colonial y la historia local en el pintoresco centro histórico."
                distance="1.5 km"
                imageUrl="/placeholder.svg?height=400&width=600"
              />
              <ActivityCard
                title="Mercado Local"
                description="Mercado de productos frescos y artesanías locales que opera todos los fines de semana."
                distance="1 km"
                imageUrl="/placeholder.svg?height=400&width=600"
              />
              <ActivityCard
                title="Parque Aventura"
                description="Parque de aventuras con tirolinas, puentes colgantes y actividades para toda la familia."
                distance="4 km"
                imageUrl="/placeholder.svg?height=400&width=600"
              />
              <ActivityCard
                title="Restaurantes Gourmet"
                description="Variedad de restaurantes con cocina local e internacional a poca distancia."
                distance="0.5 km"
                imageUrl="/placeholder.svg?height=400&width=600"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contáctanos</h2>
                <p className="mt-4 text-muted-foreground">
                  ¿Tienes alguna pregunta sobre nuestro container departamento? Completa el formulario y nos pondremos
                  en contacto contigo lo antes posible.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Dirección</h3>
                      <p className="text-sm text-muted-foreground">Avenida Principal 123, Ciudad Costera</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Teléfono</h3>
                      <p className="text-sm text-muted-foreground">+123 456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">info@containerloft.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-xl font-bold">Formulario de Consulta</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-lg font-bold">ContainerLoft</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Una experiencia única de alojamiento en un container transformado.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:gap-4">
            <Link href="#about" className="hover:text-foreground">
              Sobre Nosotros
            </Link>
            <Link href="#activities" className="hover:text-foreground">
              Actividades
            </Link>
            <Link href="#contact" className="hover:text-foreground">
              Contacto
            </Link>
            <Link href="#" className="hover:text-foreground">
              Política de Privacidad
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ContainerLoft. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
