import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://lp-cms-production.imgix.net/2023-08/GettyRF511801037.jpg')`
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Chuluut LLC
          </h1>
          <p className="text-xl md:text-2xl mb-8">
          モンゴルの雄大な自然と遊牧文化の体験、東京エリアの造園サービスもご提供中
          </p>
          <div className="flex flex-col gap-1.5 w-full max-w-xs mx-auto sm:max-w-none sm:flex-row sm:gap-0 sm:space-x-4 sm:justify-center">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors text-center"
            >
              お問い合わせ
            </Link>
            <Link
              href="/services#tokyo-landscaping"
              className="w-full sm:w-auto inline-block border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors text-center"
            >
              造園サービスを見る
            </Link>
            <Link
              href="/tours"
              className="w-full sm:w-auto inline-block border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-colors text-center"
            >
              ツアーを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              私たちのサービス
            </h2>
            <p className="text-xl text-gray-600">
              モンゴル旅行と東京エリアの造園サービスを提供しています
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mongolia Tours */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://windhorsetour.com/wp-content/uploads/2020-12/inner-mongolia-travel-guide.jpg')`
                }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  モンゴル旅行ツアー
                </h3>
                <p className="text-gray-600 mb-4">
                  ゴビ砂漠、遊牧民との生活体験、馬の乗馬など、モンゴルの美しい自然と文化を体験できる特別なツアーをご提供します。
                </p>
                <Link
                  href="/tours"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  詳細を見る →
                </Link>
              </div>
            </div>

            {/* Tokyo Landscaping */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://ugc.same-assets.com/sZpBgpJrcy5cxqPP_Y6dgwOqMMEykhSd.jpeg')`
                }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  東京造園サービス
                </h3>
                <p className="text-gray-600 mb-4">
                  東京エリアで個人邸、マンション、公共空間の造園工事、植木の手入れ、庭園デザインを行っています。
                </p>
                <Link
                  href="/services#tokyo-landscaping"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  詳細を見る →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tour Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              モンゴル体験ハイライト
            </h2>
            <p className="text-xl text-gray-600">
              忘れられない思い出を作る特別な体験
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="h-48 w-full bg-cover bg-center rounded-lg mb-4"
                style={{
                  backgroundImage: `url('https://www.toursmongolia.com/uploads/Mongolia-nature-travel-destination.jpg')`
                }}
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                遊牧民との生活体験
              </h3>
              <p className="text-gray-600">
                本物の遊牧民家族と一緒に過ごし、伝統的な生活様式を体験
              </p>
            </div>

            <div className="text-center">
              <div
                className="h-48 w-full bg-cover bg-center rounded-lg mb-4"
                style={{
                  backgroundImage: `url('https://notesofnomads.com/wp-content/uploads/ger-mongolian-interior-1024x681.jpg.webp')`
                }}
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                ユルト（ゲル）宿泊
              </h3>
              <p className="text-gray-600">
                伝統的なモンゴルのユルトで一夜を過ごし、満天の星空を堪能
              </p>
            </div>

            <div className="text-center">
              <div
                className="h-48 w-full bg-cover bg-center rounded-lg mb-4"
                style={{
                  backgroundImage: `url('https://www.nationalgeographic.com/content/dam/expeditions/destinations/asia/active/Mongolian-Horse-Trek/hero-mongolian-horse-trek-new.jpg')`
                }}
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                馬での大草原探索
              </h3>
              <p className="text-gray-600">
                モンゴル馬に乗って広大な草原を駆け抜ける冒険体験
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              モンゴルの美しい風景
            </h2>
            <p className="text-xl text-gray-600">
              息をのむような大自然の景色をご覧ください
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div
              className="h-64 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url('https://ugc.same-assets.com/1vh0WWgjXw6fJ1pHUcLFGbSELRfGjNLo.jpeg')`
              }}
            />
            <div
              className="h-64 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-AKx-emXUvHqYHMT1p86g6ULZPg3OikRHIg&s')`
              }}
            />
            <div
              className="h-64 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url('https://ugc.same-assets.com/Yo2qVoh6GEnxFjofDCWcDS4VAX_-chGG.jpeg')`
              }}
            />
            <div
              className="h-64 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url('https://ugc.same-assets.com/YUdzeMicL7tb0670EBUNai0h8w85vqgO.jpeg')`
              }}
            />
          </div>

          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              ギャラリーをもっと見る
            </Link>
          </div>
        </div>
      </section>

      {/* Mongolia Culture Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                モンゴルの豊かな文化
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                数千年続く遊牧民の伝統文化、美しい自然環境、そして温かい人々のもてなし。
                モンゴルには現代社会では失われつつある貴重な体験が待っています。
              </p>
              <p className="text-lg text-gray-600 mb-8">
                私たちChuluut LLCは、この素晴らしい文化と自然を日本の皆様に
                安全で快適にお楽しみいただけるよう、2年以上にわたり
                専門的なサービスを提供し続けています。
              </p>
              <Link
                href="/company"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                会社について詳しく
              </Link>
            </div>
            <div
              className="h-96 bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/56/00/eb/caption.jpg?w=1200&h=-1&s=1')`
              }}
            />
          </div>
        </div>
      </section>

      {/* Photo Showcase */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              美しい瞬間の数々
            </h2>
            <p className="text-xl text-gray-600">
              モンゴルの自然と東京の庭園美
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              className="h-48 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://th.bing.com/th/id/OIP.YLG1pjCx7mifOF8v2X_PyAHaFj?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3')`
              }}
            />
            <div
              className="h-48 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://ugc.same-assets.com/aZ3sLTzjgVUMMqaCS97Bm9PEQdJrtV2W.jpeg')`
              }}
            />
            <div
              className="h-48 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://i.pinimg.com/originals/31/87/43/3187430be517541a175a44a765437918.jpg')`
              }}
            />
            <div
              className="h-48 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://ugc.same-assets.com/2g9xHBmhNlKTTq8fqtHPzQCZ8EUaD4su.jpeg')`
              }}
            />
            <div
              className="h-48 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://th.bing.com/th/id/R.d1b730673800951205fcb20d8abc19fb?rik=pzeh73NBlQXu2Q&riu=http%3a%2f%2f3.bp.blogspot.com%2f-4OWrvW5vKXg%2fUaV4w_D-9MI%2fAAAAAAAAAP4%2fugDHAROAuVA%2fs1600%2fmongolia.jpg&ehk=2BOEcvwNoTHV%2fuGKQ%2bEDnmglWYcRYVhCbDYEesQs3rk%3d&risl=&pid=ImgRaw&r=0')`
              }}
            />
            <div
              className="h-48 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://ugc.same-assets.com/C8HtOmbmr4w7x01SbQfW1HvOV11V1lar.jpeg')`
              }}
            />
            <div
              className="h-48 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://dmd-mongolie.com/en/wp-content/uploads/2020/02/159-1536x1022.jpg')`
              }}
            />
            <div
              className="h-48 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://ugc.same-assets.com/19CWk4pc9VZ1p3XaEThAoSAuwWE_DcCQ.webp')`
              }}
            />
          </div>

          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              フォトギャラリーを見る
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            モンゴルの魅力を発見しませんか？
          </h2>
          <p className="text-xl mb-8">
            忘れられない旅の思い出を作るお手伝いをさせていただきます
          </p>
          <div className="space-x-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-green-800 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              今すぐお問い合わせ
            </Link>
            <Link
              href="/tours"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              ツアー詳細
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
