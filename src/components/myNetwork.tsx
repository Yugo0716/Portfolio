'use client';
import { useEffect, useRef, useState } from "react";
import { Network } from "vis-network";
import { DataSet } from "vis-data";

interface NodeType {
  id: string | number;
  label: string;
  description?: string;
}

interface EdgeType {
  from: string | number;
  to: string | number;
}

const nodesData: NodeType[] = [
  { id: 1, label: "ゲーム", description: "私の人生の大部分を占めている。これが無いと生きていけません。" },
  { id: 2, label: "研究", description: "HCI (Human-Computer Interaction) 分野で、ユーザ体験 (UX) の向上を目指して取り組んでいます。" },
  { id: 3, label: "音楽", description: "ゲームのBGMからJ-Popまで。" },
  { id: 4, label: "BGM", description: "BGM" },
  { id: 5, label: "ギター", description: "ギター" },
  { id: 6, label: "カラス", description: "カラス" },
  { id: 7, label: "野球", description: "野球" },
  { id: 8, label: "合気道", description: "合気道" },
  { id: 9, label: "作曲", description: "作曲" },
  { id: 10, label: "アニメ", description: "アニメ" },
  { id: 11, label: "プログラミング", description: "プログラミング" },
];

const edgesData: EdgeType[] = [
  { from: 1, to: 2 },
  { from: 2, to: 4 },
  { from: 4, to: 5 },
  { from: 3, to: 1 }
];

const MyNetwork = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [selectedNode, setSelectedNode] = useState<NodeType | null>(null);
  const [popupPosition, setPopupPosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const nodes = new DataSet<NodeType>(nodesData);
    const edges = new DataSet<any>(edgesData);

    const options = {
      nodes: {
        shape: "box",
        color: {
          background: "#d9f99d",
          border: "#65a30d",
          highlight: {
            background: "#84cc16",
            border: "#365314"
          },
          hover: {
            background: "#bef264",
            border: "#65a30d"
          }
        },
        font: {
          size: 16,
          color: "#111827"
        },
        margin: { top: 10, bottom: 10, left: 10, right: 10 }
      },
      edges: {
        color: "#ccc",
        width: 2
      },
      interaction: {
        hover: true
      },
      physics: {
        solver: "forceAtlas2Based",
        forceAtlas2Based: {
          gravitationalConstant: -120,
          springLength: 200
        },
        stabilization: true
      }
    };

    const network = new Network(ref.current, { nodes, edges }, options);

    network.on("click", (params: any) => {
        const nodeId = params.nodes[0];
        if (typeof nodeId === 'number' || typeof nodeId === 'string') {
          const node = nodes.get(nodeId);
          if (node) {
            setSelectedNode(node);
            setPopupPosition({ x: params.pointer.DOM.x, y: params.pointer.DOM.y });
          }
        } else {
          setSelectedNode(null);
          setPopupPosition(null);
        }
      });

  }, []);

  return (
    <div className="relative">
      <div ref={ref} style={{ height: 600, width: "100%" }} />
      {selectedNode && popupPosition && (
        <div
          className="absolute z-50 bg-white border border-lime-300 rounded shadow-lg p-4 text-sm"
          style={{ top: popupPosition.y, left: popupPosition.x }}
        >
          <h2 className="font-bold mb-2">{selectedNode.label}</h2>
          <p>{selectedNode.description}</p>
          <button
            className="text-lime-600 underline mt-2"
            onClick={() => {
              setSelectedNode(null);
              setPopupPosition(null);
            }}
          >
            閉じる
          </button>
        </div>
      )}
    </div>
  );
};

export default MyNetwork;