import Image from "next/image";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import React from "react";

export default function Methods() {
  return (
    <section className="bg-gray-200 py-12 lg:py-24 xl:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-12 xl:gap-16">
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Methods of Cell Counting
              </h2>
              <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                There are several methods used for cell counting in biology,
                each with its advantages and limitations. The choice of method
                depends on the type of cells, the required precision, and the
                available equipment.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:gap-8">
              <Card className="flex-1">
                <CardHeader className="pb-0">
                  <CardTitle>1. Hemocytometer</CardTitle>
                  <CardDescription className="py-4">
                    The hemocytometer is a specialized counting chamber that
                    allows for the precise calculation of cell concentration in
                    a given sample.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Image
                    alt="Image"
                    className="aspect-video overflow-hidden rounded-t-lg object-cover object-center"
                    height="225"
                    src="/hemocytometer.jpg"
                    width="400"
                  />
                </CardContent>
              </Card>
              <Card className="flex-1">
                <CardHeader className="pb-0">
                  <CardTitle>2. Automated Cell Counters</CardTitle>
                  <CardDescription className="py-4">
                    Automated cell counters use image analysis software to
                    quickly and accurately count cells in a sample.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Image
                    alt="Image"
                    className="aspect-video overflow-hidden rounded-t-lg object-contain object-center"
                    height="225"
                    src="/automated-counter.jpg"
                    width="400"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
