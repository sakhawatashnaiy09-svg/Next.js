

export default function RootLayout({ children , analytics }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-100 text-slate-900 antialiased">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          {children}
          {analytics}
        </div>
      </body>
    </html>
  );
}
