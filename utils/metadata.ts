import { Metadata } from "next";

export function constructMetaData({
  title = "SPINNIN | Design, Development & Graphics",
  description = "We can help you with Web Design, Development, SEO, Motion Design, UI / UX Design. Professional, friendly and talented team. Get in touch!",
  image = "/img/OGImage.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@jasonzubiate",
    },
    icons,
    metadataBase: new URL("https://spinnin.studio"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
