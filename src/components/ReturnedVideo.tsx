import React from "react";

type ReturnedVideoProps = {
  readonly src: string;
}

export default function ReturnedVideo({ src }: ReturnedVideoProps) {
  return (
    <div className="flex flex-col justify-center items-center">
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
        <source src={src} />
      </video>
    </div>
  );
}
