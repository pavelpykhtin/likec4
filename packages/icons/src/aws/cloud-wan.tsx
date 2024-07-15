import type { SVGProps } from 'react'
const SvgCloudWan = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    <defs>
      <linearGradient id="a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#4D27A8" />
        <stop offset="100%" stopColor="#A166FF" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M66 40c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4 4-1.794 4-4m-10.337-1a15.6 15.6 0 0 0-2.553-7.643c-1.377.729-2.986 1.327-4.751 1.782.378 1.811.6 3.785.657 5.861zm0 2h-6.647a33.4 33.4 0 0 1-.582 5.454c1.818.475 3.474 1.098 4.874 1.863A15.6 15.6 0 0 0 55.663 41m-3.525 8.967c-1.202-.633-2.603-1.159-4.146-1.567-.717 2.662-1.771 4.893-3.056 6.509a15.76 15.76 0 0 0 7.202-4.942M44 62c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4 4-1.794 4-4m-8.936-7.091c-1.285-1.616-2.339-3.847-3.056-6.51-1.544.407-2.945.933-4.148 1.566a15.77 15.77 0 0 0 7.204 4.944m-3.498-8.455A33.5 33.5 0 0 1 30.984 41h-6.647a15.6 15.6 0 0 0 2.354 7.316c1.4-.765 3.057-1.388 4.875-1.862M24.337 39h6.647c.057-2.076.279-4.05.657-5.861-1.765-.455-3.374-1.053-4.751-1.782A15.6 15.6 0 0 0 24.337 39m3.787-9.26c1.174.589 2.521 1.081 3.999 1.463.712-2.486 1.721-4.578 2.941-6.112a15.75 15.75 0 0 0-6.94 4.649M36 18c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4m4 14.162c2.057 0 4.053-.189 5.916-.529-1.266-4.375-3.467-7.347-5.916-7.347s-4.65 2.972-5.916 7.347c1.863.34 3.859.529 5.916.529M47.018 39a31.6 31.6 0 0 0-.623-5.426 35 35 0 0 1-12.79 0A31.6 31.6 0 0 0 32.982 39zm-7.02 8.413c-2.097 0-4.131.196-6.025.549 1.245 4.595 3.503 7.752 6.027 7.752s4.782-3.156 6.027-7.751a33 33 0 0 0-6.029-.55m6.485-1.396c.301-1.567.482-3.26.535-5.017H32.982c.053 1.757.234 3.449.535 5.017a35 35 0 0 1 6.481-.604c2.25 0 4.44.216 6.485.604m-1.547-20.926c1.22 1.534 2.229 3.626 2.941 6.113 1.478-.383 2.825-.875 3.999-1.464a15.75 15.75 0 0 0-6.94-4.649M22 40c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4 4-1.794 4-4m46 0c0 3.309-2.691 6-6 6a5.99 5.99 0 0 1-4.69-2.268c-1.459 6.776-6.802 12.119-13.577 13.579A5.99 5.99 0 0 1 46 62c0 3.309-2.691 6-6 6s-6-2.691-6-6c0-1.898.888-3.589 2.267-4.689-6.775-1.46-12.118-6.803-13.577-13.579A5.99 5.99 0 0 1 18 46c-3.309 0-6-2.691-6-6s2.691-6 6-6c1.898 0 3.589.888 4.69 2.268 1.459-6.776 6.802-12.119 13.577-13.579A5.99 5.99 0 0 1 34 18c0-3.309 2.691-6 6-6s6 2.691 6 6a5.99 5.99 0 0 1-2.267 4.689c6.775 1.46 12.118 6.803 13.577 13.579A5.99 5.99 0 0 1 62 34c3.309 0 6 2.691 6 6m-7.504 8.359a22.28 22.28 0 0 1-12.137 12.137c.088.489.141.99.141 1.504 0 .205-.016.406-.031.607a24.3 24.3 0 0 0 14.138-14.138c-.201.015-.402.031-.607.031a8.5 8.5 0 0 1-1.504-.141M31.641 60.496a22.28 22.28 0 0 1-12.137-12.137c-.489.088-.99.141-1.504.141-.205 0-.406-.016-.607-.031a24.3 24.3 0 0 0 14.138 14.138c-.015-.201-.031-.402-.031-.607 0-.514.053-1.015.141-1.504M19.504 31.641a22.28 22.28 0 0 1 12.137-12.137A8.5 8.5 0 0 1 31.5 18c0-.205.016-.406.031-.607a24.3 24.3 0 0 0-14.138 14.138c.201-.015.402-.031.607-.031.514 0 1.015.053 1.504.141M48.5 18c0-.205-.016-.406-.031-.607a24.3 24.3 0 0 1 14.138 14.138c-.201-.015-.402-.031-.607-.031-.514 0-1.015.053-1.504.141a22.28 22.28 0 0 0-12.137-12.137c.088-.489.141-.99.141-1.504"
      />
    </g>
  </svg>
)
export default SvgCloudWan
