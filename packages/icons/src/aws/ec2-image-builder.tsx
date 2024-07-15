import type { SVGProps } from 'react'
const SvgEc2ImageBuilder = (props: SVGProps<SVGSVGElement>) => (
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
        d="m32.591 32.745-7.909 7.91 7.909 7.909 1.414-1.414-6.495-6.495 6.495-6.496zM14 64h26V16H14zm-2 2h30V14H12zm5.238-26c0 11.383 9.26 20.643 20.643 20.643v-2c-10.279 0-18.643-8.363-18.643-18.643s8.364-18.643 18.643-18.643v-2c-11.383 0-20.643 9.26-20.643 20.643m26.469 10.399v2c6.837 0 12.4-5.562 12.4-12.399s-5.563-12.4-12.4-12.4v2c5.735 0 10.4 4.666 10.4 10.4s-4.665 10.399-10.4 10.399M69 35.853v8.294a2.04 2.04 0 0 1-2.037 2.036h-3.547a21 21 0 0 1-1.575 3.794l2.511 2.511c.385.384.596.896.596 1.44s-.211 1.056-.596 1.441l-5.865 5.864c-.769.769-2.111.77-2.88-.001l-2.511-2.51a21 21 0 0 1-3.793 1.575v3.547a2.04 2.04 0 0 1-2.037 2.037h-4.147v-2h4.147l.037-5.109.744-.197a19 19 0 0 0 4.719-1.959l.665-.387 3.591 3.59 5.916-5.865-3.59-3.642.388-.665a19 19 0 0 0 1.959-4.719l.197-.745h5.071l.037-8.33-5.108-.037-.197-.744a19 19 0 0 0-1.959-4.719l-.388-.666 3.59-3.589-5.865-5.917-3.642 3.59-.665-.387a19 19 0 0 0-4.719-1.959l-.744-.198v-5.071l-4.099-.037v-2h4.062a2.04 2.04 0 0 1 2.037 2.037v3.547c1.309.399 2.58.927 3.793 1.575l2.512-2.511c.767-.77 2.11-.769 2.879-.001l5.865 5.866c.385.384.596.896.596 1.44s-.211 1.055-.596 1.44l-2.511 2.511a21 21 0 0 1 1.575 3.793h3.547A2.04 2.04 0 0 1 69 35.853"
      />
    </g>
  </svg>
)
export default SvgEc2ImageBuilder
