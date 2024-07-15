import type { SVGProps } from 'react'
const SvgBatch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    <defs>
      <linearGradient id="a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#C8511B" />
        <stop offset="100%" stopColor="#F90" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M40.226 58.897c1.239 0 2.245.997 2.245 2.227a2.237 2.237 0 0 1-2.245 2.227 2.237 2.237 0 0 1-2.245-2.227 2.237 2.237 0 0 1 2.245-2.227M21.3 40.876a2.237 2.237 0 0 1-2.245 2.227 2.237 2.237 0 0 1-2.245-2.227 2.237 2.237 0 0 1 2.245-2.227c1.24 0 2.245.998 2.245 2.227M61.38 66c-2.582 0-4.604-1.934-4.604-4.402 0-2.518 2.066-4.567 4.604-4.567 2.54 0 4.605 2.049 4.605 4.567 0 2.468-2.022 4.402-4.605 4.402m-4.604-25c0-2.518 2.066-4.567 4.604-4.567 2.54 0 4.605 2.049 4.605 4.567s-2.066 4.567-4.605 4.567c-2.538 0-4.604-2.049-4.604-4.567m-16.55 4.567c-2.539 0-4.603-2.049-4.603-4.567s2.064-4.567 4.604-4.567S44.83 38.482 44.83 41s-2.065 4.567-4.604 4.567M45.266 61c0 2.851-2.166 5-5.04 5s-5.04-2.149-5.04-5 2.166-5 5.04-5 5.04 2.149 5.04 5M34.177 21c0-3.14 2.882-6 6.049-6 3.166 0 6.048 2.86 6.048 6s-2.882 6-6.048 6-6.049-2.86-6.049-6m-15.12 25c-2.875 0-5.04-2.149-5.04-5 0-2.894 2.26-5.248 5.04-5.248 2.779 0 5.04 2.354 5.04 5.248 0 2.851-2.167 5-5.04 5m4.588 15.564c0 2.487-2.022 4.436-4.605 4.436-2.581 0-4.604-1.949-4.604-4.436 0-2.519 2.066-4.567 4.604-4.567 2.54 0 4.605 2.048 4.605 4.567m38.742-6.449v-7.633C65.56 46.999 68 44.28 68 41c0-3.621-2.97-6.567-6.621-6.567-3.306 0-6.047 2.42-6.534 5.567H46.76c-.436-2.82-2.683-5.049-5.526-5.482v-5.595c3.86-.526 7.056-3.999 7.056-7.923 0-4.262-3.768-8-8.064-8s-8.065 3.738-8.065 8c0 3.924 3.197 7.397 7.057 7.923v5.595c-2.843.433-5.09 2.662-5.526 5.482h-7.654c-.478-3.523-3.422-6.248-6.982-6.248C15.166 33.752 12 37.004 12 41c0 3.584 2.587 6.451 6.048 6.924v7.155c-3.179.477-5.628 3.199-5.628 6.485 0 3.609 2.909 6.436 6.62 6.436 3.713 0 6.621-2.827 6.621-6.436 0-3.275-2.431-5.99-5.596-6.48v-7.16c3.13-.428 5.54-2.817 5.971-5.924h7.656c.436 2.82 2.683 5.049 5.526 5.482v6.594c-3.462.473-6.049 3.34-6.049 6.924 0 3.925 3.1 7 7.057 7 3.956 0 7.056-3.075 7.056-7 0-3.584-2.586-6.451-6.048-6.924v-6.594c2.843-.433 5.09-2.662 5.526-5.482h8.085c.437 2.82 2.683 5.049 5.526 5.482v7.633c-3.171.484-5.612 3.203-5.612 6.483 0 3.59 2.908 6.402 6.62 6.402S68 65.188 68 61.598c0-3.28-2.44-5.999-5.613-6.483"
      />
    </g>
  </svg>
)
export default SvgBatch
