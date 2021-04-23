import * as React from "react";
const SubtractIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.73047 13C10.3203 13 13.2305 10.0898 13.2305 6.5C13.2305 2.91016 10.3203 0 6.73047 0C3.14062 0 0.230469 2.91016 0.230469 6.5C0.230469 10.0898 3.14062 13 6.73047 13ZM6.73047 9.75C8.52539 9.75 9.98047 8.29492 9.98047 6.5C9.98047 4.70508 8.52539 3.25 6.73047 3.25C4.93555 3.25 3.48047 4.70508 3.48047 6.5C3.48047 8.29492 4.93555 9.75 6.73047 9.75Z"
        fill="white"
      />
    </svg>
  );
};

export default SubtractIcon;
