"use client";
import ContactDock from "../ui/ContactDock";
import ClientLogoSlider from "../home/ClientLogoSlider";
import { useEffect, useMemo, useState } from "react";
import {
  LinkedinIcon,
  XIcon,
  GithubIcon,
  FacebookIcon,
  InstagramIcon,
} from "../ui/SocialIcons";
import Container from "../layout/Container";
import Button from "../ui/Button";
import FloatingIcons from "../home/FloatingIcons";
import RevealOnScroll from "../ui/RevealOnScroll";

/* ===========================
   Helpers (Responsive-safe)
============================= */
function Stat({ title, subtitle, icon }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border bg-white/14 backdrop-blur px-5 sm:px-6 py-5 shadow-soft">
      <div className="text-2xl shrink-0">{icon}</div>
      <div className="min-w-0">
        <div className="text-2xl font-semibold text-text leading-none truncate">
          {title}
        </div>
        <div className="mt-1 text-sm text-muted">{subtitle}</div>
      </div>
    </div>
  );
}

/* =========================================================
✅ Tech Stack Marquee (RIGHT ➜ LEFT)
========================================================= */
function LogoItem({ label, children }) {
  return (
    <div
      className="group flex items-center justify-center"
      role="img"
      aria-label={label}
      title={label}
    >
      <div className="jf-logo w-[40px] h-[40px] sm:w-[44px] sm:h-[44px]">
        {children}
      </div>
      <span className="sr-only">{label}</span>
    </div>
  );
}

/* --- ✅ SVG ICONS (unchanged) --- */
function HtmlIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
      <path fill="#e44d26" d="M14.021 90.034 6 0h88.187l-8.022 89.985L50.02 100" />
      <path fill="#f16529" d="M50.093 92.344V7.39h36.048l-6.88 76.811" />
      <path
        fill="#ebebeb"
        d="M22.383 18.4h27.71v11.036H34.488L35.51 40.74h14.584v11.01H25.397zm3.5 38.893h11.084l.778 8.823 12.348 3.306v11.521l-22.654-6.32"
      />
      <path
        fill="#fff"
        d="M77.706 18.4H50.044v11.036h26.64zm-2.018 22.34H50.044v11.035h13.612l-1.288 14.341-12.324 3.306v11.473l22.606-6.271"
      />
    </svg>
  );
}
function CssIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
      <path fill="#264de4" d="m94.175 0-8.033 89.99L50.034 100l-36.01-9.996L6 0z" />
      <path fill="#2965f1" d="m79.265 84.26 6.864-76.9H50.087v84.988z" />
      <path
        fill="#ebebeb"
        d="m24.396 40.74.99 11.039h24.702V40.74zm25.692-22.342h-27.68l1.003 11.038h26.676zm-.001 62.495V69.408l-.048.013-12.294-3.32-.786-8.803H25.878l1.547 17.332 22.612 6.277z"
      />
      <path
        fill="#fff"
        d="m63.642 51.779-1.281 14.316-12.312 3.323v11.484l22.63-6.272.166-1.865 2.594-29.06.27-2.965L77.7 18.398H50.05v11.038h15.555L64.599 40.74H50.05v11.04z"
      />
    </svg>
  );
}
function ReactIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
      <g clipPath="url(#a)">
        <path fill="#61dafb" d="M50.307 58.816a8.816 8.816 0 1 0 0-17.632 8.816 8.816 0 0 0 0 17.632" />
        <path stroke="#61dafb" strokeWidth="5" d="M50.307 68.063c26.126 0 47.306-8.087 47.306-18.063s-21.18-18.062-47.306-18.062C24.18 31.938 3 40.024 3 50s21.18 18.063 47.307 18.063Z" />
        <path stroke="#61dafb" strokeWidth="5" d="M34.664 59.031C47.727 81.658 65.321 95.957 73.96 90.97c8.64-4.988 5.053-27.374-8.01-50C52.885 18.342 35.291 4.043 26.652 9.03s-5.052 27.374 8.011 50Z" />
        <path stroke="#61dafb" strokeWidth="5" d="M34.664 40.969c-13.063 22.626-16.65 45.012-8.01 50 8.638 4.988 26.232-9.311 39.295-31.938s16.65-45.012 8.01-50c-8.638-4.988-26.232 9.311-39.295 31.938Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h100v100H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
function PythonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
      <g clipPath="url(#a)">
        <path
          fill="url(#b)"
          d="M49.64 0C24.254 0 25.839 11.009 25.839 11.009l.028 11.406h24.225v3.424H16.245S0 23.997 0 49.61c0 25.615 14.179 24.707 14.179 24.707h8.462V62.432s-.457-14.18 13.952-14.18H60.62s13.5.219 13.5-13.046V13.273S76.17 0 49.64 0M36.282 7.67a4.354 4.354 0 1 1 0 8.716 4.354 4.354 0 0 1 0-8.716"
        />
        <path
          fill="url(#c)"
          d="M50.36 99.48c25.387 0 23.802-11.009 23.802-11.009l-.028-11.405H49.908V73.64h33.847S100 75.485 100 49.869c0-25.615-14.179-24.706-14.179-24.706H77.36v11.886s.457 14.179-13.952 14.179H39.379S25.88 51.009 25.88 64.274v21.933S23.83 99.48 50.36 99.48m13.359-7.67a4.355 4.355 0 1 1 0-8.71 4.355 4.355 0 0 1 0 8.71"
        />
      </g>
      <defs>
        <linearGradient id="b" x1="9.61" x2="59.167" y1="8.948" y2="58.01" gradientUnits="userSpaceOnUse">
          <stop stopColor="#387eb8" />
          <stop offset="1" stopColor="#366994" />
        </linearGradient>
        <linearGradient id="c" x1="40.028" x2="93.246" y1="40.453" y2="90.762" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffe052" />
          <stop offset="1" stopColor="#ffc331" />
        </linearGradient>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h100v100H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
