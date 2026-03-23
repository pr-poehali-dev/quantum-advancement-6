import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden bg-[#060606] relative">
      <div className="absolute inset-0 z-10" style={{
        backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(ellipse at center, transparent 20%, black 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 20%, black 80%)',
      }} />
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}