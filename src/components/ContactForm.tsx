'use client'

import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

export default function ContactForm() {
	const router = useRouter()

	const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const form = event.currentTarget
		const formData = new FormData(form)

		try {
			await fetch('/netlify-form-shadow.html', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams(formData as any).toString(),
			})
			router.push('/form-thanks.html')
		} catch (error) {
			// As a fallback, navigate to the thank you page even if the POST fails
			router.push('/form-thanks.html')
		}
	}, [router])

	return (
		<form
			name="contacts"
			method="POST"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			action="/form-thanks.html"
			className="space-y-6"
			{...{ netlify: 'true' }}
			onSubmit={handleSubmit}
		>
			<input type="hidden" name="form-name" value="contacts" />
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
	)
} 