import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DB Schema Visualizer — Visual Diff for Database Migrations',
  description: 'Parse SQL schema files and generate interactive before/after diagrams with impact analysis, dependency tracking, and breaking change detection.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="33cb3ca1-c3a0-4e91-8f16-acd06908612c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
