import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE, HERO } from "@/content/site";

export const alt = "UhuyDevs — Studio Desain & Rekayasa Produk Digital";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const logoPromise = readFile(join(process.cwd(), "public/logo2.png"), "base64");

export default async function Image() {
  const logoBase64 = await logoPromise;
  const logoSrc = `data:image/png;base64,${logoBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f5f6fa",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(36, 72, 245, 0.16) 0%, rgba(36, 72, 245, 0) 55%), radial-gradient(circle at 15% 90%, rgba(36, 72, 245, 0.10) 0%, rgba(36, 72, 245, 0) 50%)",
          padding: "56px 64px",
          fontFamily: "sans-serif",
          color: "#0b1533",
          position: "relative",
        }}
      >
        {/* Top Bar: Brand Identity + Status Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <img
              src={logoSrc}
              width={64}
              height={64}
              style={{
                borderRadius: "16px",
                boxShadow: "0 10px 25px -5px rgba(11, 21, 51, 0.15)",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "#0b1533",
                }}
              >
                {SITE.name}
              </span>
              <span
                style={{
                  fontSize: "15px",
                  color: "rgba(11, 21, 51, 0.55)",
                  fontWeight: 500,
                }}
              >
                Studio Desain & Rekayasa Perangkat Lunak
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "#ffffff",
              padding: "10px 20px",
              borderRadius: "999px",
              border: "1px solid rgba(11, 21, 51, 0.08)",
              boxShadow: "0 4px 12px rgba(11, 21, 51, 0.04)",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "10px",
                height: "10px",
                borderRadius: "999px",
                backgroundColor: "#10b981",
              }}
            />
            <span
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#0b1533",
              }}
            >
              {SITE.location}
            </span>
          </div>
        </div>

        {/* Center Main Content */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: "12px",
            marginBottom: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "700px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                fontSize: "64px",
                fontWeight: 800,
                lineHeight: 1.06,
                letterSpacing: "-0.04em",
                color: "#0b1533",
              }}
            >
              <span>Ide cemerlang.</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "14px",
                fontSize: "64px",
                fontWeight: 800,
                lineHeight: 1.06,
                letterSpacing: "-0.04em",
                marginTop: "4px",
              }}
            >
              <span>Akar yang</span>
              <span style={{ color: "#2448f5" }}>kuat.</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "14px",
                fontSize: "64px",
                fontWeight: 800,
                lineHeight: 1.06,
                letterSpacing: "-0.04em",
                marginTop: "4px",
              }}
            >
              <span>Digital lebih</span>
              <span style={{ color: "#2448f5" }}>baik.</span>
            </div>

            <p
              style={{
                display: "flex",
                fontSize: "21px",
                lineHeight: 1.45,
                color: "rgba(11, 21, 51, 0.68)",
                marginTop: "22px",
                marginBottom: 0,
                maxWidth: "650px",
                fontWeight: 500,
              }}
            >
              Merancang situs web bisnis, aplikasi web, dan produk digital yang tenang, tangguh, dan berorientasi pada pertumbuhan bisnis Anda.
            </p>
          </div>

          {/* Right Highlight Card */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#0b1533",
              color: "#ffffff",
              borderRadius: "28px",
              padding: "32px",
              width: "310px",
              boxShadow: "0 25px 50px -12px rgba(11, 21, 51, 0.35)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "rgba(255, 255, 255, 0.55)",
                  fontWeight: 700,
                }}
              >
                Dampak Terukur
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: "#2448f5",
                  color: "#ffffff",
                  padding: "4px 12px",
                  borderRadius: "999px",
                  fontSize: "13px",
                  fontWeight: 700,
                }}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="#fbbf24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span>{`${HERO.floatingCards.rating.value}/5.0`}</span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                fontSize: "52px",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#ffffff",
                lineHeight: 1,
              }}
            >
              {HERO.floatingCards.metric.value}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "15px",
                color: "rgba(255, 255, 255, 0.65)",
                marginTop: "8px",
                marginBottom: "24px",
              }}
            >
              {HERO.floatingCards.metric.label}
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                paddingTop: "20px",
              }}
            >
              {["Web Experience", "UI/UX Design", "Next.js", "Full-Stack"].map(
                (tag) => (
                  <span
                    key={tag}
                    style={{
                      display: "flex",
                      fontSize: "12px",
                      fontWeight: 600,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "rgba(255, 255, 255, 0.88)",
                      padding: "6px 12px",
                      borderRadius: "999px",
                    }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(11, 21, 51, 0.08)",
            paddingTop: "20px",
          }}
        >
          <div style={{ display: "flex", gap: "36px" }}>
            {HERO.stats.map((stat) => (
              <div
                key={stat.label}
                style={{ display: "flex", alignItems: "baseline", gap: "8px" }}
              >
                <span
                  style={{
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "#2448f5",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: "15px",
                    color: "rgba(11, 21, 51, 0.6)",
                    fontWeight: 600,
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <span
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#2448f5",
            }}
          >
            uhuydevs.vercel.app
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
