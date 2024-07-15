import type { SVGProps } from 'react'
const SvgRoboMaker = (props: SVGProps<SVGSVGElement>) => (
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
        d="M15.5 41a.5.5 0 1 1-.002 1.002A.5.5 0 0 1 15.5 41m0 3c1.379 0 2.5-1.122 2.5-2.5S16.879 39 15.5 39a2.503 2.503 0 0 0-2.5 2.5c0 1.378 1.121 2.5 2.5 2.5m.5-14.5a.5.5 0 1 1-1.002-.002A.5.5 0 0 1 16 29.5m-2 0c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5m9.5-7.5a.5.5 0 1 1-.002 1.002A.5.5 0 0 1 23.5 22m0 2c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5-1.5.673-1.5 1.5.673 1.5 1.5 1.5M20 35.5a.5.5 0 1 1-1.002-.002A.5.5 0 0 1 20 35.5m-2 0c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5m5.5-7.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5m0 5c1.93 0 3.5-1.57 3.5-3.5S25.43 26 23.5 26 20 27.57 20 29.5s1.57 3.5 3.5 3.5m-7-14c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5m0 5c1.93 0 3.5-1.57 3.5-3.5S18.43 17 16.5 17 13 18.57 13 20.5s1.57 3.5 3.5 3.5m12.207-5.293-1.414-1.414C30.459 14.127 35.581 12 40.039 12c4.413 0 9.504 2.127 12.668 5.293l-1.414 1.414C48.522 15.936 43.896 14 40.039 14c-3.9 0-8.56 1.936-11.332 4.707M40.039 17c3.415 0 6.574 1.2 8.668 3.292l-1.414 1.416C45.597 20.012 42.885 19 40.039 19c-2.897 0-5.638 1.012-7.332 2.707l-1.414-1.414C33.354 18.231 36.623 17 40.039 17M66 61.384l-1.972.993v-9.368L66 54.498zM62.028 66H60V50h2.028v16M18 64.771V50h2v16h-2zm-4-3.485v-7.6l2-.772v9.057zM40 32c5.064 0 9.895 1.937 13.253 5.312C56.338 40.415 58.024 44.563 58 49v17H22l-.001-16.969C22.304 39.322 30.042 32 40 32m-2-5c0-1.118 1.088-1.353 2-1.353s2 .235 2 1.353v3.096A22 22 0 0 0 40 30q-1.016.001-2 .092zm30 26.502-3.972-3V48h-4.071c-.217-4.586-2.059-8.853-5.286-12.098-2.827-2.842-6.584-4.76-10.671-5.526V27c0-2.037-1.57-3.353-4-3.353S36 24.963 36 27v3.369C27.251 32.009 20.797 38.988 20.079 48H16v2.77l-4 1.544v10.4l4 1.371V68h48.028v-3.384l3.972-2zM33 46c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2m0 6c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4m14-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2m0 6c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4"
      />
    </g>
  </svg>
)
export default SvgRoboMaker
