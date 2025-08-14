import type { SignupTitleProps   } from "../../types/Login/signupTypes";

export default function SignupTitle({ title, subtitle }: SignupTitleProps) {
  return (
    <div className="w-full px-4 mx-auto flex flex-col gap-[6px] mt-[21px]">
      <h1 className="text-title2 whitespace-pre-line">{title}</h1>
      {subtitle && <p className="text-body3 text-grayscale-600 mt-[6px] mb-12">{subtitle}</p>}
    </div>
  );
}