import { ImageResponse } from "next/og";
import { hero, seo, siteConfig } from "@/lib/content";

// Open Graph / social share image (1200×630) in the brand style.
// Also used as the Twitter card image (twitter.card = summary_large_image).
export const alt = seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "linear-gradient(135deg, #0C0C11 0%, #0B0B0E 45%, #08080B 100%)",
          color: "#ECECEC",
        }}
      >
        {/* Monogram + eyebrow */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 46,
              fontWeight: 700,
              fontFamily: "monospace",
            }}
          >
            <span>m</span>
            <span style={{ color: "#8B7BFF" }}>_</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 21,
              letterSpacing: 7,
              color: "#8B7BFF",
              fontFamily: "monospace",
            }}
          >
            INDEPENDENT AI CONSULTANCY
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            maxWidth: 1010,
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.08,
            letterSpacing: -1.5,
          }}
        >
          {hero.h1}
        </div>

        {/* Name + domain */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #23232B",
            paddingTop: 28,
            fontSize: 24,
            color: "#A6A6B0",
            fontFamily: "monospace",
          }}
        >
          <span>{siteConfig.name}</span>
          <span style={{ color: "#7C7C88" }}>{siteConfig.domain}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
