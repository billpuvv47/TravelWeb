import Link from "next/link";

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://windhorsetour.com/wp-content/uploads/2020-12/inner-mongolia-travel-guide.jpg')`
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            サービス
          </h1>
          <p className="text-xl">
            モンゴル旅行と東京造園の専門サービス
          </p>
        </div>
      </section>

      {/* Mongolia Tours Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              モンゴル旅行ツアー
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              モンゴルの壮大な自然と遊牧民文化を体験する特別なツアーをご提供します。
              ゴビ砂漠、大草原、伝統的な遊牧民生活を日本語ガイドと共に安心して楽しめます。
            </p>
          </div>

          {/* Tour Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://notesofnomads.com/wp-content/uploads/ger-mongolian-interior-1024x681.jpg')`
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  遊牧民体験ツアー
                </h3>
                <p className="text-gray-600 mb-4">
                  本物の遊牧民家族と過ごし、伝統的な生活を体験
                </p>
                <div className="text-2xl font-bold text-green-600">
                  ¥180,000〜
                </div>
                <div className="text-sm text-gray-500">
                  5日間・4泊
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://ugc.same-assets.com/4wKWFkxeXOqokKeKq32ynCGfH7_p7yg2.jpeg')`
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  ゴビ砂漠探険ツアー
                </h3>
                <p className="text-gray-600 mb-4">
                  世界最大級の砂漠での冒険と星空観察
                </p>
                <div className="text-2xl font-bold text-green-600">
                  ¥220,000〜
                </div>
                <div className="text-sm text-gray-500">
                  7日間・6泊
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://stonehorsemongolia.com/wp-content/uploads/2017/04/IMG_20161231_235721_405-510x510.jpg')`
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  馬術・乗馬ツアー
                </h3>
                <p className="text-gray-600 mb-4">
                  モンゴル馬での大草原騎行体験
                </p>
                <div className="text-2xl font-bold text-green-600">
                  ¥160,000〜
                </div>
                <div className="text-sm text-gray-500">
                  4日間・3泊
                </div>
              </div>
            </div>
          </div>

          {/* Tour Pricing Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="px-6 py-4 bg-green-600 text-white">
              <h3 className="text-2xl font-bold">ツアー料金表</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ツアー名
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      期間
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      料金（1名様）
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      含まれるもの
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      遊牧民体験ツアー
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      5日間・4泊
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ¥180,000〜
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      宿泊、食事、ガイド、送迎
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ゴビ砂漠探険ツアー
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      7日間・6泊
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ¥220,000〜
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      宿泊、食事、ガイド、送迎、ラクダ乗り
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      馬術・乗馬ツアー
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      4日間・3泊
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ¥160,000〜
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      宿泊、食事、ガイド、乗馬指導
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      文化体験ツアー
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      3日間・2泊
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ¥120,000〜
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      宿泊、食事、ガイド、文化体験
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Tokyo Landscaping Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              東京造園サービス
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              東京エリアで個人邸、マンション、公共空間の造園工事、植木の手入れ、
              庭園デザインを行っています。豊富な経験と技術で美しい緑の空間を創造します。
            </p>
          </div>

          {/* Service Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://c02.purpledshub.com/uploads/sites/40/2020/04/GettyImages-1166914367-2788542-scaled.jpg?webp=1&w=1200')`
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  個人邸庭園設計
                </h3>
                <p className="text-gray-600 mb-4">
                  お客様のご要望に合わせたオリジナル庭園設計
                </p>
                <div className="text-lg font-medium text-green-600">
                  ご相談無料
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://c02.purpledshub.com/uploads/sites/40/2020/04/GettyImages-1150624358-3e31bb8-scaled.jpg?webp=1&w=1200')`
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  マンション緑地管理
                </h3>
                <p className="text-gray-600 mb-4">
                  マンション共用部の植栽管理・年間メンテナンス
                </p>
                <div className="text-lg font-medium text-green-600">
                  月額¥50,000〜
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://ugc.same-assets.com/jtahDpsvELt6bCIIYt4zQXfdoabkgWo3.jpeg')`
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  植木剪定・手入れ
                </h3>
                <p className="text-gray-600 mb-4">
                  プロの技術による植木の剪定・整枝作業
                </p>
                <div className="text-lg font-medium text-green-600">
                  ¥15,000〜/日
                </div>
              </div>
            </div>
          </div>

          {/* Landscaping Services Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-green-600 text-white">
              <h3 className="text-2xl font-bold">造園サービス料金表</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      サービス内容
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      単位
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      料金
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      備考
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      庭園設計・施工
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      1㎡あたり
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ¥8,000〜¥25,000
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      設計料込み、植栽による
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      植木剪定
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      1日あたり
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ¥15,000〜¥25,000
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      作業員1名、処分費別途
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      芝生管理
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      月額
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ¥30,000〜¥80,000
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      面積・頻度による
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      マンション緑地管理
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      月額
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ¥50,000〜¥200,000
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      年間契約、規模による
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      伐採・伐根
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      1本あたり
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ¥20,000〜¥100,000
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      樹木の大きさによる
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-xl mb-8">
            モンゴル旅行も造園サービスも、お客様のご要望に合わせてご提案いたします
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-green-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors"
          >
            お問い合わせ・お見積り
          </Link>
        </div>
      </section>
    </div>
  );
}
