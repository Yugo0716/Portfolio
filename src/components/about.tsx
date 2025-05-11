export function AboutSection() {
    return (
        <section id="about" className="max-w-3xl mx-auto space-y-6">
             <h2 className="text-2xl font-bold">About</h2>
            <div>
                <h3 className="font-semibold">名前</h3>
                <p>菊池 勇吾（きくち ゆうご）</p>
            </div>
            <div>
                <h3 className="font-semibold">経歴</h3>
                <ul className="list-disc list-inside">
                    <li>2023年10月より東北大学 インタラクティブコンテンツ研究室に所属</li>  
                    <li>2025年3月 東北大学工学部電気情報物理工学科 卒業</li>
                    <li>2025年4月 東北大学情報科学研究科システム情報科学専攻 入学</li>
                    
                    <div className="h-4" />
                    <li>研究室ではインタラクティブコンテンツや外部企業との共同研究に従事</li>
                    <li>主に企画・プログラマとして学生制作のゲーム作品を複数発表、Unity歴4年</li>
                </ul>
            </div>
            <div>
                <h3 className="font-semibold">使用言語</h3>
                <ul className="list-disc list-inside">
                <li>C#（Unity開発中心）</li>
                <li>JavaScript / TypeScript（フロント開発）</li>
                <li>Python（AI・データ分析用）</li>
                </ul>
            </div>
            <div>
                <h3 className="font-semibold">資格</h3>
                <ul className="list-disc list-inside">
                <li>基本情報技術者</li>
                <li>TOEIC 775点</li>
                </ul>
            </div>
            <div>
                <h3 className="font-semibold">ゲームに対する思い</h3>
                <p>
                幼少期からゲームに親しみ、「ゲームで感動し、勇気づけられた経験」から自分も誰かの心を動かすような作品を作りたいと考えるようになりました。
                </p>
                <p>
                体験設計、感情の動き、UIの心地よさなど、単なるプレイ以上の「体験」としてのゲーム作りに挑戦しています。
                </p>
            </div>
            <div>
                <h3 className="font-semibold">自己PR</h3>
                <ul className="list-disc list-inside">
                <li>新しい技術やツールに対する学習意欲が高く、独学で多数のスキルを習得</li>
                <li>開発の中で問題点に気付き、自ら検証・改善を繰り返す力</li>
                <li>チーム制作でも個人制作でも粘り強く取り組む継続力</li>
                </ul>
            </div>
        </section>
    );
        
}