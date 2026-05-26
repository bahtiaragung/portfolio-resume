'use client'

import { useState } from 'react'
import { projects } from '../../data/projects'

export default function FeaturedProjects({
  hideHeader = false,
}: {
  hideHeader?: boolean
}) {
  const [selectedProject, setSelectedProject] =
    useState<any>(null)

  return (
    <section className="py-32 px-6">

      <div className="max-w-6xl mx-auto">

        {!hideHeader && (
          <>
            <p className="text-violet-500 uppercase tracking-[0.3em] text-sm mb-4">
              Projects
            </p>

            <h2 className="text-5xl font-bold mb-6">
              Selected Creative Work
            </h2>

            <p className="text-zinc-500 max-w-2xl mb-16">
              A curated collection of modern interfaces,
              creative systems, and meaningful digital
              experiences.
            </p>
          </>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map(
            (project: any, index: number) => (

              <div
                key={index}
                onClick={() =>
                  setSelectedProject(project)
                }
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  cursor-pointer
                "
              >

                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="
                    w-full
                    h-[420px]
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-black/45" />

                <div className="
                  absolute
                  inset-0
                  flex
                  flex-col
                  justify-end
                  p-8
                  text-white
                ">

                  <p className="
                    text-sm
                    uppercase
                    tracking-widest
                    mb-3
                  ">
                    {project.category}
                  </p>

                  <h3 className="
                    text-4xl
                    font-bold
                    leading-tight
                    mb-4
                  ">
                    {project.title}
                  </h3>

                  <p className="
                    text-white
                    max-w-md
                    leading-relaxed
                  ">
                    {project.description}
                  </p>

                </div>
              </div>
            )
          )}
        </div>
      </div>

      {selectedProject && (

        <div className="
          fixed
          inset-0
          z-50
          flex
          items-center
          justify-center
          bg-black/80
          p-6
        ">

          <div className="
            relative
            w-full
            max-w-6xl
            max-h-[90vh]
            overflow-y-auto
            rounded-[32px]
            bg-white
          ">

            <button
              onClick={() =>
                setSelectedProject(null)
              }
              className="
                absolute
                top-5
                right-5
                z-50
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white
                text-zinc-900
              "
            >
              ✕
            </button>

            <div className="p-10">

              <p className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-violet-500
                mb-4
              ">
                {selectedProject.category}
              </p>

              <h2 className="
                text-5xl
                font-bold
                mb-6
              ">
                {selectedProject.title}
              </h2>

              <p className="
                text-zinc-600
                mb-12
                max-w-2xl
                leading-relaxed
              ">
                {selectedProject.description}
              </p>

              <div className="space-y-8">

                {selectedProject.images.map(
                  (
                    img: string,
                    index: number
                  ) => (

                    <img
                      key={index}
                      src={img}
                      alt=""
                      className="
                        w-full
                        rounded-3xl
                      "
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}