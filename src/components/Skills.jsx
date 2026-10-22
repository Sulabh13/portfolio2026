import { useEffect, useRef, useState } from 'react'
import resumeFile from '../assets/Sulabh hathi resume 2026 full stack devloper new img.docx?url'

/* ─────────────────────────────────────────────
   Brand Logo SVG Icons
───────────────────────────────────────────── */
const Icons = {
  react: (
    <svg width="20" height="20" viewBox="-11.5 -10.23174 23 20.46348">
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  javascript: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#f7df1e" />
      <path d="M7 16.5c.5.8 1.2 1.3 2.2 1.3 1.2 0 1.9-.6 1.9-2.1v-5.2h1.8v5.2c0 2.3-1.4 3.3-3.7 3.3-1.8 0-2.9-.9-3.4-2.1l1.2-.4zm8.3.1c.6.9 1.5 1.4 2.6 1.4 1.1 0 1.8-.6 1.8-1.4 0-.9-.7-1.3-1.9-1.8l-.7-.3c-1.9-.8-3.1-1.8-3.1-3.8 0-2 1.6-3.4 3.7-3.4 1.7 0 2.8.7 3.5 2l-1.4 1c-.4-.8-1-1.2-2.1-1.2-1 0-1.7.6-1.7 1.3 0 .8.6 1.2 1.7 1.6l.7.3c2.2.9 3.3 1.9 3.3 4 0 2.2-1.7 3.6-4 3.6-2.1 0-3.5-1-4.2-2.4l1.7-1z" fill="#000" />
    </svg>
  ),
  typescript: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#3178c6" />
      <path d="M5.5 10.5h6v1.8h-2v6.2h-2v-6.2h-2v-1.8zm8.8 6.4c.5.6 1.2 1 2 1 .9 0 1.5-.4 1.5-1 0-.6-.5-.9-1.5-1.3l-.6-.2c-1.5-.6-2.4-1.3-2.4-2.7 0-1.5 1.2-2.6 2.8-2.6 1.3 0 2.2.5 2.7 1.4l-1.1.9c-.3-.6-.8-.8-1.6-.8-.7 0-1.2.4-1.2.9 0 .5.4.8 1.3 1.1l.6.2c1.7.7 2.6 1.4 2.6 2.8 0 1.6-1.3 2.7-3.1 2.7-1.6 0-2.6-.7-3.2-1.7l1.2-.7z" fill="#fff" />
    </svg>
  ),
  tailwind: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#38bdf8">
      <path d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2.2-1.1 3.5-.8 1.1.2 1.9 1.1 2.8 2 1.4 1.5 3 3.2 6.2 3.2 2.4 0 3.9-1.2 4.5-3.6-1 .8-2.2 1.1-3.5.8-1.1-.2-1.9-1.1-2.8-2-1.4-1.5-3-3.2-6.2-3.2zm-8 8c-2.4 0-3.9 1.2-4.5 3.6 1-.8 2.2-1.1 3.5-.8 1.1.2 1.9 1.1 2.8 2 1.4 1.5 3 3.2 6.2 3.2 2.4 0 3.9-1.2 4.5-3.6-1 .8-2.2 1.1-3.5.8-1.1-.2-1.9-1.1-2.8-2-1.4-1.5-3-3.2-6.2-3.2z" />
    </svg>
  ),
  html5: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <path d="M3 2l1.8 20.2L12 24l7.2-1.8L21 2H3z" fill="#E44D26" />
      <path d="M12 3.8v18.3l5.6-1.4 1.4-16.9H12z" fill="#F16529" />
      <path d="M12 8.4H7.8l.2 2.3h4V8.4zm0 4.6H8.2l.2 2.3h3.6V13zm0 4.6l-2.4-.7-.2-1.7H7.7l.3 3.3 4 1.1v-2z" fill="#EBEBEB" />
      <path d="M12 8.4h4.2l-.4 4.6H12v2.3h3.6l-.3 3.7-3.3.9v2.1l5.4-1.5.7-9.8H12V8.4z" fill="#fff" />
    </svg>
  ),
  css3: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <path d="M3 2l1.8 20.2L12 24l7.2-1.8L21 2H3z" fill="#1572B6" />
      <path d="M12 3.8v18.3l5.6-1.4 1.4-16.9H12z" fill="#33A9DC" />
      <path d="M12 8.4H7.8l.2 2.3h4V8.4zm0 4.6H8.2l.2 2.3h3.6V13zm0 4.6l-2.4-.7-.2-1.7H7.7l.3 3.3 4 1.1v-2z" fill="#EBEBEB" />
      <path d="M12 8.4h4.2l-.4 4.6H12v2.3h3.6l-.3 3.7-3.3.9v2.1l5.4-1.5.7-9.8H12V8.4z" fill="#fff" />
    </svg>
  ),
  bootstrap: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#7952B3" />
      <path d="M7 6h5.2c1.8 0 3.1.8 3.1 2.2 0 1-.7 1.7-1.6 2 1.2.3 2.1 1.2 2.1 2.4 0 1.6-1.4 2.4-3.3 2.4H7V6zm3 3.6h1.9c.7 0 1.2-.3 1.2-.9 0-.6-.5-.9-1.2-.9H10v1.8zm0 3.6h2.2c.8 0 1.4-.4 1.4-1 0-.7-.6-1-1.4-1H10v2z" fill="#fff" />
    </svg>
  ),
  nodejs: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="#68A063">
      <path d="M12 2l9.5 5.5v11L12 24 2.5 18.5v-11L12 2zm0 2.3L4.5 8.7v8.6L12 21.6l7.5-4.3V8.7L12 4.3z" />
      <path d="M12 7a5 5 0 0 1 5 5v5h-2v-5a3 3 0 0 0-6 0v5H7v-5a5 5 0 0 1 5-5z" fill="#68A063" />
    </svg>
  ),
  express: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#222" />
      <path d="M7 16V8h2.3l2.2 4.2L13.7 8H16v8h-2v-4.8l-2 3.8h-.8l-2-3.8V16H7z" fill="#fff" />
    </svg>
  ),
  mongodb: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <path d="M12 1.5s-6 6.8-6 12.3c0 4.2 3.1 7.2 6 8.7 2.9-1.5 6-4.5 6-8.7 0-5.5-6-12.3-6-12.3z" fill="#47A248" />
      <path d="M12 1.5v21c2.9-1.5 6-4.5 6-8.7 0-5.5-6-12.3-6-12.3z" fill="#499D4A" />
      <path d="M12 22.5c-.3 0-.6-.2-.6-.5v-7.3c0-.3.3-.5.6-.5s.6.2.6.5v7.3c0 .3-.3.5-.6.5z" fill="#FAF6E9" />
    </svg>
  ),
  firebase: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <path d="M4.5 19.5l7.5 4.2 7.5-4.2-2.1-13.1-5.4 10.4-3.2-6.1L4.5 19.5z" fill="#FFCA28" />
      <path d="M4.5 19.5l4.3-8.8 3.2 6.1 7.5-12.6L4.5 19.5z" fill="#FFA000" />
      <path d="M12 23.7l7.5-4.2-2.1-13.1L12 23.7z" fill="#F57C00" />
    </svg>
  ),
  restapi: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#6f34fe" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  jwt: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#e91e63" />
      <rect x="7" y="11" width="10" height="7" rx="1.5" fill="#fff" />
      <path d="M9 11V8.5a3 3 0 0 1 6 0V11" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  git: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="#F05032">
      <path d="M21.6 10.9L13.1 2.4a2.4 2.4 0 0 0-3.4 0L7.3 4.8l3.4 3.4a2.2 2.2 0 0 1 2.8 2.8l3.3 3.3a2.2 2.2 0 1 1-1.3 1.2l-3.1-3.1v4.7a2.2 2.2 0 1 1-1.8 0v-4.9a2.2 2.2 0 0 1-1.1-2.9L6 6.1 2.4 9.7a2.4 2.4 0 0 0 0 3.4l8.5 8.5a2.4 2.4 0 0 0 3.4 0l7.3-7.3a2.4 2.4 0 0 0 0-3.4z" />
    </svg>
  ),
  github: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="#24292e">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  vscode: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <path d="M17.5 2.5l-9.3 8.6L4.7 8 2 9.5l4.8 3.8L2 17.1 4.7 18.6l3.5-3.1 9.3 8.6L22 22V4.5l-4.5-2z" fill="#007ACC" />
      <path d="M17.5 2.5L8.2 11.1l9.3 8.4V2.5z" fill="#0066B8" />
      <path d="M22 4.5L17.5 2.5v19l4.5-2V4.5z" fill="#1F9CF0" />
    </svg>
  ),
  vercel: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="#000">
      <path d="M12 2L24 22H0L12 2z" />
    </svg>
  ),
  aws: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <path d="M7 11.2c-.7.5-1.5.8-2.3.8-1.5 0-2.4-.9-2.4-2.3 0-1.5 1-2.4 2.6-2.4.7 0 1.5.2 2.1.6v3.3zm2.5-5.9H7.2v1.3C6.4 5.9 5.4 5.6 4.3 5.6 1.8 5.6 0 7.3 0 9.7c0 2.4 1.7 4 4.3 4 1.1 0 2.1-.4 2.9-1.1v1.1h2.3V5.3z" fill="#232F3E" />
      <path d="M3 18c6 3.5 13 3.2 18-1" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M19 16l3 1-1 3" fill="#FF9900" />
    </svg>
  ),
  figma: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <path d="M8 2h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#F24E1E" />
      <path d="M12 2h4a2.5 2.5 0 0 1 0 5h-4V2z" fill="#FF7262" />
      <path d="M8 7h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#A259FF" />
      <path d="M12 7h4a2.5 2.5 0 0 1 0 5h-4V7z" fill="#1ABCFE" />
      <path d="M8 12h4v5a2.5 2.5 0 1 1-4-2.5V12z" fill="#0ACF83" />
    </svg>
  ),
  sass: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="#CF649A">
      <path d="M12 3.5c-4.7 0-8.5 2.5-8.5 5.5 0 2.4 2.5 4.4 6 5.1-.3.5-.7 1.2-.7 2 0 1.7 1.5 3 3.5 3s3.5-1.3 3.5-3c0-.3-.1-.6-.2-.9 2.6-.9 4.4-2.6 4.4-4.7 0-3.9-3.6-7-8-7zm0 1.8c3.6 0 6.5 2.3 6.5 5.2 0 1.6-1.1 3-2.9 3.9-.7-.7-1.7-1.2-2.8-1.2-1.9 0-3.5 1.3-3.5 3 0 .2 0 .4.1.6-2.5-.5-4.2-2-4.2-3.7 0-2.4 3-4.4 6.8-4.4z" />
    </svg>
  ),
  redux: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="#764ABC">
      <path d="M15.6 7.8c-.8-1.5-2.2-2.6-3.8-2.6-2.3 0-4.1 2-4.1 4.5 0 .6.1 1.2.4 1.7l1.7-1c-.2-.3-.3-.7-.3-1 0-1.4 1-2.5 2.3-2.5.9 0 1.7.5 2.1 1.3l1.7-.4zm2.1 5c.1-.4.2-.8.2-1.2 0-2.8-2.1-5.1-4.8-5.4l.2 2c1.7.2 3 1.7 3 3.4 0 .3 0 .5-.1.8l1.5.4zm-7.9 2.5c.8 1.5 2.2 2.6 3.8 2.6 2.3 0 4.1-2 4.1-4.5 0-.6-.1-1.2-.4-1.7l-1.7 1c.2.3.3.7.3 1 0 1.4-1 2.5-2.3 2.5-.9 0-1.7-.5-2.1-1.3l-1.7.4zm-2.1-5c-.1.4-.2.8-.2 1.2 0 2.8 2.1 5.1 4.8 5.4l-.2-2c-1.7-.2-3-1.7-3-3.4 0-.3 0-.5.1-.8l-1.5-.4z" />
      <circle cx="12" cy="12" r="1.5" fill="#764ABC" />
    </svg>
  ),
  framermotion: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <path d="M4 2h16l-8 9 8 9H4l8-9-8-9z" fill="#0055FF" />
      <path d="M4 2h8l8 9h-8l-8-9z" fill="#FF0055" />
      <path d="M12 11h8l-8 9v-9z" fill="#00DF9A" />
    </svg>
  ),
  postman: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="#FF6C37">
      <path d="M13.5 2C7.7 2 3 6.7 3 12.5S7.7 23 13.5 23 24 18.3 24 12.5 19.3 2 13.5 2zm5.7 6.4l-4.1 2.3-2.1-3.6 4.1-2.3 2.1 3.6zm-6.6 6.8l-4.4 2.5-1.9-3.4 4.4-2.5 1.9 3.4zm4.9-2.8l-4.4 2.5-1.9-3.4 4.4-2.5 1.9 3.4z" />
    </svg>
  ),
  emailjs: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#FCA61F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="3" fill="#FFF8ED" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      <circle cx="17.5" cy="15" r="2.2" fill="#FCA61F" stroke="none" />
    </svg>
  ),
  netlify: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="#00C7B7">
      <path d="M16.9 8.2l-3.3-3.3a1.5 1.5 0 0 0-2.2 0L8.1 8.2a1.5 1.5 0 0 0 0 2.2l3.3 3.3a1.5 1.5 0 0 0 2.2 0l3.3-3.3a1.5 1.5 0 0 0 0-2.2zM6.2 12.9l-3 3a1.2 1.2 0 0 0 0 1.7l1.2 1.2a1.2 1.2 0 0 0 1.7 0l3-3a1.2 1.2 0 0 0 0-1.7l-1.2-1.2a1.2 1.2 0 0 0-1.7 0zm11.6 0l-1.2 1.2a1.2 1.2 0 0 0 0 1.7l3 3a1.2 1.2 0 0 0 1.7 0l1.2-1.2a1.2 1.2 0 0 0 0-1.7l-3-3a1.2 1.2 0 0 0-1.7 0z" />
    </svg>
  ),
  // railway: (
  //   <svg width="19" height="19" viewBox="0 0 24 24" fill="#18181B">
  //     <path d="M2.5 18l4.5-9h10l4.5 9h-3l-1.5-3h-10l-1.5 3h-3zm5.5-5h8l-2-4h-4l-2 4zm-4 7h16v2H4v-2z" />
  //   </svg>
  // ),
  cloudinary: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="#3448C5">
      <path d="M19.4 10a5.5 5.5 0 0 0-10.3-2A4.5 4.5 0 0 0 4.5 16h14.9a4.5 4.5 0 0 0 0-9v3h-3l3.5 3.5L23.4 10h-4z" />
    </svg>
  ),
  mui: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="#007FFF">
      <path d="M0 2.5L12 9.4v12.1L0 14.6V2.5zm12 6.9l12-6.9v12.1l-12 6.9V9.4z" />
      <path d="M12 9.4L6 5.9l6-3.5 6 3.5-6 3.5z" fill="#0059B2" />
    </svg>
  ),
  axios: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="#5A29E4">
      <path d="M11 2L2 22h4l2.5-6h7l2.5 6h4L13 2h-2zm1 4.5L14.5 13h-5L12 6.5z" />
    </svg>
  ),
  socketio: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#010101" />
      <circle cx="12" cy="12" r="6" stroke="#fff" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="2.5" fill="#fff" />
    </svg>
  ),
  nextjs: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#000" />
      <path d="M8 8v8h2v-4.5l5.5 6.5c.3-.3.5-.6.8-.9L9.5 8H8zm7 0h2v5.5l-2-2.5V8z" fill="#fff" />
    </svg>
  ),
  cpp: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <polygon points="12 2 21 7.2 21 16.8 12 22 3 16.8 3 7.2 12 2" fill="#00599C" />
      <path d="M12 6.5a5.5 5.5 0 1 0 4 1.7l-1.6 1.4a3.3 3.3 0 1 1-2.4-.9c.9 0 1.7.3 2.3.9l1.7-1.4A5.4 5.4 0 0 0 12 6.5zm4.5 3h1v1.8h1.8v1h-1.8v1.8h-1v-1.8h-1.8v-1h1.8V9.5zm3.8 0h1v1.8h1.8v1h-1.8v1.8h-1v-1.8h-1.8v-1h1.8V9.5z" fill="#fff" />
    </svg>
  ),
  docker: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="#2496ED">
      <path d="M13 8h2v2h-2V8zm-3 0h2v2h-2V8zm-3 0h2v2H7V8zm6-3h2v2h-2V5zm-3 0h2v2h-2V5zm9 8.2c-.4-.3-1.4-.4-2.1 0-.2-1.3-.9-2.3-2.1-3-.1 0-.2-.1-.3-.1l-.4.3c-.6.5-.9 1.4-.9 2.4 0 .3 0 .6.1.9H1.4C.6 13.7 0 14.5 0 15.5c0 3.6 3.1 6.5 8 6.5 6 0 9.8-3.3 11-7.8.8.2 1.7.1 2.3-.4.7-.6.9-1.5.7-1.6z" />
    </svg>
  ),
  responsive: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#6F34FE" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="14" height="12" rx="2" />
      <path d="M6 19h6" />
      <path d="M9 15v4" />
      <rect x="14" y="8" width="8" height="13" rx="2" fill="#fff" />
      <circle cx="18" cy="18" r="0.6" fill="#6F34FE" />
    </svg>
  ),
  canva: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="canvaGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00C4CC" />
          <stop offset="50%" stopColor="#2E82FF" />
          <stop offset="100%" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#canvaGrad)" />
      <path
        d="M13.2 7c-2.9 0-4.9 2.1-4.9 5.2s2 5.2 4.9 5.2c1.9 0 3.3-.9 3.9-2.2l-1.8-.8c-.4.8-1.2 1.3-2.1 1.3-1.8 0-3.1-1.5-3.1-3.5s1.3-3.5 3.1-3.5c.9 0 1.7.5 2.1 1.3l1.8-.8C16.5 7.9 15.1 7 13.2 7z"
        fill="#fff"
      />
    </svg>
  ),
  msoffice: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="9.5" height="9.5" rx="1.5" fill="#F25022" />
      <rect x="12.5" y="2" width="9.5" height="9.5" rx="1.5" fill="#7FBA00" />
      <rect x="2" y="12.5" width="9.5" height="9.5" rx="1.5" fill="#00A4EF" />
      <rect x="12.5" y="12.5" width="9.5" height="9.5" rx="1.5" fill="#FFB900" />
    </svg>
  ),
  claude: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#FBF3EC" />
      <path
        d="M12 4.2a1.2 1.2 0 0 0-1.2 1.2v3.7c0 .4-.3.7-.7.7H6.4a1.2 1.2 0 1 0 0 2.4h3.7c.4 0 .7.3.7.7v3.7a1.2 1.2 0 1 0 2.4 0v-3.7c0-.4.3-.7.7-.7h3.7a1.2 1.2 0 1 0 0-2.4h-3.7c-.4 0-.7-.3-.7-.7V5.4A1.2 1.2 0 0 0 12 4.2z"
        fill="#D97757"
      />
      <path
        d="M6.5 6.5a1.2 1.2 0 0 0 0 1.7l2.6 2.6c.3.3.3.8 0 1.1L6.5 14.5a1.2 1.2 0 1 0 1.7 1.7l2.6-2.6c.3-.3.8-.3 1.1 0l2.6 2.6a1.2 1.2 0 1 0 1.7-1.7l-2.6-2.6c-.3-.3-.3-.8 0-1.1l2.6-2.6a1.2 1.2 0 1 0-1.7-1.7l-2.6 2.6c-.3.3-.8.3-1.1 0L8.2 6.5a1.2 1.2 0 0 0-1.7 0z"
        fill="#D97757"
      />
    </svg>
  ),
  chatgpt: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#10A37F" />
      <path
        d="M19 10.5a3.2 3.2 0 0 0-.3-2.3 3.3 3.3 0 0 0-2.9-1.7 3.4 3.4 0 0 0-1.1.2 3.2 3.2 0 0 0-2.4-1 3.3 3.3 0 0 0-3.1 2.3 3.2 3.2 0 0 0-1.6 1.2 3.3 3.3 0 0 0-.3 3.3 3.2 3.2 0 0 0 .3 2.3 3.3 3.3 0 0 0 2.9 1.7c.4 0 .8-.1 1.1-.2a3.2 3.2 0 0 0 2.4 1 3.3 3.3 0 0 0 3.1-2.3 3.2 3.2 0 0 0 1.6-1.2 3.3 3.3 0 0 0 .3-3.3zm-7 2.6a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4zm-2.8-2.2a.8.8 0 0 1 .4-.7l1.8-1a.8.8 0 0 1 .8 0l.7.4-2.2 1.3a1.2 1.2 0 0 0-.5.7l-1-.7zm.8 2.6a.8.8 0 0 1-.4-.7v-2l1 .6a1.2 1.2 0 0 0 0 .8l-.6 1.3zm3.1 1a.8.8 0 0 1-.8 0l-1.8-1a.8.8 0 0 1-.4-.7l.7-.4 2.2 1.3c.2.1.3.2.5.2l-.4.6zm1.9-.5l-1-.6a1.2 1.2 0 0 0 0-.8l.6-1.3a.8.8 0 0 1 .4.7v2zm-.7-2.6a.8.8 0 0 1-.4.7l-1.8 1a.8.8 0 0 1-.8 0l-.7-.4 2.2-1.3a1.2 1.2 0 0 0 .5-.7l1 .7zm-.8-1.8a.8.8 0 0 1 .8 0l1.8 1a.8.8 0 0 1 .4.7l-.7.4-2.2-1.3a1.2 1.2 0 0 0-.5-.2l.4-.6z"
        fill="#fff"
      />
    </svg>
  ),
  antigravity: (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="agyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6F34FE" />
          <stop offset="50%" stopColor="#8A2BE2" />
          <stop offset="100%" stopColor="#00C4CC" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#agyGrad)" />
      <ellipse cx="12" cy="17" rx="5.5" ry="2" stroke="#fff" strokeWidth="1.3" fill="none" opacity="0.8" />
      <path d="M12 5.5l-4.5 5.5h3v3.5h3V11h3L12 5.5z" fill="#fff" />
    </svg>
  ),
}

