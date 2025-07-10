import { useLayoutEffect, useRef } from "react";
import { OrgChart } from "d3-org-chart";
import type { HierarchyNode } from "d3";

export const OrgChartComponent = (props: any) => {
  const d3Container = useRef(null);
  const chartRef = useRef(new OrgChart());

  function addNode(node: any) {
    chartRef.current.addNode(node);
  }

  props.setClick(addNode);

  // We need to manipulate DOM
  useLayoutEffect(() => {
    if (props.data && d3Container.current) {
      chartRef.current
        .container(d3Container.current)
        .data(props.data)
        .nodeHeight((node: HierarchyNode<any>) => {
          console.log("nodeWidth: ", node);
          return 70;
        })
        .nodeWidth((d: HierarchyNode<any>) => {
          if (d.depth == 0) return 250;
          if (d.depth == 1) return 220;
          return 140;
        })
        .childrenMargin((d) => 50)
        .compactMarginBetween((d) => 35)
        .compactMarginPair((d) => 30)
        // .buttonContent((btn: any) => {
        //   return `<div style="border-radius:3px;padding:3px;font-size:10px;margin:auto auto;background-color:lightgray"> <span style="font-size:9px">${
        //     btn.node.children
        //       ? `<i class="fas fa-chevron-up"></i>`
        //       : `<i class="fas fa-chevron-down"></i>`
        //   }</span> ${btn.node.data?._directSubordinates}  </div>`;
        // })
        .nodeContent(function (d: any) {
          const colors = ["#278B8D", "#404040", "#0C5C73", "#33C6CB"];
          const color = colors[d.depth % colors.length];
          return `
            <div style="background-color:${color}; position:relative;margin-top:-1px; margin-left:-1px;width:${d.width}px;height:${d.height}px;border-radius:50px">
               <img src=" ${
                 d.data.imageUrl
               }" style="position:absolute;left: 0;margin-top:5px;margin-left:${5}px;border-radius:100px;width:60px;height:60px;" />
               <div style="position:absolute;top:-15px;width:${
                 d.width
               }px;text-align:center;color:#fafafa;">
                     <div style="margin:0 auto;background-color:${color};display:inline-block;padding:8px;padding-bottom:0px;border-radius:5px"> ${d.data.id}</div>
              </div>

              <div style="color:#fafafa;font-size:${
                d.depth < 2 ? 16 : 12
              }px;font-weight:bold;margin-left:70px;margin-top:15px"> ${d.depth < 2 ? d.data.name : (d.data.name || "").trim().split(/\s+/g)[0]} </div>
              <div style="color:#fafafa;margin-left:70px;margin-top:5px"> ${
                d.depth < 2 ? d.data.positionName : d.data.area
              } </div>
              
               <!--
               <div style="padding:20px; padding-top:35px;text-align:center">
                  
                   
               </div> 
              
               <div style="display:flex;justify-content:space-between;padding-left:15px;padding-right:15px;">
                 <div > Manages:  ${d.data._directSubordinates} 👤</div>  
                 <div > Oversees: ${d.data._totalSubordinates} 👤</div>    
               </div>
               -->
           </div>
  `;
        })
        .render();
    }
  }, [props.data, d3Container.current]);

  return (
    <div style={{width: '100vw', height: '100%'}}>
      <div style={{width: '100%', height: '100%'}} ref={d3Container} />
    </div>
  );
};
