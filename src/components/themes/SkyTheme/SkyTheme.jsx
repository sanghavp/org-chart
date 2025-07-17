import { useLayoutEffect } from "react";
// import type { HierarchyNode } from "d3";
import { skyTheme } from "../../../utils/node_theme.utils";
import { useRef } from "react";
import { OrgChart } from "d3-org-chart";

export const SkyTheme = (props) => {
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
        .nodeWidth(() => 250)
        .initialZoom(0.7)
        .nodeHeight(() => 175)
        .childrenMargin(() => 40)
        .compactMarginBetween(() => 15)
        .compactMarginPair(() => 80)
        .nodeContent((d) => skyTheme(d))
        .render();
    }
  }, [chartRef, d3Container, data]);

  return (
    <div style={{ width: "100vw", height: "100%" }}>
      <div style={{ width: "100%", height: "100%" }} ref={d3Container} />
    </div>
  );
};
