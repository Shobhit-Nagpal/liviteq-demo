"use client";
import { baseURL } from "@/lib/url";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import ReturnedImage from "./ReturnedImage";
import ReturnedVideo from "./ReturnedVideo";
import { toast } from "sonner";

interface ImageResponseData {
  type: "image";
  src: string;
  dimensions: {
    width: string;
    height: string;
  };
  totalCount: string;
}

interface VideoResponseData {
  type: "video";
  src: string;
}

export default function Demo() {
  const [mediaURL, setMediaURL] = useState<string | null>(null);
  const [media, setMedia] = useState<File | null>(null);
  const [mediaURLType, setMediaURLType] = useState<"image" | "video" | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [returnedMedia, setReturnedMedia] = useState<
    ImageResponseData | VideoResponseData | null
  >(null);

  function handleFileUpload(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);

      setMedia(file);
      setMediaURL(url);
      setMediaURLType(file.type.startsWith("image") ? "image" : "video");
    }
  }

  function handleClearMedia() {
    setMedia(null);
    setMediaURL(null);
    setMediaURLType(null);
    setReturnedMedia(null);
  }

  async function handleUploadMedia() {
    if (mediaURL && media && mediaURLType) {
      setIsLoading(true);

      try {
        const data = new FormData();
        data.append("media", media);

        const endpoint =
          mediaURLType === "image" ? "/count/image" : "/count/video";
        const url = `${baseURL}${endpoint}`;

        const response = await fetch(url, {
          method: "POST",
          body: data,
        });

        if (response.ok) {
          const result = await response.json();
          setReturnedMedia(result);
          toast.success("Cells detected!");
        } else {
          const errorResponse = await response.json();
          console.error(
            "Failed to upload media. Server responded with:",
            errorResponse,
          );
          toast.error(errorResponse.error);
        }
      } catch (error) {
        console.error("Error uploading media:", error);
        //@ts-ignore
        toast.error(error);
      }

      setIsLoading(false);
    } else {
      toast("No media to upload");
    }
  }
  return (
    <>
      <section className="py-12 lg:py-20 xl:py-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-12 xl:gap-16">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Try the Demo
                </h2>
                <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Upload your images or videos to test the cell counting
                  functionality. The demo uses advanced image processing
                  algorithms to detect and count cells automatically.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <button
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  onClick={handleUploadMedia}
                  disabled={!mediaURL || isLoading}
                >
                  {isLoading ? "Uploading..." : "Upload Media"}
                </button>
              </div>
            </div>
            <div className="flex-shrink-0 relative">
              {mediaURL ? (
                <>
                  {mediaURLType === "image" ? (
                    <Image
                      alt="Uploaded Image"
                      src={mediaURL}
                      layout="responsive"
                      width={600}
                      height={337}
                      objectFit="contain"
                      className="rounded-xl max-w-[720px]"
                    />
                  ) : (
                    <video
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                      style={{
                        maxWidth: "1920px",
                        maxHeight: "1080px",
                        width: "100%",
                        height: "auto",
                      }}
                      controls
                    >
                      <source src={mediaURL} />
                    </video>
                  )}
                  <button
                    className="absolute top-2 right-2 bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center"
                    onClick={handleClearMedia}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </>
              ) : (
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="p-5 flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Images, Videos
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      accept="image/*, video/*"
                      className="hidden"
                      onChange={handleFileUpload}
                    />
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-13 lg:py-24 xl:py-32">
        <div className="container px-5 md:px-6">
          <div
            className={`flex flex-col items-center ${returnedMedia ? "justify-between" : null} gap-7 lg:flex-row lg:gap-12 xl:gap-16`}
          >
            <div className="space-y-4">
              <div className="space-y-3">
                <h2 className="text-3xl pt-10 font-bold tracking-tighter sm:text-5xl">
                  Returned Media
                </h2>
                <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  This container will show the returned image or video from an
                  endpoint after the user uploads their file for cell counting.
                </p>
              </div>
            </div>
            {returnedMedia ? (
              returnedMedia.type === "image" ? (
                <div>
                  <ReturnedImage
                    src={returnedMedia.src}
                    totalCount={returnedMedia.totalCount}
                    dimensions={returnedMedia.dimensions}
                  />
                </div>
              ) : (
                <div>
                  <ReturnedVideo src={returnedMedia.src} />
                </div>
              )
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
