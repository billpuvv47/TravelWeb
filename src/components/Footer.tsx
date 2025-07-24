import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-bold mb-4">Chuluut 合同会社</h3>
            <p className="text-gray-300 text-sm mb-4">
              モンゴル旅行と東京エリアの造園サービスを提供しています。
              日本のお客様にモンゴルの美しい自然と遊牧民文化をお届けします。
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-bold mb-4">お問い合わせ</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center justify-center md:justify-start">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:sh.adyasvren@gmail.com" className="hover:text-white">
                  sh.adyasvren@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:0423061844" className="hover:text-white">
                  04-2306-1844
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-4">サービス</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div>モンゴル旅行ツアー</div>
              <div>東京エリア造園サービス</div>
              <div>遊牧民体験ツアー</div>
              <div>ゴビ砂漠ツアー</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Chuluut 合同会社. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
