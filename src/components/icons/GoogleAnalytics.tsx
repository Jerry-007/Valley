import React from "react";

const GoogleAnalytics: React.FC<{
  height?: string;
  width?: string;
  className?: string;
}> = ({ height, width, className }) => {
  return (
    <svg
      height={height}
      width={width}
      className={className}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 2195.9 2430.9"
    >
      <g>
        <path
          className="st0"
          style={{ fill: "#F9AB00" }}
          d="M2195.9,2126.7c0.9,166.9-133.7,302.8-300.5,303.7c-12.4,0.1-24.9-0.6-37.2-2.1
		        c-154.8-22.9-268.2-157.6-264.4-314V316.1c-3.7-156.6,110-291.3,264.9-314c165.7-19.4,315.8,99.2,335.2,264.9
		        c1.4,12.2,2.1,24.4,2,36.7L2195.9,2126.7z"
        />
        <path
          className="st1"
          style={{ fill: "#E37400" }}
          d="M301.1,1828.7c166.3,0,301.1,134.8,301.1,301.1c0,166.3-134.8,301.1-301.1,301.1
		        C134.8,2430.9,0,2296.1,0,2129.8C0,1963.5,134.8,1828.7,301.1,1828.7z M1093.3,916.2c-167.1,9.2-296.7,149.3-292.8,316.6v808.7
		        c0,219.5,96.6,352.7,238.1,381.1c163.3,33.1,322.4-72.4,355.5-235.7c4.1-20,6.1-40.3,6-60.7v-907.4
		        c0.3-166.9-134.7-302.4-301.6-302.7C1096.8,916.1,1095,916.1,1093.3,916.2z"
        />
      </g>
    </svg>
  );
};

export default GoogleAnalytics;
