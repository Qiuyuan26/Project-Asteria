"use client";

import Image from "next/image";

type StickerDef = {
  id: string;
  label?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width: string;
  zIndex?: number;
  translateY?: string;
};

interface Props {
  stickers: StickerDef[];
}

export default function StickerLayer({ stickers }: Props) {
  return (
    <>
      {stickers.map((s, i) => (
        <div
          key={`${s.id}-${i}`}
          className="absolute pointer-events-none select-none hidden lg:block"
          style={{
            top: s.top,
            left: s.left,
            right: s.right,
            bottom: s.bottom,
            width: s.width,
            height: s.width, // keep aspect ratio square, image uses contain
            zIndex: s.zIndex ?? 5,
            transform: s.translateY ? `translateY(${s.translateY})` : undefined,
          }}
        >
          <Image
            src={`/stickers/${s.id}.png`}
            alt={s.label ?? ""}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      ))}
    </>
  );
}