function N8nIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
      <path
        fill="#ea4b71"
        fillRule="evenodd"
        d="M100 35c0 5.52-4.592 10-10.258 10-4.775 0-8.792-3.187-9.934-7.5H65.492c-2.509 0-4.646 1.767-5.059 4.18l-.42 2.466A9.92 9.92 0 0 1 56.679 50a9.92 9.92 0 0 1 3.334 5.854l.416 2.467a5.09 5.09 0 0 0 5.067 4.179h4.062c1.138-4.312 5.154-7.5 9.934-7.5 5.666 0 10.254 4.48 10.254 10S85.15 75 79.492 75c-4.78 0-8.792-3.187-9.934-7.5h-4.062c-5.017 0-9.292-3.533-10.117-8.354l-.42-2.467A5.09 5.09 0 0 0 49.9 52.5h-4.192c-1.283 4.1-5.191 7.083-9.816 7.083S27.358 56.6 26.079 52.5h-6.008c-1.283 4.1-5.192 7.083-9.813 7.083-5.666 0-10.258-4.479-10.258-10 0-5.52 4.592-10 10.258-10 4.93 0 9.05 3.396 10.034 7.917h5.57c.984-4.52 5.105-7.917 10.034-7.917 4.933 0 9.05 3.396 10.033 7.917h3.967c2.504 0 4.646-1.767 5.054-4.18l.425-2.466c.825-4.82 5.104-8.354 10.117-8.354h14.316c1.142-4.312 5.159-7.5 9.934-7.5C95.408 25 100 29.48 100 35"
        clipRule="evenodd"
      />
    </svg>
  );
}
function NodeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
      <path
        fill="#8cc84b"
        d="M46.279 1.067c2.479-1.42 5.709-1.426 8.186 0 12.464 7.042 24.931 14.074 37.393 21.12 2.343 1.321 3.911 3.93 3.887 6.63v42.371c.018 2.813-1.705 5.483-4.178 6.774-12.422 7.004-24.838 14.016-37.259 21.02-2.53 1.447-5.825 1.335-8.277-.23-3.724-2.16-7.455-4.308-11.18-6.465-.76-.453-1.619-.815-2.156-1.552.475-.64 1.324-.72 2.015-1 1.554-.495 2.982-1.288 4.41-2.058.361-.247.802-.153 1.148.069 3.185 1.826 6.342 3.705 9.537 5.513.682.394 1.372-.129 1.955-.453 12.19-6.89 24.396-13.754 36.584-20.646a1.21 1.21 0 0 0 .664-1.191c.009-13.977.002-27.957.005-41.934a1.31 1.31 0 0 0-.781-1.308C75.852 20.756 63.479 13.773 51.102 6.8a1.29 1.29 0 0 0-1.458-.002c-12.378 6.975-24.749 13.964-37.126 20.935-.506.23-.845.738-.785 1.302q.002 20.966 0 41.936a1.19 1.19 0 0 0 .673 1.176c3.303 1.873 6.61 3.733 9.916 5.6 1.861 1.002 4.148 1.597 6.199.83 1.81-.65 3.08-2.497 3.045-4.42.017-13.895-.009-27.793.013-41.686-.046-.617.54-1.127 1.14-1.069 1.586-.01 3.175-.021 4.762.005.663-.015 1.119.649 1.037 1.27-.007 13.984.017 27.968-.01 41.952.003 3.726-1.528 7.781-4.975 9.605-4.247 2.2-9.496 1.733-13.691-.376-3.632-1.813-7.098-3.952-10.666-5.894C6.697 76.68 4.983 73.999 5 71.189V28.817c-.026-2.756 1.604-5.412 4.021-6.713Q27.651 11.588 46.28 1.067"
      />
      <path
        fill="#8cc84b"
        d="M57.114 30.417c5.417-.348 11.216-.206 16.091 2.462 3.774 2.046 5.867 6.338 5.933 10.53-.105.566-.696.878-1.236.84-1.572-.003-3.144.02-4.716-.011-.667.025-1.054-.59-1.138-1.179-.451-2.006-1.545-3.993-3.434-4.96-2.898-1.452-6.26-1.38-9.42-1.349-2.308.123-4.79.322-6.744 1.68-1.5 1.027-1.957 3.102-1.421 4.773.505 1.2 1.89 1.587 3.023 1.944 6.529 1.708 13.447 1.538 19.85 3.785 2.651.916 5.245 2.697 6.152 5.472 1.187 3.72.667 8.168-1.98 11.154-2.146 2.458-5.273 3.796-8.39 4.522-4.149.925-8.454.949-12.666.538-3.962-.451-8.084-1.492-11.142-4.191-2.614-2.27-3.892-5.808-3.765-9.223.03-.576.605-.978 1.157-.93 1.583-.014 3.165-.018 4.748.001.632-.045 1.101.501 1.133 1.097.292 1.912 1.01 3.918 2.678 5.051 3.216 2.075 7.253 1.933 10.936 1.991 3.052-.135 6.477-.176 8.967-2.193 1.314-1.15 1.703-3.075 1.348-4.73-.384-1.398-1.847-2.05-3.103-2.476-6.444-2.038-13.44-1.299-19.822-3.604-2.59-.916-5.096-2.647-6.092-5.309-1.389-3.767-.752-8.427 2.172-11.313 2.852-2.87 6.968-3.976 10.881-4.372"
      />
    </svg>
  );
}
function VsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
      <g clipPath="url(#a)">
        <path fill="#2489ca" d="M.951 35.498s-2.435-1.756.488-4.1l6.81-6.089s1.948-2.05 4.008-.264l62.839 47.576v22.814s-.03 3.582-4.628 3.186z" />
        <path fill="#1070b3" d="M17.148 50.204.951 64.929s-1.664 1.238 0 3.45l7.52 6.84s1.787 1.919 4.425-.263l17.171-13.02z" />
        <path fill="#0877b9" d="M45.584 50.325 75.29 27.643l-.193-22.692S73.827 0 69.596 2.577L30.067 38.553z" />
        <path fill="#3c99d4" d="M70.469 98.652c1.725 1.766 3.815 1.188 3.815 1.188l23.149-11.407c2.963-2.02 2.547-4.526 2.547-4.526V15.79c0-2.994-3.065-4.029-3.065-4.029L76.852 2.09c-4.384-2.71-7.256.487-7.256.487s3.694-2.659 5.5 2.375v90.067c0 .62-.132 1.228-.396 1.776-.527 1.066-1.674 2.06-4.424 1.644z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h100v100H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
function AwsIcon() {
  return (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#252f3e"
        d="M36.379 53.64c0 1.56.168 2.825.465 3.75.336.926.758 1.938 1.347 3.032.207.336.293.672.293.969 0 .418-.254.84-.8 1.261l-2.653 1.77c-.379.25-.758.379-1.093.379-.422 0-.844-.211-1.266-.59a13.28 13.28 0 0 1-1.516-1.98 34.153 34.153 0 0 1-1.304-2.485c-3.282 3.875-7.41 5.813-12.38 5.813-3.535 0-6.355-1.012-8.421-3.032-2.063-2.023-3.114-4.718-3.114-8.086 0-3.578 1.262-6.484 3.833-8.671 2.566-2.192 5.976-3.286 10.316-3.286 1.43 0 2.902.125 4.46.336 1.56.211 3.161.547 4.845.926v-3.074c0-3.2-.676-5.43-1.98-6.734C26.061 32.633 23.788 32 20.546 32c-1.473 0-2.988.168-4.547.547a33.416 33.416 0 0 0-4.547 1.433c-.676.293-1.18.461-1.473.547-.296.082-.507.125-.675.125-.59 0-.883-.422-.883-1.304v-2.063c0-.676.082-1.18.293-1.476.21-.293.59-.586 1.18-.883 1.472-.758 3.242-1.39 5.304-1.895 2.063-.547 4.254-.8 6.57-.8 5.008 0 8.672 1.136 11.032 3.41 2.316 2.273 3.492 5.726 3.492 10.359v13.64Z"
      />
      <path
        fill="#f90"
        d="M118 73.348c-4.432.063-9.664 1.052-13.621 3.832-1.223.883-1.012 2.062.336 1.894 4.508-.547 14.44-1.726 16.21.547 1.77 2.23-1.976 11.62-3.663 15.79-.504 1.26.59 1.769 1.726.8 7.41-6.231 9.348-19.242 7.832-21.137-.757-.925-4.388-1.79-8.82-1.726ZM1.63 75.859c-.927.116-1.347 1.236-.368 2.121 16.508 14.902 38.359 23.872 62.613 23.872 17.305 0 37.43-5.43 51.281-15.66 2.273-1.688.297-4.254-2.02-3.204-15.534 6.57-32.421 9.77-47.788 9.77-22.778 0-44.8-6.273-62.653-16.633-.39-.231-.755-.304-1.064-.266Z"
      />
    </svg>
  );
}
function GoogleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
      <path
        fill="#fff"
        d="M44.59 4.21a63.28 63.28 0 004.33 120.9 67.6 67.6 0 0032.36.35 57.13 57.13 0 0025.9-13.46 57.44 57.44 0 0016-26.26 74.33 74.33 0 001.61-33.58H65.27v24.69h34.47a29.72 29.72 0 01-12.66 19.52 36.16 36.16 0 01-13.93 5.5 41.29 41.29 0 01-15.1 0A37.16 37.16 0 0144 95.74a39.3 39.3 0 01-14.5-19.42 38.31 38.31 0 010-24.63 39.25 39.25 0 019.18-14.91A37.17 37.17 0 0176.13 27a34.28 34.28 0 0113.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0087.2 4.59a64 64 0 00-42.61-.38z"
      />
      <path fill="#e33629" d="M44.59 4.21a64 64 0 0142.61.37 61.22 61.22 0 0120.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 00-13.64-8 37.17 37.17 0 00-37.46 9.74 39.25 39.25 0 00-9.18 14.91L8.76 35.6A63.53 63.53 0 0144.59 4.21z" />
      <path fill="#f8bd00" d="M3.26 51.5a62.93 62.93 0 015.5-15.9l20.73 16.09a38.31 38.31 0 000 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 01-5.5-40.9z" />
      <path fill="#587dbd" d="M65.27 52.15h59.52a74.33 74.33 0 01-1.61 33.58 57.44 57.44 0 01-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0012.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z" />
      <path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0044 95.74a37.16 37.16 0 0014.08 6.08 41.29 41.29 0 0015.1 0 36.16 36.16 0 0013.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47 67.6 67.6 0 0 1-32.36-.35 63 63 0 0 1-23-11.59A63.73 63.73 0 018.75 92.4z" />
    </svg>
  );
}

