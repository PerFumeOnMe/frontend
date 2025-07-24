import * as React from "react";
import type { SVGProps } from "react";
const SvgMyPageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10 10q-2.062 0-3.531-1.469T5 5t1.469-3.531Q7.938-.001 10 0t3.531 1.469Q15.001 2.937 15 5t-1.469 3.531Q12.063 10.001 10 10M0 17.5v-1q0-1.063.548-1.953A3.66 3.66 0 0 1 2 13.188a18.5 18.5 0 0 1 3.938-1.452 17.26 17.26 0 0 1 8.125 0q2 .486 3.937 1.453a3.65 3.65 0 0 1 1.454 1.36Q20 15.439 20 16.5v1a2.4 2.4 0 0 1-.734 1.766q-.734.735-1.766.734h-15a2.4 2.4 0 0 1-1.765-.734A2.41 2.41 0 0 1 0 17.5"
    />
  </svg>
);
export default SvgMyPageIcon;
