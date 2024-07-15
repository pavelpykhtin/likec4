import type { SVGProps } from 'react'
const SvgApplicationMigrationService = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    <defs>
      <linearGradient id="a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#055F4E" />
        <stop offset="100%" stopColor="#56C0A7" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M59.692 34.99c-.438-3.781-2.423-6.52-5.391-7.388-2.173-.634-4.453-.102-6.172 1.358-.908-2.053-2.097-3.824-3.551-5.283-4.652-4.666-11.017-5.931-17.024-3.386-5.127 2.17-8.992 8.165-8.992 13.943q0 .518.033 1.033C15.8 36.183 11 38.79 11 45.87q0 .565.042 1.097c.431 5.507 3.064 9.133 7.223 9.948l.385-1.963c-4.397-.861-5.405-5.47-5.614-8.14A12 12 0 0 1 13 45.87c0-6.165 4.271-8.216 6.86-8.892a1.003 1.003 0 0 0 .796-1.13 14 14 0 0 1-.094-1.614c0-4.94 3.414-10.256 7.772-12.101 7.537-3.193 12.879 1.003 14.828 2.957 1.584 1.589 2.82 3.619 3.675 6.035a1 1 0 0 0 1.747.26c1.243-1.684 3.269-2.414 5.156-1.863 2.271.664 3.764 2.957 4.009 6.144l-.001.005a1 1 0 0 0 .82 1.13c2.475.426 8.231 2.169 8.231 9.155 0 8.326-8.055 9.115-8.314 9.14H45.126l-.002 1.99 13.441.007c.103-.008 10.234-.95 10.234-11.137 0-7.922-6.211-10.293-9.107-10.966M35.125 51.096h2v-9h-9v2h5.691L20.395 58.412l1.459 1.369 13.271-14.156zm17-9.58L33.85 60.785l-1.451-1.376 18.317-19.312h-9.591v-2h13v13h-2z"
      />
    </g>
  </svg>
)
export default SvgApplicationMigrationService