/* ✅ New icons you sent */
function WordpressIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
      <g fill="#fff" clipPath="url(#a)">
        <path d="M7.107 49.999c0 16.979 9.867 31.65 24.175 38.604L10.82 32.543a42.7 42.7 0 0 0-3.714 17.456m71.85-2.165c0-5.3-1.904-8.972-3.537-11.83-2.175-3.532-4.212-6.524-4.212-10.058 0-3.943 2.99-7.613 7.202-7.613.19 0 .37.024.557.034-7.632-6.991-17.8-11.26-28.966-11.26-14.985 0-28.169 7.689-35.839 19.334 1.007.03 2.956.05 2.76.05 4.487 0 11.432-.544 11.432-.544 2.312-.136 2.585 3.26.276 3.533 0 0-2.325.274-4.91.41l15.62 46.46 9.387-28.152-6.683-18.31c-2.31-.135-4.498-.409-4.498-.409-2.312-.135-2.04-3.669.27-3.533 0 0 7.084.545 11.299.545 4.486 0 11.431-.545 11.431-.545 2.314-.136 2.586 3.26.275 3.534 0 0-2.328.273-4.909.408l15.5 46.11L75.69 61.7c1.856-5.932 3.267-10.194 3.267-13.866" />
        <path d="m50.753 53.75-12.87 37.396a42.9 42.9 0 0 0 12.118 1.748 42.9 42.9 0 0 0 14.243-2.43 3.6 3.6 0 0 1-.305-.592zM87.638 29.42c.184 1.366.288 2.834.288 4.41 0 4.353-.812 9.246-3.261 15.364L71.563 87.075C84.315 79.64 92.893 65.824 92.893 50a42.66 42.66 0 0 0-5.255-20.58" />
        <path d="M50 0C22.43 0 0 22.43 0 49.999 0 77.57 22.43 100 50 100s50.003-22.429 50.003-50.002C100.003 22.429 77.569 0 50.001 0m0 97.708c-26.305 0-47.707-21.402-47.707-47.71C2.293 23.695 23.694 2.294 50 2.294c26.304 0 47.705 21.401 47.705 47.706 0 26.307-21.402 47.71-47.705 47.71" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h100v100H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
function AnalyticsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
      <path
        fill="#f9ab00"
        d="M95.333 87.486c.037 6.866-5.5 12.457-12.362 12.494-.51.004-1.024-.025-1.53-.087a12.745 12.745 0 0 1-10.877-12.917V13.003A12.75 12.75 0 0 1 81.461.085c6.817-.798 12.991 4.081 13.79 10.898q.087.752.082 1.51z"
      />
      <path
        fill="#e37400"
        d="M17.386 75.227c6.841 0 12.387 5.545 12.387 12.386 0 6.842-5.546 12.387-12.387 12.387C10.546 100 5 94.455 5 87.614c0-6.842 5.545-12.387 12.386-12.387m32.59-37.538c-6.875.379-12.206 6.142-12.046 13.024v33.268c0 9.03 3.974 14.51 9.795 15.678 6.718 1.361 13.262-2.979 14.624-9.697q.253-1.235.247-2.497V50.137c.012-6.866-5.541-12.44-12.407-12.452-.07 0-.144 0-.214.004"
      />
    </svg>
  );
}
function SlackIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
      <g fillRule="evenodd" clipPath="url(#a)" clipRule="evenodd">
        <path
          fill="#36c5f0"
          d="M36.591-.001c-5.517.004-9.981 4.48-9.977 9.998-.004 5.517 4.464 9.994 9.981 9.998h9.982V10C46.58 4.484 42.112.007 36.59-.001q.006 0 0 0m0 26.666H9.981C4.466 26.67-.003 31.147 0 36.663c-.008 5.517 4.46 9.994 9.978 10.002H36.59c5.517-.004 9.986-4.48 9.982-9.998.004-5.52-4.465-9.998-9.982-10.002"
        />
        <path
          fill="#2eb67d"
          d="M99.8 36.663c.004-5.516-4.465-9.993-9.981-9.998-5.517.005-9.986 4.482-9.982 9.998v10.002h9.981c5.517-.004 9.986-4.48 9.982-10.002m-26.614 0V9.997c.005-5.513-4.46-9.99-9.977-9.998-5.517.004-9.986 4.48-9.982 9.998v26.666c-.008 5.517 4.461 9.994 9.978 10.002 5.517-.004 9.986-4.48 9.981-10.002"
        />
        <path
          fill="#ecb22e"
          d="M63.205 99.999c5.517-.004 9.986-4.481 9.982-9.998.004-5.517-4.465-9.994-9.982-9.998h-9.982V90c-.004 5.513 4.465 9.99 9.982 9.998m0-26.67h26.614c5.516-.005 9.985-4.482 9.981-9.999.008-5.517-4.46-9.994-9.977-10.002H63.209c-5.517.004-9.986 4.481-9.982 9.998-.004 5.521 4.461 9.998 9.978 10.002"
        />
        <path
          fill="#e01e5a"
          d="M0 63.33c-.004 5.517 4.465 9.994 9.982 9.998 5.517-.004 9.986-4.481 9.982-9.998v-9.998H9.982C4.465 53.336-.004 57.813 0 63.33m26.614 0v26.667c-.008 5.516 4.46 9.993 9.978 10.002 5.516-.004 9.985-4.481 9.981-9.998V63.338c.008-5.517-4.46-9.994-9.977-10.002-5.521 0-9.986 4.477-9.982 9.994"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h100v100H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
function ColabIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
      <path fill="#e8710a" d="M18.442 39.351 8.525 29.46a29.117 29.117 0 0 0 0 41.162l9.917-9.92a15.15 15.15 0 0 1-4.396-10.674c0-3.998 1.58-7.838 4.396-10.677" />
      <path fill="#f9ab00" d="M49.78 29.456a29.117 29.117 0 0 0 0 41.162l10.103-9.92a15.158 15.158 0 0 1 21.242-21.346l9.92-9.921a29.114 29.114 0 0 0-41.178-.133l-.084.083v.075zm-2.75 43.546-7.355-12.308a15.154 15.154 0 0 1-21.342 0l-9.82 9.933a29.12 29.12 0 0 0 38.029 2.725l.479-.35M8.512 29.452l9.921 9.9a15.154 15.154 0 0 1 21.242 0l7.196-12.33-.43-.328a29.12 29.12 0 0 0-37.929 2.758" />
      <path fill="#e8710a" d="m91.042 29.456-9.925 9.895a15.159 15.159 0 0 1-21.242 21.346l-10.104 9.93a29.117 29.117 0 0 0 41.166-41.171z" />
    </svg>
  );
}
function CursorIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
      <g clipPath="url(#a)">
        <path
          fill="#000"
          d="M91.968 23.67 51.935.556a4.16 4.16 0 0 0-4.157 0L7.748 23.669A3.5 3.5 0 0 0 6 26.697v46.606c0 1.248.667 2.404 1.748 3.028L47.78 99.443a4.16 4.16 0 0 0 4.157 0L91.97 76.331a3.5 3.5 0 0 0 1.748-3.028V26.697a3.5 3.5 0 0 0-1.748-3.028zm-2.515 4.895L50.808 95.5c-.261.451-.951.267-.951-.255V51.416c0-.876-.468-1.686-1.227-2.126L10.674 27.377c-.451-.261-.267-.951.256-.951h77.29a1.427 1.427 0 0 1 1.235 2.14z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h100v100H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
function GeminiIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="g" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8b5cf6" />
          <stop offset="0.55" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#22c55e" />
        </linearGradient>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h100v100H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <path
          fill="url(#g)"
          d="M89.165 44.705c-7.705-3.319-14.443-7.864-20.228-13.642-5.778-5.779-10.329-12.523-13.641-20.228a60.4 60.4 0 0 1-3.08-9.102A2.285 2.285 0 0 0 50 0c-1.051 0-1.96.716-2.216 1.733a60 60 0 0 1-3.08 9.102q-4.975 11.56-13.641 20.228c-5.779 5.772-12.523 10.323-20.228 13.642a60.4 60.4 0 0 1-9.102 3.08A2.285 2.285 0 0 0 0 50c0 1.051.716 1.96 1.733 2.216a60 60 0 0 1 9.102 3.08c7.705 3.318 14.443 7.863 20.228 13.642 5.778 5.778 10.329 12.522 13.642 20.227a60 60 0 0 1 3.08 9.102A2.29 2.29 0 0 0 50 100c1.051 0 1.96-.716 2.216-1.733a60 60 0 0 1 3.08-9.102c3.318-7.705 7.863-14.443 13.642-20.228 5.778-5.778 12.522-10.329 20.227-13.641a60 60 0 0 1 9.102-3.08A2.29 2.29 0 0 0 100 50c0-1.051-.716-1.96-1.733-2.216a60 60 0 0 1-9.102-3.08"
        />
      </g>
    </svg>
  );
}
function GitHubTechIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
      <path
        fill="#161614"
        d="M50 1C22.39 1 0 23.386 0 51c0 22.092 14.327 40.834 34.193 47.446 2.499.462 3.417-1.085 3.417-2.406 0-1.192-.047-5.131-.068-9.309-13.91 3.025-16.846-5.9-16.846-5.9-2.274-5.779-5.551-7.315-5.551-7.315-4.537-3.104.341-3.04.341-3.04 5.022.353 7.665 5.153 7.665 5.153 4.46 7.644 11.697 5.434 14.55 4.156.449-3.232 1.745-5.437 3.175-6.686-11.106-1.264-22.78-5.552-22.78-24.71 0-5.459 1.953-9.92 5.151-13.42-.519-1.26-2.23-6.346.485-13.233 0 0 4.198-1.344 13.753 5.125 3.988-1.108 8.266-1.663 12.515-1.682 4.25.019 8.53.574 12.526 1.682 9.544-6.469 13.736-5.125 13.736-5.125 2.722 6.887 1.01 11.973.49 13.232 3.206 3.502 5.146 7.962 5.146 13.42 0 19.205-11.697 23.434-22.83 24.671 1.793 1.552 3.391 4.595 3.391 9.26 0 6.69-.058 12.074-.058 13.721 0 1.33.9 2.89 3.435 2.399C85.692 91.819 100 73.085 100 51c0-27.614-22.386-50-50-50"
      />
    </svg>
  );
}
function FigmaIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100">
      <path fill="#F24E1E" d="M50 50a12.5 12.5 0 1 1 25 0 12.5 12.5 0 0 1-25 0Z" />
      <path fill="#A259FF" d="M25 25a12.5 12.5 0 0 1 12.5-12.5H50V37.5H37.5A12.5 12.5 0 0 1 25 25Z" />
      <path fill="#1ABCFE" d="M50 12.5h12.5A12.5 12.5 0 1 1 50 25V12.5Z" />
      <path fill="#0ACF83" d="M25 75a12.5 12.5 0 0 1 12.5-12.5H50V87.5A12.5 12.5 0 0 1 25 75Z" />
      <path fill="#FF7262" d="M25 50a12.5 12.5 0 0 1 12.5-12.5H50V62.5H37.5A12.5 12.5 0 0 1 25 50Z" />
    </svg>
  );
}

