// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Navbar3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 844 810"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#76wB7I8UCsa)"}>
        <ellipse
          cx={"422"}
          cy={"405"}
          rx={"422"}
          ry={"405"}
          fill={"currentColor"}
        ></ellipse>
      </g>

      <defs>
        <filter
          id={"76wB7I8UCsa"}
          x={"0"}
          y={"0"}
          width={"885"}
          height={"851"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feMorphology
            radius={"51"}
            in={"SourceAlpha"}
            result={"effect1_innerShadow_7_8"}
          ></feMorphology>

          <feOffset dx={"41"} dy={"41"}></feOffset>

          <feGaussianBlur stdDeviation={"52.5"}></feGaussianBlur>

          <feComposite
            in2={"hardAlpha"}
            operator={"arithmetic"}
            k2={"-1"}
            k3={"1"}
          ></feComposite>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}
          ></feColorMatrix>

          <feBlend in2={"shape"} result={"effect1_innerShadow_7_8"}></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Navbar3Icon;
/* prettier-ignore-end */
