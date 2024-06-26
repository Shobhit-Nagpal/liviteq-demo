import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

type ReturnedImageProps = {
  readonly totalCount: string;
  readonly dimensions: {
    width: string;
    height: string;
  };
  readonly src: string;
};
export default function ReturnedImage({ totalCount, dimensions, src }: ReturnedImageProps) {
  return (
      <div className="flex flex-col items-center justify-center">
        <TransformWrapper>
          <TransformComponent>
            <img src={`data:image/jpeg;base64,${src}`} alt="test" width={dimensions.width} height={dimensions.height} />
          </TransformComponent>
        </TransformWrapper>
        <div className="mt-4 text-3xl font-bold">
          <p>Total count: {totalCount}</p>
        </div>
      </div>
  );
}