function TechStackMarquee() {
  const icons = [
    { label: "Visual Studio", Icon: VsIcon },
    { label: "React", Icon: ReactIcon },
    { label: "Python", Icon: PythonIcon },
    { label: "n8n", Icon: N8nIcon },
    { label: "Node.js", Icon: NodeIcon },
    { label: "AWS", Icon: AwsIcon },
    { label: "Google", Icon: GoogleIcon },
    { label: "HTML", Icon: HtmlIcon },
    { label: "CSS", Icon: CssIcon },
    { label: "Figma", Icon: FigmaIcon },
    { label: "WordPress", Icon: WordpressIcon },
    { label: "Analytics", Icon: AnalyticsIcon },
    { label: "Slack", Icon: SlackIcon },
    { label: "Colab", Icon: ColabIcon },
    { label: "Cursor", Icon: CursorIcon },
    { label: "Gemini", Icon: GeminiIcon },
    { label: "GitHub", Icon: GitHubTechIcon },
  ];

  const lane = [...icons, ...icons];

  return (
    <div className="mt-10">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm font-medium text-text">Tech Stack</div>
        <div className="text-xs text-muted">Tools we use to build reliable systems</div>
      </div>

      <div className="mt-4 overflow-hidden rounded-3xl border border-border bg-white/10 px-4 py-5 shadow-sm">
        <div className="jf-marquee-viewport">
          <div className="jf-marquee-track will-change-transform">
            {lane.map((it, idx) => (
              <LogoItem key={`${it.label}-${idx}`} label={it.label}>
                <it.Icon />
              </LogoItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
✅ PRICING (kept exactly as you approved previously)
========================================================= */
function parseNairaFrom(priceStr) {
  if (!priceStr) return 0;
  const cleaned = String(priceStr).replace(/\s/g, "");
  const rangeParts = cleaned.split("–");
  const first = rangeParts[0] || cleaned;
  const digits = first.replace(/[^\d]/g, "");
  const n = Number(digits || 0);
  return Number.isFinite(n) ? n : 0;
}
function formatNaira(n) {
  try {
    return `₦${Number(n).toLocaleString("en-NG")}`;
  } catch {
    return `₦${n}`;
  }
}

function PricingSection({ onContactClick }) {
  const [active, setActive] = useState("web");
  const [selectedPackageName, setSelectedPackageName] = useState(null);
  const [selectedAddOnIds, setSelectedAddOnIds] = useState([]);
  const categories = [
    { key: "web", label: "Web Development" },
    { key: "automation", label: "Automation" },
    { key: "analytics", label: "Analytics" },
  ];

  const webPackages = [
    {
      name: "Landing Page",
      price: "₦200,000",
      desc: "1-page scroll with CTA, mobile SEO-ready and responsive.",
      bullets: ["1-page scroll layout", "Strong CTA section", "Mobile + SEO-ready"],
      cta: { label: "Book Now", href: "/contact" },
      tag: null,
    },
    {
      name: "Business Site",
      price: "₦400,000",
      desc: "5-page conversion-optimized business website with SEO, analytics and lead capture.",
      bullets: ["5 pages", "SEO + analytics setup", "Lead capture"],
      cta: { label: "Book Now", href: "/contact" },
      tag: "Most Popular",
    },
    {
      name: "Custom Business App",
      price: "₦1,500,000 – ₦3,000,000+",
      desc: "Full customized business app with automated workflow, dashboards and integrations.",
      bullets: ["Automated workflows", "Dashboards & reporting", "Integrations"],
      cta: { label: "Request Quote", href: "/contact" },
      tag: null,
    },
  ];

  const automationPackages = [
    {
      name: "Basic Automation",
      price: "₦120,000",
      desc: "1–2 task flows (e.g., Form → Email + DB).",
      bullets: ["1–2 task flows", "Form → Email + DB", "Basic setup & testing"],
      cta: { label: "Book Now", href: "/contact" },
      tag: null,
    },
    {
      name: "Smart Workflows",
      price: "₦500,000",
      desc: "Multi-step logic, lead routing, onboarding.",
      bullets: ["Multi-step logic", "Lead routing", "Onboarding flows"],
      cta: { label: "Book Now", href: "/contact" },
      tag: "Most Popular",
    },
    {
      name: "Full Process Automation",
      price: "₦800,000 – ₦1,500,000",
      desc: "Custom automation engine with workflows, dashboards, and integrations.",
      bullets: ["Custom workflows", "Dashboards", "Integrations"],
      cta: { label: "Request Quote", href: "/contact" },
      tag: null,
    },
  ];

  const analyticsPackages = [
    {
      name: "Analytics Starter",
      price: "₦300,000 – ₦500,000",
      desc: "For small teams and first-time analytics users.",
      bullets: ["Data assessment (1–2 sources)", "Basic cleaning + EDA", "Insight report + KPI list"],
      cta: { label: "Book Now", href: "/contact" },
      tag: null,
    },
    {
      name: "Analytics Growth",
      price: "₦700,000 – ₦1,200,000",
      desc: "For growing businesses that want visibility & control.",
      bullets: ["Advanced cleaning + integration", "Dashboard (1–3 pages)", "Monthly insights (1 cycle)"],
      cta: { label: "Book Now", href: "/contact" },
      tag: "Most Popular",
    },
    {
      name: "Analytics Intelligence",
      price: "₦1,500,000 – ₦3,000,000",
      desc: "For data-driven decision-makers.",
      bullets: ["Predictive/forecast model (1 use case)", "Scenario & trend analysis", "Executive decision brief"],
      cta: { label: "Request Quote", href: "/contact" },
      tag: null,
    },
  ];

  const addOnsByCategory = {
    web: [
      { id: "web-extra-pages", name: "Extra Pages", price: "₦50,000 / page" },
      { id: "web-copywriting", name: "Copywriting", price: "₦80,000" },
      { id: "web-domain-host-setup", name: "Domain & Hosting Setup", price: "₦50,000" },
      { id: "web-standard-hosting", name: "Standard Hosting", price: "₦150,000" },
      { id: "web-whatsapp", name: "WhatsApp Chat", price: "₦80,000" },
      { id: "web-payment", name: "Payment Integration", price: "₦120,000" },
      { id: "web-ai-chatbot", name: "AI Chatbot", price: "₦250,000" },
      { id: "web-client-portal", name: "Client Portal", price: "₦200,000" },
      { id: "web-full-maintenance", name: "Full Maintenance", price: "₦200,000" },
      { id: "web-monthly-retainer", name: "Monthly Retainer", price: "₦25,000–₦40,000" },
    ],
    automation: [
      { id: "auto-n8n-setup", name: "n8n Setup", price: "₦150,000" },
      { id: "auto-self-hosted-engine", name: "Self-Hosted Automation Engine Setup", price: "₦150,000" },
      { id: "auto-workflow-audit", name: "Workflow Audit", price: "₦80,000" },
      { id: "auto-crm-integration", name: "CRM Integration", price: "₦150,000" },
      { id: "auto-n8n-zapier", name: "n8n/Zapier Advanced Setup", price: "₦120,000" },
      { id: "auto-monitoring", name: "Monitoring", price: "₦80,000" },
      { id: "auto-team-training", name: "Team Training", price: "₦80,000" },
      { id: "auto-sop-docs", name: "SOP Documentation", price: "₦120,000" },
      { id: "auto-monthly-retainer", name: "Monthly Retainer", price: "₦25,000–₦40,000" },
      { id: "auto-full-maintenance", name: "Full Maintenance", price: "₦200,000" },
      { id: "auto-ai-chatbot", name: "AI Chatbot", price: "₦250,000" },
      { id: "auto-client-portal", name: "Client Portal", price: "₦200,000" },
    ],
    analytics: [
      { id: "ana-business-dashboards", name: "Business Dashboards", price: "₦150,000" },
      { id: "ana-extra-dashboard-page", name: "Extra Dashboard Page", price: "₦80,000 / page" },
      { id: "ana-automated-alerts", name: "Automated Alerts", price: "₦80,000" },
      { id: "ana-more-sources", name: "More Data Sources", price: "₦120,000 / source" },
      { id: "ana-model-addon", name: "Model Add-on", price: "₦250,000" },
      { id: "ana-monthly-retainer", name: "Monthly Retainer", price: "₦25,000–₦40,000" },
      { id: "ana-sop-docs", name: "SOP Documentation", price: "₦120,000" },
      { id: "ana-standard-hosting", name: "Standard Hosting", price: "₦150,000" },
      { id: "ana-full-maintenance", name: "Full Maintenance", price: "₦200,000" },
      { id: "ana-client-portal", name: "Client Portal", price: "₦200,000" },
    ],
  };

  const getPackages = () => {
    if (active === "web") return webPackages;
    if (active === "automation") return automationPackages;
    return analyticsPackages;
  };

  const packages = getPackages();
  const addOns = addOnsByCategory[active] || [];

  const handleCategorySwitch = (key) => {
    setActive(key);
    setSelectedPackageName(null);
    setSelectedAddOnIds([]);
  };

  const selectedPackage = useMemo(() => {
    return packages.find((p) => p.name === selectedPackageName) || null;
  }, [packages, selectedPackageName]);

  const selectedAddOns = useMemo(() => {
    const map = new Map(addOns.map((a) => [a.id, a]));
    return selectedAddOnIds.map((id) => map.get(id)).filter(Boolean);
  }, [addOns, selectedAddOnIds]);

  const baseFrom = useMemo(() => parseNairaFrom(selectedPackage?.price || "₦0"), [selectedPackage]);
  const addOnsFrom = useMemo(
    () => selectedAddOns.reduce((sum, a) => sum + parseNairaFrom(a.price), 0),
    [selectedAddOns]
  );
  const totalFrom = baseFrom + addOnsFrom;

  const toggleAddOn = (id) => {
    setSelectedAddOnIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const clearSelection = () => {
    setSelectedPackageName(null);
    setSelectedAddOnIds([]);
  };

  return (
    <section className="relative py-16" id="pricing">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-text">Pricing</h2>
          <p className="mt-3 text-muted">Choose a package that matches your goals — clear scope, clear delivery.</p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {categories.map((c) => {
            const isActive = active === c.key;
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => handleCategorySwitch(c.key)}
                className={`jf-price-tab ${isActive ? "is-active" : ""}`}
                aria-pressed={isActive}
              >
                {c.label}
              </button>
            );
          })}

          {/* ✅ Not sure? => open ContactDock */}
          <a
            href="/contact"
            onClick={onContactClick}
            className="jf-price-tab jf-notsure group relative"
            aria-label="Not sure what you need? Talk to us."
          >
            Not sure?
            <span className="jf-tooltip" role="tooltip">
              Not sure what you need? Talk to us
            </span>
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => {
            const isSelected = selectedPackageName === p.name;
            return (
              <button
                key={p.name}
                type="button"
                onClick={() => setSelectedPackageName(p.name)}
                className={`jf-price-card jf-price-card-btn rounded-3xl border border-border bg-white/20 backdrop-blur p-8 shadow-card text-left ${
                  isSelected ? "is-selected" : ""
                }`}
                aria-pressed={isSelected}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-text">{p.name}</h3>
                    <div className="mt-1 text-sm text-muted">{p.desc}</div>
                  </div>
                  {p.tag ? (
                    <div className="jf-popular-tag jf-nowrap shrink-0 rounded-full border border-border bg-white/25 px-3 py-1 text-xs font-medium text-text">
                      {p.tag}
                    </div>
                  ) : null}
                </div>

                <div className="mt-6">
                  <div className="jf-price-line text-3xl font-semibold text-text leading-none break-words">{p.price}</div>
                  <div className="mt-2 text-sm text-muted">Transparent pricing. No hidden surprises.</div>
                </div>

                <div className="mt-6 space-y-2">
                  {p.bullets.map((b) => (
                    <div key={b} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full border border-border bg-white/25 text-text shrink-0">
                        ✓
                      </span>
                      <span className="min-w-0">{b}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between gap-3">
                  <span className="text-xs text-muted">{isSelected ? "Selected" : "Click to select"}</span>
                  <span className="text-xs font-medium text-olive hover:text-oliveHover transition">
                    {isSelected ? "Ready →" : "Select →"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-10 mx-auto max-w-5xl rounded-3xl border border-border bg-white/14 backdrop-blur p-6 shadow-soft">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-text">Add-ons</div>
              <div className="mt-1 text-sm text-muted">Optional upgrades you can add to any package.</div>
            </div>
            <div className="text-xs text-muted">Tap to add/remove</div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {addOns.map((a) => {
              const selected = selectedAddOnIds.includes(a.id);
              return (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => toggleAddOn(a.id)}
                  className={`jf-addon-chip jf-addon-btn ${selected ? "is-selected" : ""}`}
                  aria-pressed={selected}
                  title={`${a.name} — ${a.price}`}
                >
                  <span className="jf-addon-name">{a.name}</span>
                  <span className="jf-addon-price">{a.price}</span>
                  <span className={`jf-addon-check ${selected ? "on" : ""}`} aria-hidden="true">
                    ✓
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </Container>

      <div className={`jf-summary-wrap ${selectedPackage ? "is-visible" : ""}`} aria-live="polite">
        <Container>
          <div className="jf-summary-bar rounded-3xl border border-border bg-white/18 backdrop-blur shadow-soft">
            <div className="jf-summary-grid">
              <div className="min-w-0">
                <div className="text-xs text-muted">Selected</div>
                <div className="mt-1 text-sm font-semibold text-text truncate">
                  {selectedPackage ? selectedPackage.name : "Choose a package"}
                  {selectedAddOns.length ? (
                    <span className="text-muted font-normal"> + {selectedAddOns.length} add-on(s)</span>
                  ) : null}
                </div>

                {selectedAddOns.length ? (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedAddOns.slice(0, 4).map((a) => (
                      <span key={a.id} className="jf-summary-chip">
                        {a.name}
                      </span>
                    ))}
                    {selectedAddOns.length > 4 ? (
                      <span className="jf-summary-chip">+{selectedAddOns.length - 4} more</span>
                    ) : null}
                  </div>
                ) : (
                  <div className="mt-2 text-xs text-muted">Add-ons are optional — pick only what you need.</div>
                )}
              </div>

              <div className="text-right">
                <div className="text-xs text-muted">Total (from)</div>
                <div className="mt-1 text-2xl font-semibold text-text leading-none">
                  {selectedPackage ? formatNaira(totalFrom) : "₦0"}
                </div>
                <div className="mt-2 text-xs text-muted">Based on “from” values for ranges.</div>
              </div>

              <div className="flex items-center justify-end gap-3 flex-wrap">
                <button type="button" className="jf-summary-clear" onClick={clearSelection}>
                  Clear
                </button>

                {/* ✅ Summary CTA => open ContactDock */}
                <Button
                  href={selectedPackage?.cta?.href || "/contact"}
                  onClick={onContactClick}
                >
                  {selectedPackage?.cta?.label || "Proceed"}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

/* =========================================================
✅ Enterprise Trust Strip (KEEP ON HOMEPAGE)
========================================================= */
function EnterpriseTrustStrip() {
  const trustItems = [
    { label: "Enterprise delivery", meta: "Documentation + QA + handover" },
    { label: "Security-first", meta: "Least privilege + audit-ready" },
    { label: "Built for scale", meta: "Performance + reliability" },
    { label: "Executive reporting", meta: "KPIs + decision briefs" },
  ];

  const logoPlaceholders = [
    "NYCN",
    "Appneen",
    "Barcopet",
    "Afia Waziri",
    "Automation",
    "Analytics",
  ];

  return (
    <section className="relative py-12 sm:py-14" id="trust">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white/[0.1] shadow-lg">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />

          <div className="relative px-6 py-8 sm:px-8 sm:py-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs text-muted">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  Trust & credibility
                </div>

                <h3 className="mt-5 text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-text">
                  Trusted across analytics, automation, dashboards, and enterprise systems.
                </h3>

                <p className="mt-4 text-sm sm:text-base leading-7 text-muted">
                  We help organizations reduce operational friction through clean systems, AI-assisted workflows, executive reporting, and scalable digital infrastructure.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:w-[420px]">
                {trustItems.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-colors duration-200 hover:bg-white/[0.09]"
                  >
                    <div className="text-sm font-semibold text-text">
                      {item.label}
                    </div>

                    <div className="mt-2 text-xs leading-5 text-muted">
                      {item.meta}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-9 border-t border-white/10 pt-6">
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-between">
                {logoPlaceholders.map((logo) => (
                  <div
                    key={logo}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-xs sm:text-sm text-muted transition-colors duration-200 hover:border-gold/30 hover:bg-white/[0.08]"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
✅ Enterprise CTA (KEEP ON HOMEPAGE)
========================================================= */
function EnterpriseCTA({ onContactClick }) {
  return (
    <section className="relative pb-24" id="enterprise-engagement">
      <Container>
        <div className="jf-ent-final rounded-3xl border border-border bg-white/14 backdrop-blur p-7 sm:p-10 shadow-card">
          <div className="grid gap-10 items-center lg:grid-cols-2">
            <div className="min-w-0">
              <div className="jf-ent-kicker">Enterprise Engagement</div>
              <h2 className="mt-2 text-4xl font-semibold text-text">Ready to modernize your data, AI, or software stack?</h2>
              <p className="mt-4 text-muted max-w-xl">
                Let’s align on outcomes, scope the work properly, and deliver a system your team can rely on.
              </p>
              <div className="mt-8 flex gap-4 flex-wrap">
                <Button href="/contact" onClick={onContactClick}>
                  Request Enterprise Consultation
                </Button>
                <Button variant="secondary" href="/services">
                  Explore Capabilities
                </Button>
              </div>
              <div className="mt-6 text-xs text-muted">Typical start: Discovery → Architecture → Implementation → Handover + Support.</div>
            </div>

            <div className="jf-ent-side rounded-3xl border border-border bg-white/10 backdrop-blur p-6 sm:p-8 shadow-soft">
              <div className="text-sm font-semibold text-text">What you’ll get</div>
              <div className="mt-4 space-y-3">
                {["A clear scope and delivery plan", "Architecture + implementation roadmap", "Documentation and stakeholder reporting", "Deployment guidance and handover"].map((x) => (
                  <div key={x} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full border border-border bg-white/25 text-text shrink-0">
                      ✓
                    </span>
                    <span className="min-w-0">{x}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                {/* ✅ This link opens the dock */}
                <a href="/contact" onClick={onContactClick} className="jf-ent-ctaLink">
                  Talk to a solutions architect →
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function HomeMockupV1() {
  const [contactOpen, setContactOpen] = useState(false);
  const [isTickerPaused, setIsTickerPaused] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [autoServiceIndex, setAutoServiceIndex] = useState(0);

  // ✅ One handler to rule them all: use on links/buttons that used to go to /contact
  const openContact = (e) => {
    if (e?.preventDefault) e.preventDefault();
    setContactOpen(true);
  };
  const closeContact = () => setContactOpen(false);

  const socials = [
    { label: "LinkedIn", href: "#", Icon: LinkedinIcon, float: "jf-float-slow" },
    { label: "X", href: "#", Icon: XIcon, float: "jf-float-fast" },
    { label: "GitHub", href: "#", Icon: GithubIcon, float: "jf-float-medium" },
    { label: "Facebook", href: "#", Icon: FacebookIcon, float: "jf-float-slow" },
    { label: "Instagram", href: "#", Icon: InstagramIcon, float: "jf-float-medium" },
  ];

  const serviceStreamItems = [
    { label: "Data Analytics", desc: "Turn messy data into clear decisions.", href: "/services#data-analytics", tone: "gold" },
    { label: "AI Automation", desc: "Automate repetitive work with smart workflows.", href: "/services#ai-automation", tone: "olive" },
    { label: "Software Development", desc: "Build reliable systems that scale with your business.", href: "/services#software-development", tone: "gold" },
    { label: "Web Development", desc: "Modern, fast websites and platforms.", href: "/services#web-development", tone: "olive" },
    { label: "Dashboards & BI", desc: "Beautiful dashboards your team actually uses.", href: "/services#dashboards-bi", tone: "gold" },
    { label: "Data Engineering", desc: "Pipelines, warehouses, and clean data foundations.", href: "/services#data-engineering", tone: "olive" },
  ];

  const lane = [...serviceStreamItems, ...serviceStreamItems];
  useEffect(() => {
  if (isTickerPaused) return;

  const timer = setInterval(() => {
    setAutoServiceIndex((i) => (i + 1) % serviceStreamItems.length);
  }, 3500);

  return () => clearInterval(timer);
}, [isTickerPaused, serviceStreamItems.length]);

const displayedService = activeService || serviceStreamItems[autoServiceIndex];

  const handleEnterService = (it) => {
    setIsTickerPaused(true);
    setActiveService(it);
  };
  const handleLeaveService = () => {
    setIsTickerPaused(false);
    setActiveService(null);
  };

  return (
    <div className="relative min-h-screen jf-hero-bg flex flex-col pb-28 overflow-x-hidden">
      <div className="jf-grid-layer" style={{ zIndex: 0 }} />
      <RevealOnScroll />
      <div className="relative z-10 flex-1 min-w-0">
      
        {/* HERO */}
<section className="relative overflow-hidden pt-10 sm:pt-14 pb-12 sm:pb-16 min-h-[72vh]">
  <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true">
    <FloatingIcons />
  </div>

  <Container className="relative z-10">
    <div className="grid gap-10 sm:gap-12 items-center md:grid-cols-2 md:gap-12">
      <div className="min-w-0 max-w-2xl">
        <div className="jf-ent-badge">
          Enterprise-grade delivery • Governance • Outcomes
        </div>

        <h1 className="text-[2.45rem] sm:text-5xl md:text-6xl font-semibold text-text leading-[1.04] sm:leading-tight tracking-[-0.035em]">
          Enterprise Data, AI & Software
          <span className="block">Systems Built for Scale</span>
        </h1>

        <p className="mt-5 sm:mt-6 text-[15px] sm:text-lg leading-7 sm:leading-8 text-muted max-w-xl">
          We architect and deliver reliable digital systems — from data foundations
          and executive dashboards to automation workflows and production-ready software.
        </p>

        <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Button onClick={openContact}>Request Consultation</Button>
          <Button variant="secondary" href="#trust">
            View Trust Signals
          </Button>
        </div>

        <div className="mt-6 sm:mt-7 flex flex-wrap gap-2">
          {["Architecture-first", "Documentation", "Monitoring", "Handover-ready"].map((t) => (
            <span key={t} className="jf-ent-chip">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Services Stream (kept inside Hero) */}
      <div className="md:justify-self-end w-full max-w-md min-w-0">
        <div className="jf-glow-card rounded-3xl border border-border bg-white/14 backdrop-blur p-5 sm:p-7 shadow-card">
          <div className="flex items-center justify-between gap-3">
            <div className="text-sm font-medium text-text">Solutions Overview</div>
            <span className="rounded-full border border-border bg-white/25 px-3 py-1 text-xs text-muted shrink-0">
              Enterprise-ready
            </span>
          </div>

          <p className="mt-3 text-sm leading-6 text-muted">
            Explore core solutions —{" "}
            <span className="font-medium text-text">
              hover to preview, click to open
            </span>.
          </p>

          <div className="mt-5 jf-ticker overflow-hidden">
            <div
              className="jf-ticker-track"
              style={{ animationPlayState: isTickerPaused ? "paused" : "running" }}
            >
              <div className="jf-ticker-lane" aria-hidden="true">
                {lane.map((it, idx) => (
                  <a
                    key={`${it.label}-${idx}`}
                    href={it.href}
                    className="jf-ticker-item jf-ticker-link"
                    aria-label={`${it.label}: ${it.desc}`}
                    onMouseEnter={() => handleEnterService(it)}
                    onMouseLeave={handleLeaveService}
                    onFocus={() => handleEnterService(it)}
                    onBlur={handleLeaveService}
                  >
                    <span className={`jf-glow-dot ${it.tone}`} aria-hidden="true" />
                    <span className="text-sm font-medium text-text">{it.label}</span>
                  </a>
                ))}
              </div>

              <div className="jf-ticker-lane" aria-hidden="true">
                {lane.map((it, idx) => (
                  <a
                    key={`${it.label}-dup-${idx}`}
                    href={it.href}
                    className="jf-ticker-item jf-ticker-link"
                    aria-label={`${it.label}: ${it.desc}`}
                    onMouseEnter={() => handleEnterService(it)}
                    onMouseLeave={handleLeaveService}
                    onFocus={() => handleEnterService(it)}
                    onBlur={handleLeaveService}
                  >
                    <span className={`jf-glow-dot ${it.tone}`} aria-hidden="true" />
                    <span className="text-sm font-medium text-text">{it.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 min-h-[1.25rem] text-xs text-muted">
              {displayedService ? (
                <>
                  <span className="font-medium text-text">{displayedService.label}:</span>{" "}
                  {displayedService.desc}
                </>
              ) : (
                "Tap a solution to open it."
              )}
            </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <div className="text-xs text-muted">Forging the Future.</div>
            <a
              href="/services"
              className="text-xs font-medium text-olive hover:text-oliveHover transition"
            >
              Explore services →
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* STATS */}
    <div className="mt-9 sm:mt-10 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <Stat title="60+" subtitle="Successful Projects" icon="🏆" />
      <Stat title="Analytics • AI • Automation" subtitle="End-to-end delivery" icon="📊" />
      <Stat title="Nigeria-Based, Global-Ready" subtitle="Remote-friendly delivery" icon="🌍" />
      <Stat title="Trusted by Leading Businesses" subtitle="Quality & reliability" icon="✅" />
    </div>

    
    {/* TECH STACK */}
    <TechStackMarquee />
  </Container>
</section>

        {/* TRUST STRIP */}
        <EnterpriseTrustStrip />

        {/* PRICING (now can open ContactDock) */}
        <PricingSection onContactClick={openContact} />

        {/* ENTERPRISE ENGAGEMENT (now can open ContactDock) */}
        <EnterpriseCTA onContactClick={openContact} />

        <ClientLogoSlider />

        {/* CONTACT DOCK (single instance) */}
        <ContactDock open={contactOpen} onClose={closeContact} />
      </div>

      <style>{`
        html, body { max-width: 100%; overflow-x: hidden; }
        * { box-sizing: border-box; }
        .jf-hero-bg{
          background:
            radial-gradient(1200px 700px at 20% 10%, rgba(201,162,77,0.22), transparent 60%),
            radial-gradient(900px 600px at 90% 0%, rgba(90,120,60,0.18), transparent 55%),
            radial-gradient(1000px 700px at 60% 90%, rgba(255,255,255,0.10), transparent 55%),
            linear-gradient(180deg, rgba(10,12,16,0.04) 0%, rgba(10,12,16,0.02) 50%, rgba(10,12,16,0.04) 100%);
        }
        .jf-grid-layer{
          position:absolute; inset:0;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(circle at 50% 20%, black 0%, transparent 70%);
          opacity: 0.35;
          pointer-events:none;
        }
        .jf-ent-badge{
          display:inline-flex;
          align-items:center;
          gap:10px;
          padding: 10px 14px;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          box-shadow: 0 18px 46px rgba(0,0,0,0.10), 0 0 0 2px rgba(201,162,77,0.08);
          font-size: 12px;
          color: rgba(20,20,18,0.78);
          margin-bottom: 14px;
        }
        .jf-ent-chip{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.12);
          padding: 7px 10px;
          font-size: 11px;
          color: rgba(20,20,18,0.72);
        }
        .jf-ent-logo{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.12);
          padding: 8px 12px;
          font-size: 12px;
          color: rgba(20,20,18,0.70);
        }
        .jf-ent-mini{
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.10);
          padding: 14px 14px;
        }
        .jf-ent-kicker{
          display:inline-flex;
          border-radius: 9999px;
          border: 1px solid rgba(201,162,77,0.20);
          background: rgba(201,162,77,0.10);
          padding: 8px 12px;
          font-size: 12px;
          color: rgba(20,20,18,0.78);
        }
        .jf-ent-ctaLink{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.14);
          padding: 10px 14px;
          font-size: 12px;
          color: rgba(20,20,18,0.78);
          transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
          text-decoration: none;
          white-space: nowrap;
        }
        .jf-ent-ctaLink:hover{
          transform: translateY(-1px);
          background: rgba(255,255,255,0.18);
          box-shadow: 0 14px 36px rgba(0,0,0,0.12), 0 0 0 2px rgba(201,162,77,0.12);
        }
        .jf-ticker{
          overflow:hidden;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.10);
        }
        .jf-ticker-track{
          display:flex;
          width:max-content;
          animation: jfTickerMove 60s linear infinite;
          will-change: transform;
        }
        .jf-ticker-lane{
          display:flex;
          align-items:center;
          gap: 10px;
          padding: 10px 12px;
          width:max-content;
        }
        .jf-ticker-item{
          display:inline-flex;
          align-items:center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 9999px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.12);
          transition: transform 180ms ease, background 180ms ease, box-shadow 180ms ease;
          white-space: nowrap;
        }
        .jf-ticker-item:hover{
          transform: translateY(-1px);
          background: rgba(255,255,255,0.18);
          box-shadow:
            0 12px 30px rgba(0,0,0,0.12),
            0 0 0 2px rgba(201, 162, 77, 0.14);
        }
        @keyframes jfTickerMove{
          0%{ transform: translateX(0); }
          100%{ transform: translateX(-50%); }
        }
        .jf-glow-dot{
          width: 10px; height: 10px; border-radius: 9999px;
          box-shadow: 0 0 0 2px rgba(255,255,255,0.20), 0 0 18px rgba(201,162,77,0.25);
        }
        .jf-glow-dot.gold{ background: rgba(201,162,77,0.95); box-shadow: 0 0 0 2px rgba(255,255,255,0.22), 0 0 18px rgba(201,162,77,0.35); }
        .jf-glow-dot.olive{ background: rgba(90,120,60,0.95); box-shadow: 0 0 0 2px rgba(255,255,255,0.20), 0 0 18px rgba(90,120,60,0.30); }
        .jf-marquee-viewport { overflow:hidden; position:relative; }
        .jf-marquee-viewport:before,
        .jf-marquee-viewport:after{
          content:""; position:absolute; top:0; bottom:0; width:56px; z-index:2; pointer-events:none;
        }
        .jf-marquee-viewport:before{ left:0; background: linear-gradient(to right, rgba(8,10,14,0.55), transparent); }
        .jf-marquee-viewport:after{ right:0; background: linear-gradient(to left, rgba(8,10,14,0.55), transparent); }
        .jf-marquee-track{
          display:flex; align-items:center; gap:22px;
          width:max-content;
          animation: jfMarqueeRTL 34s linear infinite;
          will-change: transform;
        }
        .jf-marquee-viewport:hover .jf-marquee-track{ animation-play-state: paused; }
        @keyframes jfMarqueeRTL{ 0%{ transform: translateX(0);} 100%{ transform: translateX(-50%);} }
        .jf-logo{
          display:grid; place-items:center;
          filter: drop-shadow(0 0 10px rgba(201, 162, 77, 0.42)) drop-shadow(0 0 24px rgba(201, 162, 77, 0.22));
          transition: filter 180ms ease, transform 180ms ease;
        }
        .jf-logo svg{ width:100%; height:100%; display:block; }
        .group:hover .jf-logo{
          transform: translateY(-1px);
          filter: drop-shadow(0 0 14px rgba(201, 162, 77, 0.62))
                  drop-shadow(0 0 34px rgba(201, 162, 77, 0.30))
                  drop-shadow(0 0 60px rgba(201, 162, 77, 0.14));
        }
        .jf-price-tab{
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.10);
          backdrop-filter: blur(10px);
          color: rgba(20,20,18,0.88);
          padding: 10px 14px;
          border-radius: 9999px;
          font-size: 13px;
          transition: transform 180ms ease, background 180ms ease, box-shadow 180ms ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .jf-price-tab:hover{
          transform: translateY(-1px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.10), 0 0 0 2px rgba(201, 162, 77, 0.10);
        }
        .jf-price-tab.is-active{
          background: rgba(255,255,255,0.18);
          box-shadow: 0 12px 34px rgba(0,0,0,0.12), 0 0 0 2px rgba(201, 162, 77, 0.22);
        }
        .jf-nowrap{ white-space: nowrap; }
        .jf-price-line{ letter-spacing: -0.015em; }
        .jf-summary-wrap{
          position: sticky;
          bottom: 18px;
          z-index: 40;
          opacity: 0;
          transform: translateY(12px);
          pointer-events: none;
          transition: opacity 180ms ease, transform 180ms ease;
        }
        .jf-summary-wrap.is-visible{
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .jf-summary-bar{ padding: 14px; border-radius: 24px; }
        .jf-summary-grid{
          display: grid;
          grid-template-columns: 1.6fr 0.9fr auto;
          gap: 14px;
          align-items: center;
        }
        @media (max-width: 768px){
          .jf-summary-grid{
            grid-template-columns: 1fr;
            gap: 10px;
            text-align: left;
          }
          .jf-summary-bar{ padding: 12px; }
        }
        .jf-summary-chip{
          display:inline-flex;
          border-radius: 9999px;
          border:1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.18);
          padding: 6px 10px;
          font-size: 11px;
          color: rgba(20,20,18,0.78);
        }
        .jf-summary-clear{
          font-size: 12px;
          padding: 10px 12px;
          border-radius: 9999px;
          border:1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.12);
          color: rgba(20,20,18,0.74);
          transition: transform 160ms ease, background 160ms ease, box-shadow 160ms ease;
          white-space: nowrap;
        }
        .jf-summary-clear:hover{
          transform: translateY(-1px);
          background: rgba(255,255,255,0.18);
          box-shadow: 0 10px 24px rgba(0,0,0,0.10);
        }
      `}</style>
    </div>
  );
}
