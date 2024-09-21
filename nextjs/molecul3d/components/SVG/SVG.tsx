import parse from "html-react-parser";
import React, { useEffect } from "react";

export function SVG({ svg }: { svg: string }) {
  const [width, setWidth] = React.useState(100);
  const [height, setHeight] = React.useState(100);
  const [viewBox, setViewBox] = React.useState([0, 0, 1000, 1000] as [number, number, number, number]);
  /*const [meetOrSlice, setMeetOrSlice] = React.useState(
    "meet" as "meet" | "slice",
  );
  // xMin/Mid/Max YMin/Mid/Max
  const [align, setAlign] = React.useState(
    "xMidYMid" as "xMinYMin" | "xMidYMid" | "xMaxYMax",
  );*/

  const createSafeSVG = (svg: string) => {
    // use the passed in width and height, scale the svg to fit the parent element
    //preserveAspectRatio='${meetOrSlice} ${align}'
    //<g transform='scale(${width / 1000} ${height / 1000})'
    const scale = Math.min(width / 1000, height / 1000);
    const header = `<svg 
		xmlns='http://www.w3.org/2000/svg' 
		xmlns:xlink='http://www.w3.org/1999/xlink' 
		viewBox='${viewBox.join(" ")}' 
		width=1000
		height=1000
		style='width: 100%; height: 100%; border: 2px solid gray; border-radius: 10px;'
		preserveAspectRatio='xMidYMid meet'
		>
		<g transform='scale(${scale})' >`;
    const footer = "</g></svg>";

    return parse(header + svg + footer);
  };

  // get the parent element size that the svg will be rendered in (molecule_svg div)
  useEffect(() => {
    const parent = document.getElementById("molecule_svg");
    if (parent) {
      // find the scale (viewbox will be 1000x1000, so scale is 1000/parent size)
      setWidth(parent.clientWidth * 0.9);
      setHeight(parent.clientHeight * 0.9);
      console.log(parent.clientWidth);
      console.log(parent.clientHeight);

      setViewBox([0, 0, width, height]);
    }
  }, [width, height]);

  // if window is resized, update the width and height
  useEffect(() => {
    const handleResize = () => {
      const parent = document.getElementById("molecule_svg");
      if (parent) {
        setWidth(parent.clientWidth * 0.9);
        setHeight(parent.clientHeight * 0.9);
        setViewBox([0, 0, width, height]);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width, height]);

  return <>{createSafeSVG(svg)}</>;
}
