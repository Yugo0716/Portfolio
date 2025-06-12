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
  label: string;
  font: object;
}

const nodesData: NodeType[] = [
  { id: 1, label: "ゲーム", description: "私の人生の大部分を占めています。これが無いと生きていけません。" },
  { id: 2, label: "研究", description: "HCI (Human-Computer Interaction) の分野で、ユーザ体験 (UX) の向上を目指して取り組んでいます。" },
  { id: 3, label: "音楽", description: "ゲームのBGMを昔からよく聞いていました。ボーカル曲もよく聞きます。" },
  { id: 4, label: "散歩/サイクリング", description: "暇なときにしばしば目的もなくぶらつくことが好きです。" },
  { id: 5, label: "ギター", description: "大学3年次にエレキギターを購入しました。" },
  { id: 6, label: "カラス", description: "大学の研究でカラスの専門家の方との共同研究をしています。" },
  { id: 7, label: "野球", description: "小学生の頃に始めました。" },
  { id: 8, label: "合気道", description: "アニメの影響で大学入学時に始めました。" },
  { id: 9, label: "アニメ", description: "アニメ" },
  { id: 10, label: "プログラミング", description: "プログラミング" },
  { id: 11, label: "VR/AR", description: "VR/AR" },
  { id: 12, label: "グループワーク", description: "グループワーク" },
  { id: 13, label: "小説", description: "つい最近になって読み始めたため、多く読めているわけではありませんが、魅力を感じます。" },
  { id: 14, label: "塾講師アルバイト", description: "グループワーク" },
];

const edgesData: EdgeType[] = [
  { from: 1, to: 2 , label:"よりよいUI/UX", font: {size: 0}},
  { from: 1, to: 3 , label:"BGM", font: {size: 0}},
  { from: 1, to: 4 , label:"新しいアイデアの着想", font: {size: 0}},
  { from: 1, to: 7 , label:"スポーツゲームの動機", font: {size: 0}},
  { from: 1, to: 9 , label:"ゲームを原作としたアニメ", font: {size: 0}},
  { from: 1, to: 10 , label:"プログラミングに興味を持つきっかけ", font: {size: 0}},
  { from: 1, to: 11 , label:"新しいゲーム体験", font: {size: 0}},
  { from: 1, to: 12 , label:"複数人プレイ", font: {size: 0}},
  { from: 2, to: 4 , label:"新しいアイデアの着想", font: {size: 0}},
  { from: 2, to: 6 , label:"カラスを対象とした研究", font: {size: 0}},
  { from: 2, to: 10 , label:"実験システムの実装", font: {size: 0}},
  { from: 2, to: 11 , label:"VR/ARに関する近年の動向の理解", font: {size: 0}},
  { from: 2, to: 12 , label:"外部企業との共同研究", font: {size: 0}},
  { from: 2, to: 14 , label:"人に論理的に説明する", font: {size: 0}},
  { from: 3, to: 5 , label:"音楽に対する新たな視点", font: {size: 0}},
  { from: 3, to: 13 , label:"小説を題材とした楽曲", font: {size: 0}},
  { from: 5, to: 8 , label:"脱力感", font: {size: 0}},
  { from: 5, to: 9 , label:"ギターに興味を持つきっかけ", font: {size: 0}},
  { from: 5, to: 12 , label:"バンド活動", font: {size: 0}},
  { from: 7, to: 8 , label:"半身の姿勢", font: {size: 0}},
  { from: 7, to: 12 , label:"チームスポーツ", font: {size: 0}},
  { from: 8, to: 9 , label:"合気道に興味を持つきっかけ", font: {size: 0}},
  { from: 8, to: 12 , label:"部活動運営", font: {size: 0}},
  { from: 10, to: 11 , label:"VR/ARコンテンツの実装", font: {size: 0}},
  { from: 12, to: 13 , label:"人との関わり方を考えるきっかけ", font: {size: 0}},
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
        color: {
          color: "#ccc",
          hover: "#fbb161",
          highlight: "#fbb161"
        },
        width: 2,
      },
      interaction: {
        hover: true,
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
        if(params.edges.length>0){
          network.unselectAll();
        }
        const nodeId = params.nodes[0];
        if (typeof nodeId === 'number' || typeof nodeId === 'string') {
          const node = nodes.get(nodeId);
          if (node) {
            setSelectedNode(node);
            setPopupPosition({ x: params.pointer.DOM.x, y: params.pointer.DOM.y });
          }
        } 
        else 
        {
          setSelectedNode(null);
          setPopupPosition(null);
        }
      });

    // ノードにホバーしたとき接続するエッジのラベルを表示
    network.on("hoverNode", (params) => {
      const connectedEdges = network.getConnectedEdges(params.node);
      connectedEdges.forEach((edgeId) => {
        edges.update({ id: edgeId, font: {size: 20} });
      });
    });

    network.on("hoverEdge", (params) => {
      edges.update({ id: params.edge, font: {size: 20} });
    });

    // ホバーが外れたら太さを元に戻す
    network.on("blurNode", (params) => {
      const connectedEdges = network.getConnectedEdges(params.node);
      connectedEdges.forEach((edgeId) => {
        edges.update({ id: edgeId, font: {size: 0} }); 
      });
    });

    network.on("blurEdge", (params) => {
      edges.update({ id: params.edge, font: {size: 0} });
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

        </div>
      )}
    </div>
  );
};

export default MyNetwork;