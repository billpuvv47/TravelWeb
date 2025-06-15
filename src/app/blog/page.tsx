import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "ゴビ砂漠で見る満天の星空 - 一生に一度の体験",
      excerpt: "モンゴルのゴビ砂漠で体験できる星空観察について詳しくご紹介します。都市部では決して見ることのできない美しい星座の世界をお楽しみください。",
      category: "モンゴル旅行",
      date: "2024年11月15日",
      image: "https://ugc.same-assets.com/4wKWFkxeXOqokKeKq32ynCGfH7_p7yg2.jpeg",
      readTime: "5分"
    },
    {
      id: 2,
      title: "遊牧民家族との生活体験 - 本物の文化に触れる",
      excerpt: "モンゴルの遊牧民家族と過ごす貴重な体験について。伝統的な生活様式、ユルトでの宿泊、家畜の世話など、現代では珍しい体験をレポートします。",
      category: "モンゴル旅行",
      date: "2024年11月10日",
      image: "https://notesofnomads.com/wp-content/uploads/ger-mongolian-interior-1024x681.jpg",
      readTime: "7分"
    },
    {
      id: 3,
      title: "秋の庭園手入れ - 美しい庭を保つコツ",
      excerpt: "秋から冬にかけての庭園管理について専門家がアドバイス。植木の剪定時期、落ち葉の処理、来年に向けての準備方法をご説明します。",
      category: "造園・ガーデニング",
      date: "2024年11月5日",
      image: "https://ugc.same-assets.com/b1c46o0wcNQ10ag24WQApThG3-Tjbjz0.jpeg",
      readTime: "4分"
    },
    {
      id: 4,
      title: "モンゴル馬との触れ合い - 乗馬初心者ガイド",
      excerpt: "モンゴル馬の特徴と乗馬体験について初心者向けに解説。大草原での乗馬の楽しさと注意点をお伝えします。",
      category: "モンゴル旅行",
      date: "2024年10月28日",
      image: "https://ugc.same-assets.com/CG-9TPmUBzE_eqcIsJ4gcg2fcZzBEVd2.jpeg",
      readTime: "6分"
    },
    {
      id: 5,
      title: "マンション緑地管理のポイント",
      excerpt: "マンションの共用部緑地を美しく保つための管理方法をプロが解説。住民の方々に喜ばれる緑地作りのコツをお教えします。",
      category: "造園・ガーデニング",
      date: "2024年10月20日",
      image: "https://ugc.same-assets.com/mRsoHylM-gj2iBB0ll77NG_w8Uuzxgu2.jpeg",
      readTime: "5分"
    },
    {
      id: 6,
      title: "モンゴル旅行に必要な持ち物リスト",
      excerpt: "モンゴル旅行を快適に過ごすための持ち物について詳しく解説。気候の変化に対応できる服装や必需品をリストアップしました。",
      category: "モンゴル旅行",
      date: "2024年10月15日",
      image: "https://ugc.same-assets.com/nnviZRcln1EeJS_rjlU3rGjc4Ssfp1-U.jpeg",
      readTime: "8分"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://ugc.same-assets.com/8lb10SMfJuNK0LMvrtO-tC7oxtH2HVVy.webp')`
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            ブログ
          </h1>
          <p className="text-xl">
            モンゴル旅行と造園に関する情報をお届けします
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div
                          className="h-48 md:h-full bg-cover bg-center"
                          style={{
                            backgroundImage: `url('${post.image}')`
                          }}
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center mb-3">
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-gray-500 text-sm ml-3">
                            {post.date}
                          </span>
                          <span className="text-gray-500 text-sm ml-3">
                            読了時間: {post.readTime}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4">
                          {post.excerpt}
                        </p>
                        <Link
                          href={`/blog/${post.id}`}
                          className="text-green-600 hover:text-green-700 font-medium"
                        >
                          続きを読む →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="flex space-x-2">
                  <button className="px-3 py-2 bg-gray-200 text-gray-500 rounded-lg cursor-not-allowed">
                    前へ
                  </button>
                  <button className="px-3 py-2 bg-green-600 text-white rounded-lg">
                    1
                  </button>
                  <button className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
                    2
                  </button>
                  <button className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
                    3
                  </button>
                  <button className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
                    次へ
                  </button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Categories */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    カテゴリー
                  </h3>
                  <div className="space-y-2">
                    <Link href="/blog?category=mongolia" className="block text-gray-600 hover:text-green-600">
                      モンゴル旅行 (15)
                    </Link>
                    <Link href="/blog?category=landscaping" className="block text-gray-600 hover:text-green-600">
                      造園・ガーデニング (12)
                    </Link>
                    <Link href="/blog?category=culture" className="block text-gray-600 hover:text-green-600">
                      文化・歴史 (8)
                    </Link>
                    <Link href="/blog?category=tips" className="block text-gray-600 hover:text-green-600">
                      旅行のコツ (6)
                    </Link>
                  </div>
                </div>

                {/* Popular Posts */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    人気記事
                  </h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <div key={post.id} className="flex">
                        <div
                          className="w-16 h-16 bg-cover bg-center rounded flex-shrink-0"
                          style={{
                            backgroundImage: `url('${post.image}')`
                          }}
                        />
                        <div className="ml-3">
                          <Link
                            href={`/blog/${post.id}`}
                            className="text-sm font-medium text-gray-900 hover:text-green-600 line-clamp-2"
                          >
                            {post.title}
                          </Link>
                          <p className="text-xs text-gray-500 mt-1">
                            {post.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Monthly Archive */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    月別アーカイブ
                  </h3>
                  <div className="space-y-2">
                    <Link href="/blog/2024/11" className="block text-gray-600 hover:text-green-600">
                      2024年11月 (3)
                    </Link>
                    <Link href="/blog/2024/10" className="block text-gray-600 hover:text-green-600">
                      2024年10月 (5)
                    </Link>
                    <Link href="/blog/2024/09" className="block text-gray-600 hover:text-green-600">
                      2024年9月 (4)
                    </Link>
                    <Link href="/blog/2024/08" className="block text-gray-600 hover:text-green-600">
                      2024年8月 (6)
                    </Link>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-4">
                    ニュースレター登録
                  </h3>
                  <p className="text-green-700 text-sm mb-4">
                    最新のモンゴル旅行情報や造園のコツをお届けします
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="メールアドレス"
                      className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                      登録する
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              最新記事一覧
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-green-600 text-white">
              <h3 className="text-2xl font-bold">記事一覧</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      タイトル
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      カテゴリー
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      公開日
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      読了時間
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {blogPosts.map((post) => (
                    <tr key={post.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <Link
                          href={`/blog/${post.id}`}
                          className="text-sm font-medium text-gray-900 hover:text-green-600"
                        >
                          {post.title}
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {post.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {post.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {post.readTime}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
