'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: '首頁', href: '#home' },
        { name: '關於', href: '#about' },
        { name: '作品', href: '#projects' },
        { name: '經歷', href: '#experience' },
        { name: '聯絡', href: '#contact' },
    ]

    return (
        <nav
            className={`w-3/4 mx-auto fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-card/80 backdrop-blur-md shadow-lg'
                    : 'bg-card/60 backdrop-blur-sm'
                } rounded-2xl border border-border`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link
                        href="#home"
                        className="font-heading text-xl font-bold text-primary hover:text-accent transition-colors duration-200"
                    >
                        張勝麟
                    </Link>

                    <ul className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button className="hidden md:block px-6 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 cursor-pointer">
                        聯絡我
                    </button>

                    <button className="md:hidden p-2 text-foreground cursor-pointer">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}
