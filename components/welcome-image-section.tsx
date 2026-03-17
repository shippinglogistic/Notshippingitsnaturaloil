import Image from "next/image"

export function WelcomeImageSection() {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-br from-amber-50 to-background">
      <div className="mx-auto px-4 w-[85%]">
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[450px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/lifestyle-wellness-syringes-nature.jpg"
            alt="Cannabis wellness lifestyle with nature"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1200px"
          />
        </div>
      </div>
    </section>
  )
}
