import FeaturedProjects from '@/components/sections/featured-projects'

export default function ProjectsPage() {
  return (
    <main className="pt-40 pb-24">

      <section className="max-w-6xl mx-auto px-6">

        <p
          className="
            text-sm
            uppercase
            tracking-[0.3em]
            text-violet-500
            font-semibold
          "
        >
          SELECTED WORK
        </p>

        <h1
          className="
            mt-6
            text-4xl
            md:text-7xl
            font-bold
            leading-none
            tracking-tight
            text-zinc-900
          "
        >
          Creative projects &
          modern digital experiences.
        </h1>

        <p
          className="
            mt-8
            max-w-2xl
            text-lg
            leading-relaxed
            text-zinc-600
          "
        >
          A curated collection of modern interfaces,
          frontend interaction, and cinematic visual
          storytelling.
        </p>
      </section>

      <div className="mt-5">
        <FeaturedProjects hideHeader />
      </div>

    </main>
  )
}