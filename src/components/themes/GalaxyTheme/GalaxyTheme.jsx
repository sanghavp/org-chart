import { useLayoutEffect } from "react";
// import type { HierarchyNode } from "d3";
import { galaxyTheme } from "../../../utils/node_theme.utils";
import "./GalaxyTheme.css";
import * as d3 from "d3";
import { useRef } from "react";
import { OrgChart } from "d3-org-chart";

export const GalaxyTheme = (props) => {
  const { data } = props;
  const d3Container = useRef(null);
  const chartRef = useRef(new OrgChart());

  // function addNode(node: any) {
  //   chartRef.current.addNode(node);
  // }

  // props.setClick(addNode);
  // We need to manipulate DOM
  useLayoutEffect(() => {
    if (data && d3Container.current) {
      chartRef.current
        .container(d3Container.current)
        .data(data)
        .nodeHeight(() => 170)
        .nodeWidth((d) => {
          if (d.depth == 0) return 500;
          return 330;
        })
        .childrenMargin(() => 90)
        .compactMarginBetween(() => 65)
        .compactMarginPair(() => 100)
        .neighbourMargin(() => 50)
        .siblingsMargin(() => 100)
        .buttonContent(({ node }) => {
          return `<div style="color:#2CAAE5;border-radius:5px;padding:3px;font-size:10px;margin:auto auto;background-color:#040910;border: 1px solid #2CAAE5"> <span style="font-size:9px">${
            node.children
              ? `<i class="fas fa-angle-up"></i>`
              : `<i class="fas fa-angle-down"></i>`
          }</span> ${node.data._directSubordinates}  </div>`;
        })
        .linkUpdate(function (d) {
          d3.select(this)
            .attr("stroke", (d) =>
              d.data._upToTheRootHighlighted ? "#14760D" : "#2CAAE5"
            )
            .attr("stroke-width", (d) =>
              d.data._upToTheRootHighlighted ? 15 : 1
            );

          if (d.data._upToTheRootHighlighted) {
            d3.select(this).raise();
          }
        })
        .nodeContent((d) => galaxyTheme(d))
        .render();
    }
  }, [chartRef, d3Container, data]);

  return (
    <div style={{ width: "100vw", height: "100%" }}>
      <div style={{ width: "100%", height: "100%" }} ref={d3Container} />
    </div>
  );
};
