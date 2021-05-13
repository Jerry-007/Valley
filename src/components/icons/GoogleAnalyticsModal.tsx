import React from "react";

const GoogleAnalyticsModal: React.FC<{
  height?: string;
  width?: string;
  className?: string;
}> = ({ height, width, className }) => {
  return (
    <svg
      height={height}
      width={width}
      className={className}
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-256.3 274.4 294.7 49.5"
    >
      <path
        className="st0"
        style={{ fill: "#75787d" }}
        d="M-82.9 311c-.4.2-.9.5-1.3.7-1.3.6-2.6.7-3.8.7-1.3 0-3.2-.1-5.2-1.5-2.8-2-4-5.4-4-8.3 0-6.1 5-9.1 9-9.1 1.4 0 2.9.4 4.1 1.1 2 1.3 2.5 3 2.8 3.9l-9.3 3.7-3 .2c1 5 4.4 7.9 8.1 7.9 2 0 3.5-.7 4.8-1.4l-2.2 2.1zm-3.7-11.8c.7-.3 1.1-.5 1.1-1.1 0-1.6-1.8-3.4-3.9-3.4-1.6 0-4.5 1.2-4.5 5.5 0 .7.1 1.4.1 2.1l7.2-3.1zm-11.6 12.7l1.5-.9c-.7-.1-1.3-.1-2-.2-1.3-.1-1.6-.4-1.6-1.9v-9.1c0-5.6 0-10.4.4-13.4.2-1.4.6-1.6 1.8-2.3h-5.6l-3 1.4h3.1c0 1.8-.2 4.3-.2 6.3-.1 4.1-.2 8.5-.2 11.5v6.4c0 .8-.2.9-1.1 2.1h6.9v.1zm-12.9-16.5c.9.7 2.8 2.3 2.8 5.3 0 2.9-1.7 4.3-3.3 5.6-.5.5-1.1 1.1-1.1 1.9 0 .9.6 1.3 1 1.7l1.4 1.1c1.7 1.5 3.3 2.8 3.3 5.5 0 3.7-3.6 7.4-10.4 7.4-5.7 0-8.5-2.7-8.5-5.6 0-1.4.7-3.4 3-4.8 2.4-1.5 5.8-1.7 7.5-1.8-.6-.7-1.2-1.5-1.2-2.7 0-.7.2-1.1.4-1.5-.4 0-.9.1-1.3.1-4.2 0-6.5-3.1-6.5-6.2 0-1.8.8-3.8 2.5-5.3 2.2-1.9 4.9-2.2 7.1-2.2h8.1l-2.5 1.4h-2.3v.1zm-2.8 17.5h-.9c-.4 0-2.5.1-4.1.6-.9.3-3.4 1.3-3.4 4.1s2.7 4.8 6.9 4.8c3.8 0 5.8-1.8 5.8-4.3 0-2-1.3-3.1-4.3-5.2zm1.1-7.5c.9-.9 1-2.2 1-2.9 0-2.8-1.7-7.3-5-7.3-1 0-2.1.5-2.8 1.3s-.9 1.9-.9 2.9c0 2.6 1.5 7 4.9 7 1.1.1 2.2-.3 2.8-1zm-22.8 7c-6.3 0-9.6-4.9-9.6-9.3 0-5.2 4.2-9.6 10.2-9.6 5.8 0 9.4 4.5 9.4 9.3 0 4.6-3.5 9.6-10 9.6zm5-3.2c.9-1.3 1.2-2.8 1.2-4.4 0-3.5-1.7-10.1-6.5-10.1-1.3 0-2.6.5-3.5 1.3-1.5 1.4-1.8 3.1-1.8 4.8 0 3.9 1.9 10.3 6.7 10.3 1.4.1 3-.7 3.9-1.9zm-25.9 3.2c-6.3 0-9.6-4.9-9.6-9.3 0-5.2 4.2-9.6 10.2-9.6 5.8 0 9.4 4.5 9.4 9.3 0 4.6-3.6 9.6-10 9.6zm4.9-3.2c.9-1.3 1.2-2.8 1.2-4.4 0-3.5-1.7-10.1-6.5-10.1-1.3 0-2.6.5-3.5 1.3-1.5 1.4-1.8 3.1-1.8 4.8 0 3.9 1.9 10.3 6.7 10.3 1.4.1 3-.7 3.9-1.9zm-17.1 1.8v-4.5c0-.4 0-1.4.1-1.8.1-.3.1-.4.4-.6l1-.9h-7.8l-3 1.6 5.6-.3v5.9c-1.1.4-2.3.9-4.7.9-8.1 0-13.1-6.5-13.1-13.5 0-6.5 4.4-10.9 10.2-10.9 4.4 0 6.6 2.3 7.9 3.5l-.9 1.5 1.3-.3 3.1-2.9c-.8-.6-2.1-1.5-4.9-2.3-1.7-.5-3.7-.8-5.7-.8-9.4 0-14.9 6.6-14.9 13.8 0 5.9 3.9 13.4 14.1 13.4 2 0 4-.3 6.1-.6l5.2-1.2z"
      />
      <path
        className="st1"
        style={{ fill: "#f7991f" }}
        d="M-256.2 277.8v28.4l12.9-13.2 11.4 11.4 24.1-24.1v-2.2c0-2.1-1.7-3.7-3.7-3.7-9.1 0-32.5.1-41.3 0-1.9 0-3.4 1.5-3.4 3.4z"
      />
      <path
        className="st1"
        style={{ fill: "#f7991f" }}
        d="M-237.6 298.6l-5.8 5.9 5.8 5.9z"
      />
      <path
        className="st2"
        style={{ fill: "#f15823" }}
        d="M-256.3 317.3v2c0 1.9 1.6 3.5 3.5 3.5h41.6c1.9 0 3.4-1.5 3.4-3.4v-27.7l-24.1 24.1-11.4-11.4s-12.9 13-13 12.9z"
      />
      <g>
        <path
          className="st0"
          style={{ fill: "#75787d" }}
          d="M-58.5 303.9h-8.6l-3 7.5h-1.6l8.6-21.3h.9l8.4 21.3h-1.7l-3-7.5zm-8.1-1.3h7.6l-2.9-7.7c-.2-.6-.5-1.4-.9-2.5-.3.9-.5 1.8-.9 2.5l-2.9 7.7zM-40.2 311.4v-10.2c0-1.6-.3-2.7-1-3.5-.7-.8-1.7-1.1-3.1-1.1-1.9 0-3.3.5-4.2 1.4-.9 1-1.3 2.5-1.3 4.6v8.7h-1.4v-15.7h1.2l.3 2.2h.1c1-1.6 2.9-2.5 5.5-2.5 3.6 0 5.4 1.9 5.4 5.8v10.3h-1.5zM-25.3 311.4l-.4-2.5h-.1c-.8 1-1.6 1.7-2.5 2.2-.8.4-1.8.6-3 .6-1.6 0-2.8-.4-3.6-1.2-.9-.8-1.3-1.9-1.3-3.3 0-1.5.6-2.7 1.9-3.6 1.3-.9 3.1-1.3 5.6-1.4l3-.1v-1c0-1.5-.3-2.6-.9-3.4-.6-.8-1.6-1.1-3-1.1-1.5 0-3 .4-4.6 1.2l-.5-1.3c1.7-.8 3.5-1.2 5.1-1.2 1.7 0 3 .5 3.9 1.4.9.9 1.3 2.3 1.3 4.2v10.5h-.9zm-5.8-1c1.7 0 3-.5 4-1.4s1.5-2.3 1.5-4v-1.6l-2.8.1c-2.2.1-3.8.5-4.7 1-.9.6-1.4 1.5-1.4 2.7 0 1 .3 1.8.9 2.3.6.6 1.4.9 2.5.9zM-18.2 311.4h-1.4v-22.6h1.4v22.6zM-16.2 295.6h1.5l3.3 8.9c1 2.7 1.7 4.6 1.9 5.5h.1c.4-1.2 1.1-3.1 2-5.6l3.3-8.8h1.5L-9.7 314c-.6 1.5-1.1 2.5-1.4 3s-.8.9-1.4 1.2c-.5.3-1.1.4-1.9.4-.6 0-1.2-.1-1.8-.3V317c.6.2 1.2.2 1.8.2.5 0 .9-.1 1.3-.3.4-.2.7-.6 1-1.1s.7-1.3 1.1-2.3.7-1.8.8-2.1l-6-15.8zM5.5 310.4c.9 0 1.7-.1 2.4-.2v1.2c-.7.2-1.5.3-2.4.3-1.4 0-2.4-.4-3.1-1.1-.7-.7-1-1.9-1-3.5v-10.2H-1v-.8l2.3-.7.7-3.6h.7v3.8h4.6v1.3H2.7v10c0 1.2.2 2.1.6 2.7.6.5 1.3.8 2.2.8zM9.9 291.2c0-.9.3-1.4.9-1.4.3 0 .5.1.7.4.2.2.3.6.3 1s-.1.8-.3 1c-.2.3-.4.4-.7.4-.6 0-.9-.4-.9-1.4zm1.7 20.2h-1.4v-15.8h1.4v15.8zM21.4 311.7c-2.3 0-4-.7-5.3-2.1s-1.9-3.4-1.9-6 .7-4.7 2-6.1 3.1-2.2 5.5-2.2c1.4 0 2.7.2 3.9.7l-.4 1.3c-1.4-.5-2.6-.7-3.6-.7-1.9 0-3.4.6-4.4 1.8-1 1.2-1.5 2.9-1.5 5.2 0 2.1.5 3.8 1.5 5 1 1.2 2.4 1.8 4.2 1.8 1.4 0 2.8-.3 4-.8v1.3c-1.1.6-2.4.8-4 .8zM38.4 307.3c0 1.4-.5 2.5-1.6 3.3-1.1.8-2.6 1.1-4.6 1.1-2.1 0-3.8-.3-5-1v-1.6c1.6.8 3.3 1.2 5 1.2 1.6 0 2.7-.3 3.6-.8s1.2-1.2 1.2-2.1c0-.8-.3-1.5-1-2-.6-.5-1.7-1.1-3.2-1.6-1.6-.6-2.7-1.1-3.3-1.5-.6-.4-1.1-.9-1.4-1.4s-.5-1.2-.5-1.9c0-1.2.5-2.1 1.5-2.8 1-.7 2.4-1 4.2-1 1.7 0 3.3.3 4.9 1l-.5 1.3c-1.6-.6-3-1-4.3-1s-2.3.2-3.1.6c-.8.4-1.1 1-1.1 1.8s.3 1.5.9 2 1.7 1 3.4 1.7c1.4.5 2.5 1 3.1 1.4s1.1.9 1.5 1.4c.2.6.3 1.2.3 1.9z"
        />
      </g>
    </svg>
  );
};

export default GoogleAnalyticsModal;