/* ─────────────────────────────────────────────
   Circular Progress Skills Data
───────────────────────────────────────────── */
const circularSkills = [
  { id: 'html', label: 'HTML & CSS', end: 90, color: '#fca61f' },
  { id: 'js', label: 'JavaScript', end: 75, color: '#7d2ae8' },
  { id: 'cpp', label: 'C & C++', end: 70, color: '#20c997' },
  { id: 'react', label: 'ReactJS', end: 80, color: '#3f396d' },
]

/* ─────────────────────────────────────────────
   Categorized Tech Stack Data with Brand SVGs
───────────────────────────────────────────── */
const categories = [
  {
    id: 'frontend',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6f34fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><polyline points="8 21 12 17 16 21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    iconBg: '#f0ebff',
    title: 'Frontend Development',
    desc: 'Building responsive, accessible and interactive user interfaces with modern frameworks.',
    skills: [
      { name: 'React', color: '#61dafb', icon: Icons.react },
      { name: 'JavaScript', color: '#f7df1e', icon: Icons.javascript },
      { name: 'Tailwind CSS', color: '#38bdf8', icon: Icons.tailwind },
      { name: 'HTML5', color: '#e34f26', icon: Icons.html5 },
      { name: 'CSS3', color: '#1572b6', icon: Icons.css3 },
      { name: 'Bootstrap', color: '#7952b3', icon: Icons.bootstrap },
    ],
  },
  {
    id: 'backend',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#20c997" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    iconBg: '#e6faf5',
    title: 'Backend & Database',
    desc: 'Building robust RESTful APIs, secure authentication and scalable server architectures.',
    skills: [
      { name: 'Node.js', color: '#68a063', icon: Icons.nodejs },
      { name: 'Express.js', color: '#555', icon: Icons.express },
      { name: 'MongoDB', color: '#47a248', icon: Icons.mongodb },
      { name: 'Firebase', color: '#ffca28', icon: Icons.firebase },
      { name: 'REST API', color: '#6f34fe', icon: Icons.restapi },
      { name: 'JWT', color: '#e91e63', icon: Icons.jwt },
    ],
  },
  {
    id: 'tools',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fca61f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    iconBg: '#fff8ed',
    title: 'Tools & Platforms',
    desc: 'Developer tools, version control, and cloud platforms for fast development and deployment.',
    skills: [
      { name: 'Git', color: '#f05032', icon: Icons.git },
      { name: 'GitHub', color: '#333', icon: Icons.github },
      { name: 'VS Code', color: '#007acc', icon: Icons.vscode },
      { name: 'Vercel', color: '#000', icon: Icons.vercel },
      { name: 'AWS', color: '#ff9900', icon: Icons.aws },
      { name: 'Figma', color: '#a259ff', icon: Icons.figma },
    ],
  },
]

