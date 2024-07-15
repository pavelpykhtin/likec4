import type { SVGProps } from 'react'
const SvgLicenseManager = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" {...props}>
    <defs>
      <linearGradient id="a" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#B0084D" />
        <stop offset="100%" stopColor="#FF4F8B" />
      </linearGradient>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path fill="url(#a)" d="M0 0h80v80H0z" />
      <path
        fill="#FFF"
        d="M39.976 39.673a5.41 5.41 0 0 1 5.403 5.403 5.41 5.41 0 0 1-5.403 5.403 5.41 5.41 0 0 1-5.403-5.403 5.41 5.41 0 0 1 5.403-5.403m0 12.806c4.082 0 7.403-3.321 7.403-7.403s-3.321-7.403-7.403-7.403-7.403 3.321-7.403 7.403 3.321 7.403 7.403 7.403m-1.622-4.866-1.829-1.83 1.414-1.414 1.122 1.122 2.952-2.951 1.414 1.414-3.659 3.659a1 1 0 0 1-1.414 0M26 32h28v-2H26zm0-3h28v-2H26zm0-3h28v-2H26zm0-7h11v-2H26zm3.949 26.101c0-.737.523-1.376 1.244-1.52a1 1 0 0 0 .768-.714 8.3 8.3 0 0 1 .787-1.896 1 1 0 0 0-.015-1.019 1.5 1.5 0 0 1-.234-.802c0-.855.696-1.551 1.55-1.551q.423 0 .802.234c.313.19.703.196 1.02.015a8.2 8.2 0 0 1 1.896-.786 1 1 0 0 0 .714-.768A1.55 1.55 0 0 1 40 35.048c.737 0 1.375.524 1.52 1.246a1 1 0 0 0 .714.768 8.3 8.3 0 0 1 1.896.786c.316.181.706.175 1.02-.015q.38-.233.802-.234c.854 0 1.549.696 1.549 1.551q0 .42-.233.802a1 1 0 0 0-.016 1.019c.337.589.602 1.227.787 1.896a1 1 0 0 0 .769.714 1.55 1.55 0 0 1 1.244 1.52c0 .736-.523 1.375-1.244 1.519a1 1 0 0 0-.769.714 8.2 8.2 0 0 1-.787 1.896c-.181.318-.174.708.016 1.02.155.252.233.522.233.801 0 .855-.695 1.551-1.549 1.551a1.5 1.5 0 0 1-.802-.233 1 1 0 0 0-1.02-.016 8.3 8.3 0 0 1-1.896.786 1 1 0 0 0-.714.768A1.55 1.55 0 0 1 40 55.152a1.55 1.55 0 0 1-1.519-1.245 1 1 0 0 0-.714-.768 8.2 8.2 0 0 1-1.896-.786 1 1 0 0 0-1.02.016 1.5 1.5 0 0 1-.802.233c-.854 0-1.55-.696-1.55-1.551 0-.279.079-.549.234-.801.19-.312.197-.702.015-1.02a8.3 8.3 0 0 1-.787-1.896 1 1 0 0 0-.768-.714 1.55 1.55 0 0 1-1.244-1.519m4.1 9.501c.448 0 .891-.088 1.308-.256q.649.325 1.341.557A3.56 3.56 0 0 0 40 57.152a3.56 3.56 0 0 0 3.303-2.249q.692-.232 1.341-.557c.417.168.86.256 1.308.256a3.554 3.554 0 0 0 3.549-3.551c0-.446-.087-.889-.255-1.307q.324-.647.557-1.341a3.56 3.56 0 0 0 2.249-3.302 3.56 3.56 0 0 0-2.249-3.303q-.234-.694-.557-1.341c.168-.418.255-.861.255-1.307a3.554 3.554 0 0 0-3.549-3.551c-.447 0-.891.088-1.308.256q-.649-.325-1.341-.557A3.56 3.56 0 0 0 40 33.048a3.56 3.56 0 0 0-3.302 2.25q-.692.232-1.341.557a3.5 3.5 0 0 0-1.308-.256 3.555 3.555 0 0 0-3.55 3.551c0 .446.088.889.256 1.307q-.324.647-.557 1.341a3.56 3.56 0 0 0-2.249 3.303 3.56 3.56 0 0 0 2.249 3.302q.233.694.557 1.341a3.5 3.5 0 0 0-.256 1.307 3.555 3.555 0 0 0 3.55 3.551M44 56h2v10a1 1 0 0 1-1.625.78L40 63.28l-4.375 3.5A.999.999 0 0 1 34 66V56h2v7.919l3.375-2.7a1 1 0 0 1 1.25 0l3.375 2.7zm8-39.586L55.586 20H52zm6.707 3.879-7-7A1 1 0 0 0 51 13H22a1 1 0 0 0-1 1v46a1 1 0 0 0 1 1h10v-2h-9V15h27v6a1 1 0 0 0 1 1h6v37h-9v2h10a1 1 0 0 0 1-1V21a1 1 0 0 0-.293-.707"
      />
    </g>
  </svg>
)
export default SvgLicenseManager
