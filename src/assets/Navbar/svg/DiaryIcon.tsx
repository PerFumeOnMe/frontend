import * as React from "react";
import type { SVGProps } from "react";
const SvgDiaryIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 20"
    height={24}
    {...props}
  >
    <path
      fill="currentColor"
      d="M4.072 0h9.467c.684 0 1.37.112 1.85.608.47.49.56 1.17.56 1.802v12.103c0 .557-.074 1.104-.359 1.548a1.7 1.7 0 0 1-.666.598v.93c0 .684-.111 1.37-.607 1.849-.49.474-1.169.562-1.802.562H1.59a1.54 1.54 0 0 1-1.538-1.538V3.864c-.003-.511-.006-1.15.133-1.73C.356 1.423.751.734 1.591.307 1.938.13 2.303.062 2.693.03 3.067 0 3.523 0 4.073 0M1.59 18.462h10.925c.561 0 .7-.099.733-.13.025-.024.137-.159.137-.742v-.667H3.129a1.54 1.54 0 0 0-1.539 1.539"
    />
  </svg>
);
export default SvgDiaryIcon;
