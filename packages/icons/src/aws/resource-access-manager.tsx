import type { SVGProps } from 'react'
const SvgResourceAccessManager = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    <defs>
      <linearGradient id="a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#BD0816" />
        <stop offset="100%" stopColor="#FF5252" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M33 60a1.001 1.001 0 0 0-2 0 1.001 1.001 0 0 0 2 0m2 0c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3m19.431.845L52.586 59H38.71a1 1 0 0 1-.958-.715C37.001 55.762 34.636 54 32 54c-3.309 0-6 2.691-6 6s2.691 6 6 6a6.03 6.03 0 0 0 5.423-3.429 1 1 0 0 1 .903-.571H41c.266 0 .52.105.707.293L43 63.586l1.293-1.293A1 1 0 0 1 45 62h2c.266 0 .52.105.707.293L49 63.586l1.293-1.293A1 1 0 0 1 51 62h1.697zm2.276-.552a1 1 0 0 1-.152 1.539l-3 2A1 1 0 0 1 53 64h-1.586l-1.707 1.707a1 1 0 0 1-1.414 0L46.586 64h-1.172l-1.707 1.707a1 1 0 0 1-1.414 0L40.586 64h-1.657A8.05 8.05 0 0 1 32 68c-4.411 0-8-3.589-8-8s3.589-8 8-8c3.26 0 6.208 2.022 7.418 5H53c.266 0 .52.105.707.293zM47.414 25 53 30.586 58.586 25 53 19.414zm4.879 7.707-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a.997.997 0 0 1-1.414 0M34.09 29l-6.087-8.304L21.964 29zm1.973 2H20a1 1 0 0 1-.809-1.588l8-11a1 1 0 0 1 .807-.412c.346-.016.62.151.809.409l8.062 11A1 1 0 0 1 36.063 31M22 42.5c0 3.033 2.468 5.5 5.5 5.5s5.5-2.467 5.5-5.5-2.468-5.5-5.5-5.5a5.506 5.506 0 0 0-5.5 5.5m-2 0c0-4.136 3.364-7.5 7.5-7.5s7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5-7.5-3.364-7.5-7.5M48 47h9v-9h-9zm11 1a1 1 0 0 1-1 1H47a1 1 0 0 1-1-1V37a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1zm9-35v50a1 1 0 0 1-1 1h-8v-2h7V14H14v48h7v2h-8a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h54a1 1 0 0 1 1 1"
      />
    </g>
  </svg>
)
export default SvgResourceAccessManager
