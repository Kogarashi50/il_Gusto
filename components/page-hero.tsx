import Image from 'next/image'

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string
  title: string
  description?: string
  image?: string
  imageAlt?: string
}) {
  if (!image) {
    return (
      <section className="border-b border-border bg-muted/50">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-16 sm:px-6 sm:py-20">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="max-w-2xl font-serif text-4xl leading-tight text-balance sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-xl leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      </section>
    )
  }

  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <Image
        src={image || '/placeholder.svg'}
        alt={imageAlt ?? ''}
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[oklch(0.2_0.02_50_/_0.72)]" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-20 sm:px-6 sm:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="max-w-2xl font-serif text-4xl leading-tight text-balance text-[oklch(0.97_0.012_84)] sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-xl leading-relaxed text-[oklch(0.92_0.014_84_/_0.8)]">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
