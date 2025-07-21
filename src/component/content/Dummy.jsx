import React from 'react'

export default function Dummy() {
  return (
    <div
      className="flex items-center justify-center h-screen w-screen"
      style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(255,182,193,0.6) 0%, rgba(255,255,224,0.5) 100%),
          url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1500&q=80')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="flex flex-col items-center justify-center gap-4 p-6 sm:p-10 rounded-3xl"
        style={{
          background: 'rgba(255, 255, 255, 0.25)',
          boxShadow: '0 8px 32px 0 rgba(255, 192, 203, 0.35), 0 4px 16px 0 rgba(255, 255, 102, 0.25)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '1.5rem',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          minWidth: '300px',
          maxWidth: '90vw',
        }}
      >
        <div className="w-[250px] sm:w-[320px] md:w-[400px] mx-auto text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-gray-800 break-words">
          “You just turned my favorite dream into reality.” 
          <p role="img" aria-label="heart">🥰💖</p>
        </div>
       
      </div>
    </div>
  )
}