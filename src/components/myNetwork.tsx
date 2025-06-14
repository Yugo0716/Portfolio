'use client';
import { useEffect, useRef, useState } from "react";
import { Network } from "vis-network";
import { DataSet } from "vis-data";

interface NodeType {
  id: string | number;
  label: string;
  description?: string;
  group: string;
}

interface EdgeType {
  from: string | number;
  to: string | number;
  label: string;
  font: object;
}

const nodesData: NodeType[] = [
  { id: 1, label: "ゲーム", description: "私の人生におけるハブです。これが無いと今の私はいません。", group: "desc" },
  { id: 2, label: "研究", description: "HCI (Human-Computer Interaction) の分野で、ユーザ体験 (UX) の向上を目指して取り組んでいます。" , group: "desc"},
  { id: 3, label: "音楽", description: "ゲームのBGMを昔からよく聞いていました。ボーカル曲もよく聞きます。" , group: "desc"},
  { id: 4, label: "散歩/サイクリング", description: "暇なときにしばしば目的もなくぶらつくことが好きです。散歩中に見つけた身近な事柄からアイデアを思いつくこともあります。" , group: "desc"},
  { id: 5, label: "ギター", description: "大学3年次にエレキギターを購入しました。自らの手で、一般的に広く受け入れられている音楽を奏でられているところが魅力的です。" , group: "desc"},
  { id: 6, label: "カラス", description: "大学の研究でカラスの専門家の方との共同研究をしています。それまで、毎日のように見ているのにも関わらず、注目したことは無かったカラスの生態について少し分かるようになり、興味を持つようになりました。当たり前のように身近に存在しているものに注目することは難しいですが、新しいコンテンツを作るうえで重要だと思います。" , group: "desc"},
  { id: 7, label: "野球", description: "小学生～高校生まで軟式野球に取り組んでおりました。野球の経験はただ運動をした以上に私の人との関わり方の姿勢の形成において重要なものであったと感じています。野球を始めるまでの私は内向的な性格でゲームばかりしていました。ですがチームのメンバーは社交的な人が多く、おかげで人と関わることの楽しさに気づきました。今の私もどちらかというと内向的に近い性格ではありますが、より人と関わりたい、人を笑わせたいと思えるようになりました。" , group: "desc"},
  { id: 8, label: "合気道", description: "大学入学時に始めました。相手の力を受け流すという考え方やその動きに魅了されました。諸事情で2年で辞めてしまいましたが、初めて武道に関わったこともあり有意義な経験でした。" , group: "desc"},
  { id: 9, label: "アニメ" , group: "nonDesc"},
  { id: 10, label: "プログラミング", description: "私は、プログラミングを「自分の思い描いたことを実現できるツール」と考えています。" , group: "desc"},
  { id: 11, label: "VR/AR", description: "私自身はあまり経験はありませんが、現在VRを用いた新しい体験を制作中です。また、将来的に広く普及され、新しいゲーム体験の土台となり得ると考えているため注目しています。" , group: "desc"},
  { id: 12, label: "人との関わり合い", group: "nonDesc" },
  { id: 13, label: "小説", description: "つい最近になって読み始めたため、多く読めているわけではありませんが、アニメ・ゲームと比べて、穏やかに進行していく場面を頭の中で想像しながら読み進めていくことに魅力を感じます。" , group: "desc"},
  { id: 14, label: "塾講師アルバイト", description:"小学生～高校生を相手に個別指導塾で働いておりました。一度学習したことを分かりやすくアウトプットすることは難しいです。その経験を積むことができました。また、私は比較的純粋な（悪く言えば子どもっぽい）性格であると思っているのですが、そのこともあってか生徒の視点で物事を考えることが得意で、教室長や生徒から賞賛の言葉をいただきました。", group: "desc"},
  { id: 15, label: "古文", group: "nonDesc"},
  { id: 16, label: "ネットワーク", description:"通信技術に興味があり、OSI参照モデルのそれぞれの階層の役割や通信パケットのしくみ、セキュリティについて勉強していました。", group: "desc"},
  { id: 17, label: "イベント運営", description: "サークルでは大学祭でのゲーム展示の運営の責任者として、会場設営や来場者への対応などを担当しました。また、研究室内での飲み会や芋煮会などのイベントの幹事として企画・進行をしました。",group: "desc"},
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
  { from: 1, to: 15 , label:"ゲームのストーリーの元となった物語", font: {size: 0}},
  { from: 1, to: 17 , label:"ゲームをプレイした人の視点や感想を知る", font: {size: 0}},
  { from: 2, to: 4 , label:"新しいアイデアの着想", font: {size: 0}},
  { from: 2, to: 6 , label:"カラスを対象とした研究", font: {size: 0}},
  { from: 2, to: 10 , label:"実験システムの実装", font: {size: 0}},
  { from: 2, to: 11 , label:"VR/ARに関する近年の動向の理解", font: {size: 0}},
  { from: 2, to: 12 , label:"外部企業との共同研究", font: {size: 0}},
  { from: 2, to: 14 , label:"人に論理的に説明する", font: {size: 0}},
  { from: 3, to: 5 , label:"音楽に対する新たな視点", font: {size: 0}},
  { from: 3, to: 13 , label:"小説を題材とした楽曲", font: {size: 0}},
  { from: 4, to: 6 , label:"カラスの観察", font: {size: 0}},
  { from: 5, to: 8 , label:"脱力感", font: {size: 0}},
  { from: 5, to: 9 , label:"ギターに興味を持つきっかけ", font: {size: 0}},
  { from: 5, to: 12 , label:"バンド活動", font: {size: 0}},
  { from: 7, to: 8 , label:"半身の姿勢", font: {size: 0}},
  { from: 7, to: 12 , label:"チームスポーツ", font: {size: 0}},
  { from: 8, to: 9 , label:"合気道に興味を持つきっかけ", font: {size: 0}},
  { from: 8, to: 12 , label:"部活動運営", font: {size: 0}},
  { from: 10, to: 11 , label:"VR/ARコンテンツの実装", font: {size: 0}},
  { from: 10, to: 16 , label:"通信処理の実装", font: {size: 0}},
  { from: 12, to: 13 , label:"人との関わり方を考えるきっかけ", font: {size: 0}},
  { from: 12, to: 17 , label:"メンバーと協力して運営", font: {size: 0}},
];

