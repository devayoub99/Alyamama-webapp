interface IconProps {
  fill?: string;
  className?: string;
}

const LockIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const RightQuoteIcon = ({ fill, className }: IconProps) => {
  return (
    <svg
      width="60"
      height="60"
      className={className || ""}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M51 33.75C51 39.9656 45.9656 45 39.75 45H39C37.3406 45 36 43.6594 36 42C36 40.3406 37.3406 39 39 39H39.75C42.6469 39 45 36.6469 45 33.75V33H39C35.6906 33 33 30.3094 33 27V21C33 17.6906 35.6906 15 39 15H45C48.3094 15 51 17.6906 51 21V33.75ZM27 33.75C27 39.9656 21.9656 45 15.75 45H15C13.3406 45 12 43.6594 12 42C12 40.3406 13.3406 39 15 39H15.75C18.6469 39 21 36.6469 21 33.75V33H15C11.6906 33 9 30.3094 9 27V21C9 17.6906 11.6906 15 15 15H21C24.3094 15 27 17.6906 27 21V33.75Z"
        fill={fill || "black"}
      />
    </svg>
  );
};

const LeftQuoteIcon = ({ fill, className }: IconProps) => {
  console.log("className", className);
  return (
    <svg
      width="60"
      className={className || ""}
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 26.25C9 20.0344 14.0344 15 20.25 15L21 15C22.6594 15 24 16.3406 24 18C24 19.6594 22.6594 21 21 21L20.25 21C17.3531 21 15 23.3531 15 26.25L15 27L21 27C24.3094 27 27 29.6906 27 33L27 39C27 42.3094 24.3094 45 21 45L15 45C11.6906 45 9 42.3094 9 39L9 26.25ZM33 26.25C33 20.0344 38.0344 15 44.25 15L45 15C46.6594 15 48 16.3406 48 18C48 19.6594 46.6594 21 45 21L44.25 21C41.3531 21 39 23.3531 39 26.25L39 27L45 27C48.3094 27 51 29.6906 51 33L51 39C51 42.3094 48.3094 45 45 45L39 45C35.6906 45 33 42.3094 33 39L33 26.25Z"
        fill={fill || "black"}
      />
    </svg>
  );
};

export { LockIcon, RightQuoteIcon, LeftQuoteIcon };
