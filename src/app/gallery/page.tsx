"use client";

import { useState } from "react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "すべて" },
    { id: "mongolia", label: "モンゴル" },
    { id: "nomads", label: "遊牧民" },
    { id: "gobi", label: "ゴビ砂漠" },
    { id: "landscaping", label: "造園" },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "https://pbs.twimg.com/media/CyU6q67VIAAg1na.jpg",
      category: "gobi",
      title: "ゴビ砂漠の壮大な景色",
      description: "夕日に照らされる砂丘の美しいシルエット"
    },
    {
      id: 2,
      src: "https://cdn5.shoppy.mn/img/65751/800x510xwebp/Untitled-2-Recovered.png?h=c027d21b80d2467be6944c77b2f4e694ca4a95dd",
      category: "nomads",
      title: "遊牧民とラクダ",
      description: "伝統的な遊牧民の生活風景"
    },
    {
      id: 3,
      src: "https://images.stockcake.com/public/7/2/4/7247c083-63b2-4001-9ea0-0358da5e992b_large/nomadic-homes-landscape-stockcake.jpg",
      category: "mongolia",
      title: "モンゴルユルトキャンプ",
      description: "伝統的なゲルでのキャンプ体験"
    },
    {
      id: 4,
      src: "https://ugc.same-assets.com/CX5IPdSpCvZZU3Lt7piEpEdopZTQNyJZ.jpeg",
      category: "mongolia",
      title: "モンゴル馬と騎手",
      description: "大草原を駆け抜けるモンゴル馬"
    },
    {
      id: 5,
      src: "https://ugc.same-assets.com/FTgc759iigjMGs__T0Z41z_5ncdVSn3S.jpeg",
      category: "landscaping",
      title: "日本庭園デザイン",
      description: "美しい日本庭園の設計事例"
    },
    {
      id: 6,
      src: "https://c02.purpledshub.com/uploads/sites/40/2020/04/GettyImages-1150624358-3e31bb8-scaled.jpg?webp=1&w=1200",
      category: "landscaping",
      title: "造園植栽管理",
      description: "プロによる植栽の管理・メンテナンス"
    },
    {
      id: 7,
      src: "https://ugc.same-assets.com/WRckKvYlkHaSAQp9HOIP8lQzfE7HJc9g.jpeg",
      category: "mongolia",
      title: "モンゴルの大自然",
      description: "果てしなく続く草原の風景"
    },
    {
      id: 8,
      src: "https://news.mn/en/wp-content/uploads/sites/3/2023/11/a81aef5adfbf0770b88efc2ff6fd8f08.jpg",
      category: "nomads",
      title: "遊牧民の家族",
      description: "温かい笑顔で迎えてくれる遊牧民家族"
    },
    {
      id: 9,
      src: "https://images.stockcake.com/public/8/3/7/83703740-f909-455e-8fb9-b64145c49f8f_large/zen-garden-oasis-stockcake.jpg",
      category: "landscaping",
      title: "庭園樹木管理",
      description: "専門技術による庭園樹木の手入れ"
    },
    {
      id: 10,
      src: "https://ugc.same-assets.com/8lb10SMfJuNK0LMvrtO-tC7oxtH2HVVy.webp",
      category: "mongolia",
      title: "モンゴル草原風景",
      description: "広大な草原に点在するユルト"
    },
    {
      id: 11,
      src: "https://www.toursmongolia.com/uploads/Mongolia_people-nomad.jpg",
      category: "nomads",
      title: "遊牧民の日常",
      description: "平穏なモンゴル遊牧民の生活シーン"
    },
    {
      id: 12,
      src: "https://www.viewmongolia.com/mongolia/mongolia-accommodation/accommodation-mongolia.jpg",
      category: "landscaping",
      title: "ゴビ砂漠のユルト",
      description: "砂丘近くに設営されたユルトキャンプ"
    },
  ];

  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://ugc.same-assets.com/WRckKvYlkHaSAQp9HOIP8lQzfE7HJc9g.jpeg')`
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            ギャラリー
          </h1>
          <p className="text-xl">
            モンゴルの美しい風景と造園作品をご覧ください
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700 hover:bg-green-100"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div key={image.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <div className="relative overflow-hidden">
                  <div
                    className="h-64 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-300"
                    style={{
                      backgroundImage: `url('${image.src}')`
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-600">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              私たちの実績
            </h2>
            <p className="text-xl text-gray-600">
              これまでに手がけたプロジェクトの数々
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                500+
              </div>
              <div className="text-gray-600">
                モンゴルツアー参加者
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                200+
              </div>
              <div className="text-gray-600">
                造園プロジェクト
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                15年
              </div>
              <div className="text-gray-600">
                業界経験
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                98%
              </div>
              <div className="text-gray-600">
                お客様満足度
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Table */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              お客様の声
            </h2>
            <p className="text-xl text-gray-600">
              実際にご利用いただいたお客様からの評価
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-green-600 text-white">
              <h3 className="text-2xl font-bold">お客様評価一覧</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      お客様名
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      サービス
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      評価
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      コメント
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      日付
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      田中様
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ゴビ砂漠ツアー
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex text-yellow-400">
                        ★★★★★
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      一生忘れられない素晴らしい体験でした
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2024年10月
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      佐藤様
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      遊牧民体験ツアー
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex text-yellow-400">
                        ★★★★★
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      本物の文化に触れることができました
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2024年9月
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      鈴木様
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      庭園設計・施工
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex text-yellow-400">
                        ★★★★★
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      理想の庭が完成しました
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2024年8月
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      山田様
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      乗馬体験ツアー
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex text-yellow-400">
                        ★★★★☆
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      初心者でも安心して楽しめました
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2024年7月
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      高橋様
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      マンション緑地管理
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex text-yellow-400">
                        ★★★★★
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      丁寧な作業で満足しています
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2024年6月
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
