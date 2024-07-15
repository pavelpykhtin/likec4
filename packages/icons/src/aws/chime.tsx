import type { SVGProps } from 'react'
const SvgChime = (props: SVGProps<SVGSVGElement>) => (
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
        d="m66 46.001-14.875-4.299v-5.279L66 40.75zm-8.148 12.917-3.715 3.714-7.689-13.781 3.736-3.736zM44.5 47.971a1 1 0 0 0-.187 1.154h-6.767c-.245 0-.474.089-.651.24L32.029 44.5a.995.995 0 0 0-1.154-.188v-6.767c0-.245-.089-.474-.24-.651l4.865-4.866a1 1 0 0 0 .188-1.153h6.766c.245 0 .474-.09.651-.241l4.866 4.866a1 1 0 0 0 1.154.187v6.767c0 .245.089.474.24.651zM39.249 66h-5.25l4.299-14.875h5.279zm-18.167-8.149-3.716-3.715 13.783-7.688 3.735 3.735zM14 39.249v-5.251l14.875 4.299v5.279zm8.148-18.167 3.715-3.715 7.689 13.781-3.736 3.736zM40.751 14h5.25l-4.299 14.875h-5.279zm18.167 8.148 3.716 3.715-13.783 7.688-3.735-3.735zm8.361 16.892-15.88-4.621 13.365-7.454a1 1 0 0 0 .219-1.58l-5.184-5.184a1 1 0 0 0-1.193-.167l-14.613 8.118 4.299-14.875A1.002 1.002 0 0 0 47.331 12H40a1 1 0 0 0-.96.72L34.42 28.6l-7.455-13.364a1.002 1.002 0 0 0-1.58-.219l-5.184 5.184a1 1 0 0 0-.167 1.193l8.117 14.612-14.874-4.298a.998.998 0 0 0-1.277.96V40a1 1 0 0 0 .721.959l15.88 4.621-13.365 7.454a1.002 1.002 0 0 0-.219 1.58l5.184 5.184a1 1 0 0 0 1.193.167l14.613-8.118-4.299 14.875A1.002 1.002 0 0 0 32.669 68H40a1 1 0 0 0 .96-.721l4.62-15.88 7.455 13.364a1 1 0 0 0 1.58.219l5.184-5.184a1 1 0 0 0 .167-1.193l-8.117-14.612 14.874 4.299A1 1 0 0 0 68 47.331V40a1 1 0 0 0-.721-.96"
      />
    </g>
  </svg>
)
export default SvgChime
