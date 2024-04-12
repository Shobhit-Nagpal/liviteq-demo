import Image from "next/image";
import React from "react";

export default function Importance() {
  return (
    <section className="py-12 lg:py-24 xl:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col-reverse items-center justify-center gap-6 lg:flex-row lg:gap-12">
          <div className="flex-shrink-0">
            <Image
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="393"
              src="/importance.png"
              width="700"
            />
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                The Importance of Cell Counting
              </h2>
              <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Cell counting is crucial in various aspects of biological
                research and medical diagnostics. It provides valuable
                information about cell proliferation, viability, and morphology,
                which are essential for understanding disease mechanisms, drug
                responses, and tissue regeneration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
