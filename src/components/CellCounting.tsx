import Image from "next/image";
import React from "react";

export default function CellCounting() {
  return (
    <section className="bg-gray-200 py-12 lg:py-24 xl:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-12">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Cell Counting in Biology
              </h1>
              <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Accurate cell counting is essential for many biological
                experiments. This website provides an overview of the importance
                of cell counting, methods used in biology, and tips for accurate
                counting.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="335"
              src="/cell-counting.png"
              width="600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
