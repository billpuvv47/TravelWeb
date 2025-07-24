import Link from "next/link";

export default function Thanks() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">お問い合わせありがとうございます！</h1>
        <p className="text-lg">内容を受け付けました。<br />24時間以内にご連絡いたします。</p>
        <Link href="/" className="mt-6 inline-block text-green-600 hover:underline">ホームに戻る</Link>
      </div>
    </div>
  );
} 