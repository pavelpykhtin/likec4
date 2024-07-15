import type { SVGProps } from 'react'
const SvgIoTEduKit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    <defs>
      <linearGradient id="a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#1B660F" />
        <stop offset="100%" stopColor="#6CAE3E" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M26 56c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m8-13.737V52h-3.101A5.01 5.01 0 0 0 26 48c-2.757 0-5 2.243-5 5s2.243 5 5 5a5.01 5.01 0 0 0 4.899-4H35a1 1 0 0 0 1-1V42.514a37 37 0 0 1-2-.251m22.989-10.986C56.667 35.492 49.019 39 40 39c-9.014 0-16.659-3.505-16.989-7.717l2.646-4.01 14.027 4.676a1 1 0 0 0 .632 0l14.087-4.696zm10.327-10.226-27-9a1 1 0 0 0-.632 0l-9.721 3.24 3.096 1.077L40 14.054 63.838 22 40 29.946 16.162 22l10.619-3.539 10.968 3.815c.168.805 1.059 1.367 2.251 1.367 1.324 0 2.286-.691 2.286-1.643s-.962-1.643-2.286-1.643c-.415 0-.789.074-1.114.197l-21.558-7.498A.998.998 0 0 0 16 14v3.835l2-.667v-1.761l5.685 1.977-11.001 3.667a1 1 0 0 0 0 1.898L16 24.054v8.953c-1.073 1.213-1.25 4.205-1.25 4.243 0 1.241 1.01 2.25 2.25 2.25s2.25-1.009 2.25-2.25c0-.038-.177-3.03-1.25-4.243v-8.286l5.693 1.897-2.528 3.831A1 1 0 0 0 21 31c0 5.607 8.346 10 19 10s19-4.393 19-10a1 1 0 0 0-.159-.541l-2.481-3.858 10.956-3.652a1 1 0 0 0 0-1.898M40 66c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m1-7.899V42.69c-.334.008-.663.027-1 .027s-.666-.019-1-.027v15.411A5.01 5.01 0 0 0 35 63c0 2.757 2.243 5 5 5s5-2.243 5-5a5.01 5.01 0 0 0-4-4.899M54 56c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3m0-8a5.01 5.01 0 0 0-4.899 4H46v-9.737q-.983.151-2 .251V53a1 1 0 0 0 1 1h4.101A5.01 5.01 0 0 0 54 58c2.757 0 5-2.243 5-5s-2.243-5-5-5"
      />
    </g>
  </svg>
)
export default SvgIoTEduKit
