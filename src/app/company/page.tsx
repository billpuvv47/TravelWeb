export default function Company() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://scontent-itm1-1.xx.fbcdn.net/v/t1.6435-9/152336880_526361001677043_7800924190243634171_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=536f4a&_nc_ohc=WIHkDJC3SHIQ7kNvwHAyqFn&_nc_oc=AdnT9vRH2Btq__aWqQ0x_ep_1-sDy4BrJSUw-5wJYk5vjzGuGqfKUmnabpUYpAg3dS0&_nc_zt=23&_nc_ht=scontent-itm1-1.xx&_nc_gid=z-yTpceytHKSv2Sd7GZNyQ&oh=00_AfNZgSOMiQsQ48SGQx6tb4PYl_royc_HpAKPbYp4XdQJjA&oe=6876050C')`
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            会社案内
          </h1>
          <p className="text-xl">
            Adya Travelについて
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                私たちについて
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Adya Travelは、モンゴルの壮大な自然と遊牧民文化を日本の皆様にお届けする専門旅行会社です。
                また、東京エリアにおいて高品質な造園サービスも提供しております。
              </p>
              <p className="text-lg text-gray-600 mb-6">
                モンゴルの美しい風景、遊牧民の温かいもてなし、そして東京の美しい庭園創造を通じて、
                お客様に最高の体験をお届けすることが私たちの使命です。
              </p>
              <p className="text-lg text-gray-600">
                15年以上の豊富な経験と専門知識を活かし、お客様一人ひとりのご要望に合わせた
                オーダーメイドのサービスをご提供いたします。
              </p>
            </div>
            <div
              className="h-96 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url('https://scontent-itm1-1.xx.fbcdn.net/v/t1.6435-9/152336880_526361001677043_7800924190243634171_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=536f4a&_nc_ohc=WIHkDJC3SHIQ7kNvwHAyqFn&_nc_oc=AdnT9vRH2Btq__aWqQ0x_ep_1-sDy4BrJSUw-5wJYk5vjzGuGqfKUmnabpUYpAg3dS0&_nc_zt=23&_nc_ht=scontent-itm1-1.xx&_nc_gid=z-yTpceytHKSv2Sd7GZNyQ&oh=00_AfNZgSOMiQsQ48SGQx6tb4PYl_royc_HpAKPbYp4XdQJjA&oe=6876050C')`
              }}
            />
          </div>
        </div>
      </section>

      {/* Company Information Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              会社概要
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-green-600 text-white">
              <h3 className="text-2xl font-bold">企業情報</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50 w-1/4">
                      会社名
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      株式会社 Adya Travel
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                      設立年
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      2009年4月
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                      資本金
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      1,000万円
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                      従業員数
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      25名（2024年12月現在）
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                      事業内容
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      ・モンゴル専門旅行業<br />
                      ・造園工事業<br />
                      ・庭園設計・施工<br />
                      ・植栽管理業
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                      本社所在地
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      〒150-0001 東京都渋谷区神宮前1-1-1<br />
                      Adyaビル 3F
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                      代表者
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      代表取締役社長 田中 和夫
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                      許認可
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      ・旅行業登録 第3-1234号<br />
                      ・造園工事業許可 東京都知事許可（般-30）第12345号<br />
                      ・一級造園施工管理技士 在籍
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-green-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                企業理念
              </h3>
              <p className="text-green-700 text-lg">
                「自然と文化の架け橋となり、お客様に感動と癒しをお届けする」
              </p>
              <p className="text-green-600 mt-4">
                モンゴルの雄大な自然と日本の美しい庭園文化を通じて、
                人々の心に深い感動と安らぎをもたらすことを使命としています。
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                ビジョン
              </h3>
              <p className="text-blue-700 text-lg">
                「世界に誇れる日本の旅行・造園会社として」
              </p>
              <p className="text-blue-600 mt-4">
                モンゴル旅行のパイオニアとして、また東京エリアの造園リーダーとして、
                常に最高品質のサービスを提供し続けます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              沿革
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-green-600 text-white">
              <h3 className="text-2xl font-bold">会社の歩み</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      年月
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      出来事
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      2009年4月
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      東京都渋谷区にてAdya Travel設立。モンゴル専門旅行業を開始。
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      2011年6月
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      造園事業部を新設。東京エリアでの造園サービスを開始。
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      2013年3月
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      モンゴル現地事務所をウランバートルに開設。
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      2015年8月
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      累計ツアー参加者数1,000名を突破。
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      2017年5月
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      造園工事業許可を取得。事業規模拡大。
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      2019年12月
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      創立10周年。従業員数20名に拡大。
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      2021年4月
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      新型コロナウイルス対策を徹底し、安全なツアー運営を継続。
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      2023年9月
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      オンライン相談サービスを開始。デジタル化推進。
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      2024年12月
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      創立15周年。新Webサイトリニューアル。
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Team Structure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              組織体制
            </h2>
            <p className="text-xl text-gray-600">
              専門性の高いスタッフが各部門で活躍しています
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                ツアー事業部
              </h3>
              <p className="text-gray-600 mb-4">
                モンゴル専門の旅行プランナーと現地ガイドが在籍
              </p>
              <div className="text-2xl font-bold text-green-600">
                12名
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                造園事業部
              </h3>
              <p className="text-gray-600 mb-4">
                一級造園施工管理技士と熟練の職人が在籍
              </p>
              <div className="text-2xl font-bold text-green-600">
                10名
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                管理部門
              </h3>
              <p className="text-gray-600 mb-4">
                営業・経理・総務のサポートスタッフ
              </p>
              <div className="text-2xl font-bold text-green-600">
                3名
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values and Commitment */}
      <section className="py-20 bg-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            私たちの約束
          </h2>
          <p className="text-xl mb-8">
            お客様に最高の体験をお届けするために、私たちが大切にしていること
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-2">品質への こだわり</h3>
              <p>
                すべてのサービスにおいて、最高品質を追求します
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">お客様第一</h3>
              <p>
                お客様のご要望を第一に考え、最適なご提案をいたします
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold mb-2">持続可能性</h3>
              <p>
                環境に配慮し、持続可能な観光・造園を実践します
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
