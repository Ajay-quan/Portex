import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function Button({ children, className = "", style, ...props }: ButtonProps) {
  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center rounded-[2px] bg-[#f8f8f8] px-6 py-3 font-body text-sm font-medium text-[#171717] transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black ${className}`}
      style={{ color: "#171717", ...style }}
      {...props}
    >
      {children}
    </a>
  );
}
