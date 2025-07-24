// import { useState } from "react";

export default function Contact() {
  // Remove useState and handleChange for uncontrolled form
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://juulchin.com/static/c04cb78b7a3d4b683a1cd9b361d3c3a3/61e60/Arkhangai_f916d19d8e.jpg')`
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            お問い合わせ
          </h1>
          <p className="text-xl">
            モンゴル旅行・造園サービスのご相談はお気軽にどうぞ
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                お問い合わせフォーム
              </h2>
              {/* Netlify Forms: Must have data-netlify, form-name, and a honeypot field. Do not use onSubmit handler. */}
              <form
                name="contacts"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/thanks"
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contacts" />
                {/* Honeypot field for spam prevention (hidden from users) */}
                <p className="hidden">
                  <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                  </label>
                </p>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    お名前 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="山田太郎"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="03-1234-5678"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    ご希望のサービス
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">選択してください</option>
                    <option value="gobi-tour">ゴビ砂漠探険ツアー</option>
                    <option value="nomad-tour">遊牧民体験ツアー</option>
                    <option value="horse-tour">乗馬体験ツアー</option>
                    <option value="culture-tour">文化体験ツアー</option>
                    <option value="garden-design">庭園設計・施工</option>
                    <option value="landscaping">造園工事</option>
                    <option value="maintenance">植木の手入れ</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    お問い合わせ内容 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="ご質問やご要望をお聞かせください"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  送信する
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  連絡先情報
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-900">メールアドレス</h3>
                      <a href="mailto:billpuvv47@gmail.com" className="text-green-600 hover:text-green-700">
                        billpuvv47@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-900">電話番号</h3>
                      <a href="tel:07020125328" className="text-green-600 hover:text-green-700">
                        070-2012-5328
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-900">サービスエリア</h3>
                      <p className="text-gray-600">
                        モンゴル全域（ツアー）<br />
                        東京都・神奈川県・埼玉県（造園）
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  営業時間
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">月曜日 - 金曜日</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">土曜日</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">日曜日・祝日</span>
                    <span className="font-medium text-red-600">休業</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  ※ツアー期間中は24時間対応いたします
                </p>
              </div>

              {/* Response Time */}
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  返信について
                </h3>
                <p className="text-green-700">
                  お問い合わせいただいた内容については、
                  <strong>24時間以内</strong>にご返信いたします。
                  お急ぎの場合は、お電話でお問い合わせください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              よくあるご質問
            </h2>
            <p className="text-xl text-gray-600">
              お客様からよくお寄せいただく質問と回答
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-green-600 text-white">
              <h3 className="text-2xl font-bold">FAQ一覧</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      カテゴリ
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      質問
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      回答
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ツアー
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      モンゴルツアーの最適な時期はいつですか？
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      5月〜9月が最適です。特に6月〜8月は気候が安定しています。
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ツアー
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      ビザは必要ですか？
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      30日以内の観光目的でしたらビザは不要です。
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ツアー
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      一人でも参加できますか？
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      はい、お一人様でもご参加いただけます。追加料金はございません。
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      造園
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      見積もりは無料ですか？
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      はい、現地調査・お見積もりは無料で行っております。
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      造園
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      作業期間はどのくらいかかりますか？
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      規模により異なりますが、一般的な庭園で1週間〜1ヶ月程度です。
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      共通
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      キャンセル料はかかりますか？
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      ツアーは出発の30日前まで、造園工事は着工の7日前まで無料です。
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
