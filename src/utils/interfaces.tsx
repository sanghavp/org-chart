import type { OrgChart } from "d3-org-chart";

export interface propsInterface {
  data: d3.DSVRowArray<string> | undefined;
  onNodeClick?: (node: number) => void;
  d3Container: React.RefObject<null>;
  chartRef: React.RefObject<OrgChart<unknown>>;
}