<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  exclude-result-prefixes="s image"
>
  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html lang="id">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>XML Sitemap — UhuyDevs Studio</title>
        <style>
          :root {
            --canvas: #f5f6fa;
            --surface: #ffffff;
            --ink: #0b1533;
            --ink-muted: #5b647d;
            --brand: #2448f5;
            --brand-soft: #eef2ff;
            --border: rgba(11, 21, 51, 0.08);
          }
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Plus Jakarta Sans", "Segoe UI", Roboto, sans-serif;
            background-color: var(--canvas);
            color: var(--ink);
            line-height: 1.6;
            padding: 48px 20px;
          }
          .container {
            max-width: 1040px;
            margin: 0 auto;
          }
          .header-card {
            background: var(--ink);
            color: #ffffff;
            border-radius: 24px;
            padding: 36px 40px;
            margin-bottom: 24px;
            box-shadow: 0 24px 48px -20px rgba(11, 21, 51, 0.35);
            position: relative;
            overflow: hidden;
          }
          .eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 11px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            background: rgba(255, 255, 255, 0.1);
            color: #93a9ff;
            padding: 5px 12px;
            border-radius: 999px;
            margin-bottom: 16px;
          }
          .eyebrow-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #34d399;
          }
          h1 {
            font-size: 30px;
            font-weight: 700;
            letter-spacing: -0.03em;
            margin-bottom: 8px;
          }
          .subtitle {
            color: rgba(255, 255, 255, 0.68);
            font-size: 14px;
            max-width: 680px;
          }
          .subtitle a {
            color: #93a9ff;
            text-decoration: underline;
            text-underline-offset: 3px;
          }
          .stats {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 24px;
          }
          .stat-pill {
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 12px;
            padding: 10px 16px;
            font-size: 13px;
            color: rgba(255, 255, 255, 0.8);
          }
          .stat-pill strong {
            color: #ffffff;
            font-weight: 700;
            margin-right: 4px;
          }
          .table-card {
            background: var(--surface);
            border-radius: 24px;
            border: 1px solid var(--border);
            box-shadow: 0 12px 32px -16px rgba(11, 21, 51, 0.08);
            overflow: hidden;
          }
          .table-wrap {
            overflow-x: auto;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
          }
          th {
            font-size: 11px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--ink-muted);
            background: #fafbfe;
            padding: 16px 24px;
            border-bottom: 1px solid var(--border);
          }
          td {
            padding: 18px 24px;
            border-bottom: 1px solid var(--border);
            font-size: 14px;
            vertical-align: middle;
          }
          tr:last-child td {
            border-bottom: none;
          }
          tr:hover td {
            background-color: #f8faff;
          }
          .url-link {
            color: var(--brand);
            font-weight: 600;
            text-decoration: none;
            word-break: break-all;
          }
          .url-link:hover {
            text-decoration: underline;
          }
          .badge {
            display: inline-block;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 12px;
            font-weight: 600;
            padding: 3px 10px;
            border-radius: 999px;
            background: var(--brand-soft);
            color: var(--brand);
          }
          .freq {
            color: var(--ink-muted);
            text-transform: capitalize;
            font-size: 13px;
          }
          .date {
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 12px;
            color: var(--ink-muted);
          }
          .footer {
            margin-top: 20px;
            text-align: center;
            font-size: 12px;
            color: var(--ink-muted);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header-card">
            <div class="eyebrow">
              <span class="eyebrow-dot"></span>
              UhuyDevs Studio · XML Sitemap
            </div>
            <h1>Peta Situs (Sitemap)</h1>
            <p class="subtitle">
              Dokumen XML Sitemap resmi untuk <a href="https://uhuydevs.vercel.app">uhuydevs.vercel.app</a> yang digunakan oleh mesin pencari seperti Google Search Console untuk mengindeks halaman situs secara optimal.
            </p>
            <div class="stats">
              <div class="stat-pill">
                <strong><xsl:value-of select="count(s:urlset/s:url)" /></strong> Halaman Terdaftar
              </div>
              <div class="stat-pill">
                <strong><xsl:value-of select="count(s:urlset/s:url/image:image)" /></strong> Aset Gambar
              </div>
            </div>
          </div>

          <div class="table-card">
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>URL Halaman</th>
                    <th>Prioritas</th>
                    <th>Frekuensi</th>
                    <th>Gambar</th>
                    <th>Pembaruan Terakhir</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="s:urlset/s:url">
                    <tr>
                      <td>
                        <a class="url-link" href="{s:loc}">
                          <xsl:value-of select="s:loc" />
                        </a>
                      </td>
                      <td>
                        <span class="badge">
                          <xsl:value-of select="s:priority" />
                        </span>
                      </td>
                      <td class="freq">
                        <xsl:value-of select="s:changefreq" />
                      </td>
                      <td class="freq">
                        <xsl:value-of select="count(image:image)" />
                      </td>
                      <td class="date">
                        <xsl:choose>
                          <xsl:when test="s:lastmod">
                            <xsl:value-of select="s:lastmod" />
                          </xsl:when>
                          <xsl:otherwise>—</xsl:otherwise>
                        </xsl:choose>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </div>
          </div>

          <div class="footer">
            © 2026 UhuyDevs Studio · Solo, Indonesia
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>

