import style from './style.module.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
        {children}
        </>
  )
}