const MyNetwork = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [selectedNode, setSelectedNode] = useState<NodeType | null>(null); //クリックで選択されたノード
  const [popupPosition, setPopupPosition] = useState<{ x: number; y: number } | null>(null); //ノードの説明をするポップアップ

  useEffect(() => {
    if (!ref.current) return;

    const nodes = new DataSet<NodeType>(nodesData);
    const edges = new DataSet<any>(edgesData);

    const options = {
      nodes: {
        shape: "box",
        
        font: {
          size: 20,
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
          gravitationalConstant: -160,
          springLength: 220
        },
        stabilization: true
      },
      groups: {
        desc: {
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
          }
        },
        nonDesc: {
          color: {
            background: "#dcdcdc",
            border: "#aaa",
            highlight: {
              background: "#dcdcdc",
              border: "#aaa",
            },
            hover: {
              background: "#dcdcdc",
              border: "#aaa",
            }
          }
        }
      }
    };

    const network = new Network(ref.current, { nodes, edges }, options);

    network.on("click", (params: any) => {
        //エッジをクリックしても何も起こらないようにする
        if(params.edges.length>0){
          network.unselectAll();
        }

        //descriptionのあるノードをクリックしたら説明ポップアップを表示
        const nodeId = params.nodes[0];
        if (typeof nodeId === 'number' || typeof nodeId === 'string') {
          const node = nodes.get(nodeId);
          if (node && node.description) {
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
    <div className="relative overflow-visible">
      <div ref={ref} style={{ height: 450, width: "100%" }} />
      {selectedNode && popupPosition && (
        <div
          className="absolute z-50 bg-white border border-lime-300 rounded shadow-lg p-4 text-sm"
          style={{ top: popupPosition.y+10, left: popupPosition.x-5 }}
        >
          <h2 className="font-bold mb-2">{selectedNode.label}</h2>
          <p>{selectedNode.description}</p>

        </div>
      )}
    </div>
  );
};

export default MyNetwork;