import MyNetwork from 'components/myNetwork';

export function AboutSection() {
    return (
        <section id="about" className="relative -mt-20 pt-24 max-w-3xl mx-auto space-y-9 leading-relaxed">
             <h2 className="text-2xl font-bold">About</h2>
            <div>
                <h3 className="font-semibold">名前</h3>
                <p>菊池 勇吾（きくち ゆうご）</p>
            </div>

            <div>
                <h3 className="font-semibold">経歴</h3>
                <ul className="list-disc list-inside">
                
                    <li>2023年10月より東北大学 <a
                    href="https://www.icd.riec.tohoku.ac.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lime-600 underline"
                    >
                    インタラクティブコンテンツ研究室
                    <svg className="inline w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                </a>に所属</li>  
                    <li>2025年3月 東北大学工学部電気情報物理工学科 卒業</li>
                    <li>2025年4月 東北大学情報科学研究科システム情報科学専攻 入学</li>
                    
                    <div className="h-4" />
                    <li>研究室ではインタラクティブコンテンツや外部企業との共同研究に従事</li>
                    <li>主な研究分野：HCI (Human Computer Interaction)</li>
                    <li>主に企画・プログラマとして学生制作のゲーム作品を複数発表、Unity歴4年</li>
                </ul>
            </div>

            <div>
                <h3 className="font-semibold">部活動・サークル活動</h3>
                <ul className="list-disc list-inside">
                    <li>学部1年～現在 <a
                        href="https://micomprocedure.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lime-600 underline"
                        >
                        東北大学マイコンプロシージャ（ゲーム制作サークル）
                        <svg className="inline w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                        </a>に所属
                    </li>
                    <li>学部1年～2年 <a
                        href="https://tohokuaiki.jp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lime-600 underline"
                        >
                        東北大学学友会合気道部 
                        <svg className="inline w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                        </a>に所属
                    </li>
                    <li>学部3年～4年 東北大学学友会軽音楽部Feelin’ Freeに所属
                    </li>
                </ul>
            </div>

            <div>
                <h3 className="font-semibold">資格</h3>
                <ul className="list-disc list-inside">
                <li>基本情報技術者</li>
                <li>Basic SecCap 10</li>
                <li>TOEIC 775点</li>
                </ul>
            </div>

            <div>
                <h3 className="font-semibold">使用言語（上ほど使用に慣れています）</h3>
                <ul className="list-disc list-inside">
                <li>C#（Unity開発中心）</li>
                <li>JavaScript / TypeScript（本ポートフォリオサイト制作・ブラウザ上で動作するアプリケーション制作）</li>
                <li>Python（データ分析、Raspberry Piなど）</li>
                <li>C</li>
                <li>C++</li>
                <li>R</li>
                <li>F#</li>
                </ul>
            </div>
            
            <div>
                <h3 className="font-semibold">ゲームに対する思い</h3>
                <p>
                私は幼少期、自動車が好きでした。そんな私が「マリオカート」をプレイしたことが私のゲームの原点です。ゲームは身近で見聞きしたものを、誰もが、手軽に、もっと楽しく、インタラクティブに体験できる魅力があります。
                </p>
                <p>
                この素晴らしさを世界中の人と共有したい、そんな思いでゲームを作っています。
                </p>
            </div>

            <div>
                <h3 className="font-semibold">自己PR</h3>
                <p><strong>興味を持ったものをとりあえず試してみる行動力！</strong></p>
                大学に入って、それまで全くの未知だった合気道、エレキギターに挑戦しました。

                <p><strong>スイッチが入ればとことんやる継続力！</strong></p>
                一度取り掛かれば満足いくまでとにかく突き進みます。

                <p><strong>身近なことに面白さを見出す想像力！</strong></p>
                ふと頭に思い浮かんだことをゲーム化します。
            </div>
            
            <div>
                <h3 className="text-xl font-bold mt-8">私を形成するネットワーク</h3>
                <p className="mb-2">かつてスティーブ・ジョブズはスタンフォード大学の卒業式にて行なったスピーチの中で、"Connecting the Dots"という考え方を述べました。これは過去にやったことが将来的に思いもよらぬ形で結びつき合い、役立つことがある、ということを意味しています。</p>
                <p className="mb-2">私はこの考え方が好きで、この話を知って以来、少しでも興味を持った事柄について考えてみたり、取り組んでみたりしました。その結果すぐに合わずにやめてしまったこともありますが、様々なことを経験しました。</p>
                <p className="mb-2">以下のように私がこれまでに経験してきたことが相互につながって私を形づくっています。そして、将来的にこうしたつながりが増え、より豊かな人生となることを期待しています。</p>
                
                <div className='border border-lime-400 rounded'>
                    <MyNetwork />
                </div>
                
            </div>

        </section>
    );
        
}