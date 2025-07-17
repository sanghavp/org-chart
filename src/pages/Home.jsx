
import { OvalTheme } from "../components/themes/OvalTheme/OvalTheme";
import { useEffect, useState } from "react";
import * as d3 from "d3";
import { GalaxyTheme } from "../components/themes/GalaxyTheme/GalaxyTheme";
import { SkyTheme } from "../components/themes/SkyTheme/SkyTheme";
// import { basicTheme } from '../utils/node_theme.utils';
export default function Home() {
  const [data, setData] = useState();
  // let addNodeChildFunc = null;
  
  const [chartTheme, setChartTheme] = useState("Oval");

  // function addNode() {
  //   const node = {
  //     nodeId: "new Node",
  //     parentNodeId: "O-6066",
  //   };

  //   addNodeChildFunc(node);
  // }

  function onNodeClick(nodeId) {
    // console.log('d3', d3.event);
    alert("clicked " + nodeId);
  }

  useEffect(() => {
    d3.csv(
      "https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv"
    ).then((data) => {
      setData(data);
    });
  }, []);
  const renderPage = () => {
    switch (chartTheme) {
      case "Oval":
        return (
          <OvalTheme
            // orgChart={OrgChart}
            onNodeClick={onNodeClick}
            data={data}
          />
        );
      case "Galaxy":
        return (
          <GalaxyTheme
            // setClick={(click) => (addNodeChildFunc = click)}
            // orgChart={OrgChart}
            onNodeClick={onNodeClick}
            data={data}
          />
        );
      case "Sky":
        return (
          <SkyTheme
            // setClick={(click) => (addNodeChildFunc = click)}
            // orgChart={OrgChart}
            onNodeClick={onNodeClick}
            data={data}
          />
        );
      default:
        return <h1>Không tìm thấy trang</h1>;
    }
  };
  return (
    <div>
      Click node to trigger action in parent or &nbsp;
      {/* <button onClick={() => addNode()}>add node as root's child</button> */}
      <button onClick={() => setChartTheme("Oval")}>chọn oval</button>
      <button onClick={() => setChartTheme("Galaxy")}>chọn galaxy</button>
      <button onClick={() => setChartTheme("Sky")}>chọn sky</button>
      {renderPage()}
    </div>
  );
}
