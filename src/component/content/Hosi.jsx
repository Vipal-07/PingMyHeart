import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Hosi() {
    const containerRef = useRef(null);
    const yesBtnRef = useRef(null);
    const noBtnRef = useRef(null);

    const swapButtons = () => {
        const btnContainer = containerRef.current;
        const yesBtn = yesBtnRef.current;
        const noBtn = noBtnRef.current;
        const children = Array.from(btnContainer.children);
        const yesIndex = children.indexOf(yesBtn);
        const noIndex = children.indexOf(noBtn);

        if (yesIndex < noIndex) {
            btnContainer.insertBefore(noBtn, yesBtn);
        } else {
            btnContainer.insertBefore(yesBtn, noBtn);
        }
    };

    const handleNoHover = () => {
        if (window.innerWidth >= 768) swapButtons();
    };
    const handleNoClick = () => {
        if (window.innerWidth < 768) swapButtons();
    };

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
                <div className="w-[250px] sm:w-[320px] md:w-[400px] mx-auto text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 text-center mb-2">
                   I Love You ❤️
                </div>
                <div className="w-full">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4">
                       Will you be my girlfriend? 
                    </p>
                    <div
                        className="flex flex-row justify-around gap-3 sm:gap-4"
                        ref={containerRef}
                    >
                        <Link
                            to="/dummy"
                            className="w-full sm:w-auto mb-2 sm:mb-0"
                            ref={yesBtnRef}
                        >
                            <button
                                className="py-2 rounded-lg px-6 text-lg sm:text-xl md:text-2xl font-bold text-white bg-green-600 w-full sm:w-auto"
                            >
                                Yes
                            </button>
                        </Link>
                        <div
                            className="w-full sm:w-auto mb-2 sm:mb-0"
                            ref={noBtnRef}
                        >
                            <button
                                className="py-2 rounded-lg px-6 text-lg sm:text-xl md:text-2xl font-bold text-white bg-red-600 w-full sm:w-auto"
                                onMouseEnter={handleNoHover}
                                onClick={handleNoClick}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}