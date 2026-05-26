"use client"

import { useState } from "react"
import { projects } from "@/data/projects"

export default function Home() {

  const [selectedProject, setSelectedProject] = useState(null)

  return (

    <main className="min-h-screen bg-[#f5f3ff] px-6 py-20">

      <section className="max-w-6xl mx-auto">

        <div className="mb-14">

          <p className="uppercase tracking-[0.3em] text-violet-500 text-sm mb-4">
            Projects
          </p>

          <h1 className="text-6xl font-bold mb-6">
            Selected Creative Work
          </h1>

          <p className="text-zinc-600 max-w-2xl text-lg">
            A curated collection of modern interfaces,
            creative systems, and meaningful digital experiences.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project) => (

            <div
              key={project.slug}
              onClick={() => setSelectedProject(project)}
              className="group overflow-hidden rounded-[32px] bg-white shadow-xl cursor-pointer"
            >

              <div className="overflow-hidden">

                <img
                  src={project.cover}
                  alt={project.title}
                  className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              <div className="p-8">

                <p className="text-violet-500 uppercase text-sm tracking-[0.2em] mb-3">
                  {project.category}
                </p>

                <h2 className="text-3xl font-bold mb-4">
                  {project.title}
                </h2>

                <p className="text-zinc-600 leading-relaxed">
                  {project.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {selectedProject && (

        <div className="fixed inset-0 z-50 bg-black/70 overflow-y-auto p-6">

          <div className="max-w-5xl mx-auto bg-white rounded-[40px] overflow-hidden relative">

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 bg-black/50 text-zinc-900 w-12 h-12 rounded-full text-2xl"
            >
              ×
            </button>

            <div className="p-10">

              <p className="uppercase tracking-[0.2em] text-violet-500 mb-3">
                {selectedProject.category}
              </p>

              <h2 className="text-5xl font-bold mb-6">
                {selectedProject.title}
              </h2>

              <p className="text-zinc-600 text-lg mb-10">
                {selectedProject.description}
              </p>

              <div className="space-y-8">

                {selectedProject.images.map((img, index) => (

                  <img
                    key={index}
                    src={img}
                    alt=""
                    className="w-full rounded-[28px]"
                  />

                ))}

              </div>

            </div>

          </div>

        </div>

      )}

    </main>

  )

}