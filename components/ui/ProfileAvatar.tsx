"use client";

import Image from "next/image";
import { useState } from "react";
import { site } from "@/lib/content";
import { getInitials } from "@/lib/initials";

const sizeMap = {
  sm: { className: "h-9 w-9 text-xs", pixels: 36 },
  md: { className: "h-32 w-32 text-3xl", pixels: 128 },
} as const;

type ProfileAvatarProps = {
  size?: keyof typeof sizeMap;
  className?: string;
};

export function ProfileAvatar({ size = "sm", className = "" }: ProfileAvatarProps) {
  const [imageError, setImageError] = useState(false);
  const { className: sizeClass, pixels } = sizeMap[size];
  const initials = getInitials(site.name);
  const showImage = site.profileImage && !imageError;

  if (!showImage) {
    return (
      <span
        className={`inline-flex shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 font-semibold text-emerald-400 ${sizeClass} ${className}`}
        aria-hidden
      >
        {initials}
      </span>
    );
  }

  return (
    <Image
      src={site.profileImage}
      alt={site.name}
      width={pixels}
      height={pixels}
      className={`shrink-0 rounded-full border border-zinc-700 object-cover ${sizeClass} ${className}`}
      onError={() => setImageError(true)}
      priority={size === "sm"}
    />
  );
}
