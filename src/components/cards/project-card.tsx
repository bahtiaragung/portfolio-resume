import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  image: string
}

export function ProjectCard({
  title,
  description,
  image,
}: ProjectCardProps) {
  return (
    <div className="glass-card overflow-hidden rounded-[32px]">
      <div className="relative h-[280px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-semibold">{title}</h3>

        <p className="mt-4 text-zinc-600">
          {description}
        </p>
      </div>
    </div>
  )
}