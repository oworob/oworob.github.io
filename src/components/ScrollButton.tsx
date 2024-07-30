import React from 'react'
import { useState, useEffect } from "react";

export function ScrollButton() {
    const [Visible, SetVisible] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop
            SetVisible(scrollTop > 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <button id='scroll-up' className={`fas fa-arrow-up ${!Visible ? 'hidden' : ''}`} onClick={() => window.scrollTo({top: 0,behavior: 'smooth'})} />
    )
}