/* ─────────────────────────────────────────────
   Other Technologies Data for Marquee with Real Logos
───────────────────────────────────────────── */
const otherTech = [
  { name: 'Canva', icon: Icons.canva, color: '#00c4cc' },
  { name: 'MS Office', icon: Icons.msoffice, color: '#d83b01' },
  { name: 'Claude AI', icon: Icons.claude, color: '#d97757' },
  { name: 'ChatGPT', icon: Icons.chatgpt, color: '#10a37f' },
  { name: 'Antigravity', icon: Icons.antigravity, color: '#6f34fe' },
  { name: 'Sass / SCSS', icon: Icons.sass, color: '#cf649a' },
  { name: 'Redux Toolkit', icon: Icons.redux, color: '#764abc' },
  { name: 'TypeScript', icon: Icons.typescript, color: '#3178c6' },
  { name: 'Next.js', icon: Icons.nextjs, color: '#000000' },
  { name: 'Framer Motion', icon: Icons.framermotion, color: '#0055ff' },
  { name: 'Postman', icon: Icons.postman, color: '#ff6c37' },
  { name: 'Docker', icon: Icons.docker, color: '#2496ed' },
  { name: 'EmailJS', icon: Icons.emailjs, color: '#fca61f' },
  { name: 'Netlify', icon: Icons.netlify, color: '#00c7b7' },
  // { name: 'Railway', icon: Icons.railway, color: '#1a1a2e' },
  { name: 'Cloudinary', icon: Icons.cloudinary, color: '#3448c5' },
  { name: 'Material UI (MUI)', icon: Icons.mui, color: '#007fff' },
  { name: 'Axios', icon: Icons.axios, color: '#5a29e4' },
  { name: 'Socket.io', icon: Icons.socketio, color: '#010101' },
  { name: 'C & C++', icon: Icons.cpp, color: '#00599c' },
  { name: 'ES6+ JavaScript', icon: Icons.javascript, color: '#f7df1e' },
  { name: 'Responsive UI', icon: Icons.responsive, color: '#6f34fe' },
]

