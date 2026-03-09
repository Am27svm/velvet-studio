import React, { useEffect, useRef } from 'react'
import styles from './CustomCursor.module.css'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const cursor = cursorRef.current
    const follower = followerRef.current
    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`
    }

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12
      follower.style.transform = `translate(${followerX}px, ${followerY}px)`
      requestAnimationFrame(animateFollower)
    }

    const addHover = () => cursor.classList.add(styles.hovered)
    const removeHover = () => cursor.classList.remove(styles.hovered)

    window.addEventListener('mousemove', moveCursor)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    animateFollower()

    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <>
      <div ref={cursorRef} className={styles.cursor} />
      <div ref={followerRef} className={styles.follower} />
    </>
  )
}
