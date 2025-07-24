import Link from "next/link";

export default function Tours() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://ugc.same-assets.com/CG-9TPmUBzE_eqcIsJ4gcg2fcZzBEVd2.jpeg')`
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            モンゴルツアー
          </h1>
          <p className="text-xl">
            壮大な自然と遊牧民文化を体験する特別な旅
          </p>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              人気のツアープラン
            </h2>
            <p className="text-xl text-gray-600">
              日本語ガイド付きで安心・安全なモンゴル体験をお届けします
            </p>
          </div>

          {/* Tour Details */}
          <div className="space-y-16">
            {/* Gobi Desert Tour */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div
                    className="h-64 md:h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://ugc.same-assets.com/4wKWFkxeXOqokKeKq32ynCGfH7_p7yg2.jpeg')`
                    }}
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="text-sm text-green-600 font-medium mb-2">
                    人気No.1
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    ゴビ砂漠探険ツアー
                  </h3>
                  <p className="text-gray-600 mb-6">
                    世界最大級のゴビ砂漠で壮大な自然を体験し、満天の星空の下でキャンプ。
                    ラクダ乗りや化石発掘体験も含まれる冒険満載のツアーです。
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="h-5 w-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      7日間・6泊
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="h-5 w-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      ゴビ砂漠・ウランバートル
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="h-5 w-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                      最大8名の少人数制
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-green-600">
                      ¥220,000〜
                    </div>
                    <Link
                      href="/contacts"
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      詳細・予約
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Nomad Experience Tour */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 order-2">
                  <div
                    className="h-64 md:h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://notesofnomads.com/wp-content/uploads/ger-mongolian-interior-1024x681.jpg')`
                    }}
                  />
                </div>
                <div className="md:w-1/2 p-8 order-1">
                  <div className="text-sm text-blue-600 font-medium mb-2">
                    文化体験
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    遊牧民生活体験ツアー
                  </h3>
                  <p className="text-gray-600 mb-6">
                    本物の遊牧民家族と一緒に過ごし、伝統的な生活様式を体験。
                    ユルト（ゲル）での宿泊、乳製品作り、羊の世話など貴重な体験ができます。
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="h-5 w-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      5日間・4泊
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="h-5 w-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      中央モンゴル草原地帯
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="h-5 w-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      伝統的ユルト宿泊
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-green-600">
                      ¥180,000〜
                    </div>
                    <Link
                      href="/contacts"
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      詳細・予約
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Horse Riding Tour */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div
                    className="h-64 md:h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://www.nationalgeographic.com/content/dam/expeditions/destinations/asia/active/Mongolian-Horse-Trek/hero-mongolian-horse-trek-new.jpg')`
                    }}
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="text-sm text-orange-600 font-medium mb-2">
                    アクティブ
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    馬術・乗馬体験ツアー
                  </h3>
                  <p className="text-gray-600 mb-6">
                    モンゴル馬に乗って広大な草原を駆け抜ける爽快体験。
                    初心者から上級者まで、レベルに合わせた乗馬指導を行います。
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="h-5 w-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      4日間・3泊
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="h-5 w-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      テレルジ国立公園
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="h-5 w-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      プロの乗馬指導付き
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-green-600">
                      ¥160,000〜
                    </div>
                    <Link
                      href="/contacts"
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      詳細・予約
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Itinerary */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              サンプル行程表
            </h2>
            <p className="text-xl text-gray-600">
              ゴビ砂漠探険ツアー 7日間の詳細スケジュール
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-green-600 text-white">
              <h3 className="text-2xl font-bold">ゴビ砂漠探険ツアー 行程表</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      日程
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      場所
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      活動内容
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      宿泊
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      1日目
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      東京→ウランバートル
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      成田空港出発、ウランバートル到着、市内観光
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ホテル
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      2日目
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ウランバートル→ゴビ砂漠
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      専用車でゴビ砂漠へ移動、砂丘トレッキング
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ユルト
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      3日目
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ゴビ砂漠
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      ラクダ乗り体験、化石発掘体験、星空観察
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      テント
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      4日目
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ゴビ砂漠
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      サンライズ観察、遊牧民家族訪問、伝統料理体験
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ユルト
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      5日目
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ゴビ砂漠→カラコルム
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      古都カラコルム遺跡見学、エルデネゾー寺院
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ユルト
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      6日目
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      カラコルム→ウランバートル
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      ウランバートル帰着、お土産ショッピング、送別会
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ホテル
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      7日目
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ウランバートル→東京
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      空港へ送迎、成田空港到着・解散
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      機内
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Inclusions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                ツアーに含まれるもの
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-green-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900">航空券</div>
                    <div className="text-gray-600">成田⇔ウランバートル往復航空券</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-green-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900">宿泊</div>
                    <div className="text-gray-600">ホテル・ユルト・テント宿泊費</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-green-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900">食事</div>
                    <div className="text-gray-600">朝食6回、昼食5回、夕食5回</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-green-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900">専用車・ガイド</div>
                    <div className="text-gray-600">日本語ガイド、専用車での移動</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-green-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900">体験活動</div>
                    <div className="text-gray-600">ラクダ乗り、化石発掘、文化体験</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                ツアーに含まれないもの
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-red-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900">個人的な費用</div>
                    <div className="text-gray-600">お土産代、飲み物代など</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-red-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900">旅行保険</div>
                    <div className="text-gray-600">海外旅行保険（加入推奨）</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-red-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900">チップ</div>
                    <div className="text-gray-600">ガイド・ドライバーへのチップ</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-red-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div>
                    <div className="font-medium text-gray-900">ビザ費用</div>
                    <div className="text-gray-600">モンゴル入国ビザ（30日以内は不要）</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            モンゴルの大自然があなたを待っています
          </h2>
          <p className="text-xl mb-8">
            一生忘れられない思い出を作りませんか？
          </p>
          <div className="space-x-4">
            <Link
              href="/contacts"
              className="inline-block bg-white text-green-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              今すぐ予約・相談
            </Link>
            <Link
              href="/gallery"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              ギャラリーを見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
