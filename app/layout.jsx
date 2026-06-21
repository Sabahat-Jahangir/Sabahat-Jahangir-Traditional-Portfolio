import './globals.css'

export const metadata = {
  title: 'Sabahat Jahangir — AI · Cybersecurity · Cloud',
  description: 'Portfolio of Sabahat Jahangir —  Work in AI systems, digital forensics, and AWS cloud. Research Assistant in AI & LLM security, ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  )
}