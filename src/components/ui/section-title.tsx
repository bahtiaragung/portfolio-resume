interface SectionTitleProps {
    eyebrow?: string
    title: string
    description?: string
  }
  
  export function SectionTitle({
    eyebrow,
    title,
    description,
  }: SectionTitleProps) {
    return (
      <div className="mb-14 max-w-2xl">
        {eyebrow && (
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#7B61FF]">
            {eyebrow}
          </p>
        )}
  
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          {title}
        </h2>
  
        {description && (
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            {description}
          </p>
        )}
      </div>
    )
  }