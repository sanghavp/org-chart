import { useLayoutEffect } from "react";
// import type { HierarchyNode } from "d3";
import { ovalTheme } from "../../../utils/node_theme.utils";
import { useRef } from "react";
import { OrgChart } from "d3-org-chart";

export const OvalTheme = (props) => {
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
        .nodeHeight(() => 70)
        .nodeWidth((d) => {
          if (d.depth == 0) return 250;
          if (d.depth == 1) return 220;
          return 140;
        })
        .childrenMargin(() => 50)
        .compactMarginBetween(() => 35)
        .compactMarginPair(() => 30)
        .neighbourMargin(() => 20)
        .buttonContent(({ node }) => {
          return `<div style="border-radius:3px;padding:3px;font-size:10px;margin:auto auto;background-color:lightgray"> <span style="font-size:9px">${
            node.children
              ? `<i class="fas fa-chevron-up"></i>`
              : `<i class="fas fa-chevron-down"></i>`
          }</span> ${node.data._directSubordinates}  </div>`;
        })
        .nodeContent((d) => ovalTheme(d))
        .render();
    }
  }, [chartRef, d3Container, data]);

  return (
    <div style={{ width: "100vw", height: "100%" }}>
      <div style={{ width: "100%", height: "100%" }} ref={d3Container} />
    </div>
  );
};
