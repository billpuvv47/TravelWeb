// import { useState } from "react";
import ContactForm from "@/components/ContactForm";

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
              <ContactForm />
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
                      <a href="mailto:sh.adyasvren@gmail.com" className="text-green-600 hover:text-green-700">
                        sh.adyasvren@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-900">電話番号</h3>
                      <a href="tel:0423061844" className="text-green-600 hover:text-green-700">
                        04-2306-1844
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-green-600 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h3 className="font-medium text-gray-900">会社の住所</h3>
                      <a href="https://maps.app.goo.gl/ZuE85RnT67ps4EJg6" className="text-green-600 hover:text-green-700">
                        〒189-0026 東京都東村山市多摩湖4-2-5 高野ハイツ201
                      </a>
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
