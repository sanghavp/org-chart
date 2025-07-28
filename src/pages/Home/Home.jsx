import { OvalTheme } from "../../components/themes/OvalTheme/OvalTheme";
import { useEffect, useState } from "react";
import * as d3 from "d3";
import { GalaxyTheme } from "../../components/themes/GalaxyTheme/GalaxyTheme";
import { SkyTheme } from "../../components/themes/SkyTheme/SkyTheme";
import { Modal } from "antd";

// import { basicTheme } from '../utils/node_theme.utils';
export default function Home() {
  const [data, setData] = useState();
  // let addNodeChildFunc = null;

  const [chartTheme, setChartTheme] = useState("Oval");
  const [modalState, setModalState] = useState({});
  const [currentNode, setCurrentNode] = useState(null);

  // function addNode() {
  //   const node = {
  //     nodeId: "new Node",
  //     parentNodeId: "O-6066",
  //   };

  //   addNodeChildFunc(node);
  // }

  const handleModalStateChange = (name, state) => {
    setModalState((prev) => ({
      ...prev,
      [name]: state,
    }));
  };

  function onNodeClick(node) {
    // console.log('d3', d3.event);
    handleModalStateChange("showDetailModal", true);
    setCurrentNode(node);
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
      <Modal
        open={modalState.showDetailModal}
        onCancel={() => handleModalStateChange("showDetailModal", false)}
        onOk={() => handleModalStateChange("showDetailModal", false)}
        title="Thông tin chi tiết"
      >
        <div>
          <h3>Node ID: {currentNode?.id}</h3>
          <p>Họ và tên: {currentNode?.data?.name}</p>
          <p>Chức vụ: {currentNode?.data?.positionName}</p>
          <p>Parent Node ID: {currentNode?.data?.parentId}</p>
          <p>Số người con: {currentNode?.data?._directSubordinates}</p>
          <p>Tổng các con cháu: {currentNode?.data?._totalSubordinates}</p>
        </div>
      </Modal>
    </div>
  );
}
