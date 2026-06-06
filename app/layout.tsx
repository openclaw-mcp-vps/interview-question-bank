import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Interview Question Bank — Role-Specific Technical Interview Generator',
  description: 'Generate role-specific technical interview questions from job descriptions. Track candidate responses and score with standardized rubrics.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="51a949a9-22f6-4627-968f-f850ec1920af"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
