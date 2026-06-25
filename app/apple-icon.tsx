import { ImageResponse } from "next/og";

// Apple touch icon (180×180 PNG) generated at build time.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B0B0E",
          color: "#ECECEC",
          fontSize: 96,
          fontWeight: 700,
          fontFamily: "monospace",
        }}
      >
        <span>m</span>
        <span style={{ color: "#8B7BFF" }}>_</span>
      </div>
    ),
    { ...size }
  );
}