/* ─────────────────────────────────────────────
   Interactive Skill Chip Component
───────────────────────────────────────────── */
function SkillChip({ name, color, icon }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '7px 15px',
        borderRadius: 999,
        background: hovered ? color + '1a' : '#f5f5fa',
        border: `1.5px solid ${hovered ? color : '#eae8f5'}`,
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hovered ? `0 4px 12px ${color}28` : 'none',
      }}
    >
      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {icon}
      </span>
      <span style={{ fontSize: 13, fontWeight: 600, color: hovered ? color : '#3f396d' }}>
        {name}
      </span>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Unified Skills & Technologies Component
───────────────────────────────────────────── */
export default function Skills() {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState({ html: 0, js: 0, cpp: 0, react: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)

  // Trigger circular progress counter animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          circularSkills.forEach(({ id, end }) => {
            let current = 0
            const stepTime = Math.max(15, Math.floor(1200 / end))
            const timer = setInterval(() => {
              current++
              setProgress((prev) => ({ ...prev, [id]: current }))
              if (current >= end) clearInterval(timer)
            }, stepTime)
          })
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 px-6 relative"
      style={{
        background: 'linear-gradient(135deg, #f0ebff 0%, #f8f9ff 50%, #e8f4ff 100%)',
      }}
    >
      {/* Anchor alias so any link to #skills or #skills-tech also scrolls here */}
      <span id="skills" className="absolute -top-16 opacity-0 pointer-events-none" />
      <span id="skills-tech" className="absolute -top-16 opacity-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* ── Section Title Header ── */}
        <div className="text-center mb-16">
          <span
            style={{
              display: 'inline-block',
              padding: '6px 20px',
              borderRadius: 999,
              background: 'linear-gradient(90deg, #6f34fe1a, #fca61f1a)',
              color: '#6f34fe',
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: 'uppercase',
              marginBottom: 12,
              border: '1px solid #6f34fe33',
            }}
          >
            My Skills &amp; Expertise
          </span>
          <h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
            style={{ color: '#1a1a2e' }}
          >
            Skills &amp; <span style={{ color: '#6f34fe' }}>Technologies</span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            Crafting end-to-end digital experiences with modern tools, scalable architecture, and efficient problem solving.
          </p>
        </div>

        {/* ── Part 1: Circular Progress & About Story ── */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">

          {/* Circular Progress 2x2 Grid */}
          <div className="grid grid-cols-2 gap-6 w-full lg:w-1/2" data-aos="slide-right">
            {circularSkills.map(({ id, label, color }) => {
              const currentVal = progress[id] || 0
              return (
                <div
                  key={id}
                  className="bg-white rounded-3xl flex flex-col items-center justify-center py-8 px-6 shadow-sm border border-[#f0eeff] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="relative flex items-center justify-center rounded-full transition-all duration-100"
                    style={{
                      width: 130,
                      height: 130,
                      background: `conic-gradient(${color} ${currentVal * 3.6}deg, #ededed 0deg)`,
                    }}
                  >
                    <div
                      className="absolute rounded-full bg-white flex flex-col items-center justify-center shadow-inner"
                      style={{ width: 114, height: 114 }}
                    >
                      <span className="text-2xl font-bold text-[#1a1a2e]">{currentVal}%</span>
                    </div>
                  </div>
                  <span className="mt-4 text-base font-semibold text-[#3f396d] text-center">
                    {label}
                  </span>
                </div>
              )
            })}
          </div>

          {/* About & Bio Text Column */}
          <div className="w-full lg:w-1/2" data-aos="slide-left">
            <p className="text-[#6f34fe] text-lg font-bold tracking-wide uppercase mb-1">
              About My Craft
            </p>
            <h3 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: '#3f396d' }}>
              Beautiful &amp; Unique Digital Experiences
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              I am a Full Stack Web Developer with experience in designing and developing responsive, scalable, and user-focused web applications.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              On the front end, I build clean and modern user interfaces using HTML, CSS, Tailwind CSS, JavaScript, and React, ensuring high performance, accessibility, and cross-device compatibility.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              In addition, I have a strong foundation in C/C++, which strengthens my problem-solving abilities and enables me to develop efficient, optimized solutions using data structures and algorithms. I am passionate about continuously learning and delivering reliable, high-quality software solutions.
            </p>

            <a
              href={resumeFile}
              download="Sulabh_Hathi_Resume.docx"
              className="inline-flex items-center gap-2 bg-[#fca61f] text-white px-9 py-3.5 rounded-full text-base font-semibold shadow-lg hover:bg-[#6f34fe] hover:-translate-y-1 transition-all duration-300"
              style={{ textDecoration: 'none' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>
          </div>

        </div>

        {/* ── Part 2: Categorized Tech Stack Cards ── */}
        <div className="mb-14">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#3f396d' }}>
              Core Technical Stack
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Key technologies divided by development discipline
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white rounded-3xl p-7 shadow-sm border border-[#f0eeff] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-3.5">
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 14,
                        background: cat.iconBg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {cat.icon}
                    </div>
                    <h4 className="text-lg font-bold text-[#1a1a2e] m-0">
                      {cat.title}
                    </h4>
                  </div>

                  <p className="text-xs text-gray-500 mb-5 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                {/* Skill Chips with brand logos */}
                <div className="flex flex-wrap gap-2.5 pt-2 border-t border-gray-100">
                  {cat.skills.map((s) => (
                    <SkillChip key={s.name} name={s.name} color={s.color} icon={s.icon} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Part 3: Other Technologies inside <marquee> with Real Brand Logo Icons ── */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-[#f0eeff]">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-5 px-2">
            <div>
              <span
                style={{
                  display: 'inline-block',
                  padding: '3px 12px',
                  borderRadius: 999,
                  background: '#6f34fe14',
                  color: '#6f34fe',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  textTransform: 'uppercase',
                  border: '1px solid #6f34fe24',
                }}
              >
                Additional Ecosystem
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-[#1a1a2e] mt-1.5">
                Other Technologies &amp; Tools
              </h3>
            </div>
            <span className="text-xs text-gray-400 font-medium hidden sm:inline-block">
              {/* (Hover to pause marquee) */}
            </span>
          </div>

          {/* Marquee Wrapper with smooth gradient edge masks */}
          <div className="relative overflow-hidden rounded-2xl bg-[#faf9ff] py-4 px-2 border border-[#f0ebff]">
            {/* Left & Right gradient edge fades for smooth entrance/exit */}
            <div
              className="absolute left-0 top-0 bottom-0 w-14 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, #faf9ff, transparent)',
              }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-14 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(to left, #faf9ff, transparent)',
              }}
            />

            {/* <marquee> Tag with Real Brand Logos */}
            <marquee
              behavior="scroll"
              direction="left"
              scrollamount="6"
              onMouseEnter={(e) => e.currentTarget.stop()}
              onMouseLeave={(e) => e.currentTarget.start()}
              style={{ display: 'block', width: '100%', overflow: 'hidden' }}
            >
              <div style={{ display: 'inline-flex', gap: '14px', alignItems: 'center', padding: '4px 0' }}>
                {[...otherTech, ...otherTech].map((tech, idx) => (
                  <span
                    key={`${tech.name}-${idx}`}
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white text-[#3f396d] text-sm font-semibold shadow-sm border border-[#ede9fe] transition-all duration-300 hover:scale-105 hover:border-[#6f34fe] hover:text-[#6f34fe] hover:shadow-md cursor-pointer whitespace-nowrap"
                  >
                    <span className="flex items-center justify-center flex-shrink-0">
                      {tech.icon}
                    </span>
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>
            </marquee>
          </div>
        </div>

      </div>
    </section>
  )
}