'use client'

import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'

export default function ContactForm() {
	const router = useRouter()
	const [submitting, setSubmitting] = useState(false)
	const [errorMessage, setErrorMessage] = useState<string | null>(null)

	const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const form = event.currentTarget
		const formData = new FormData(form)

		setErrorMessage(null)
		setSubmitting(true)

		// Derive service display text and create a richer email subject and overview
		const serviceSelect = form.querySelector('#service') as HTMLSelectElement | null
		const serviceValue = serviceSelect?.value ?? ''
		const serviceText = serviceSelect?.options[serviceSelect.selectedIndex]?.text ?? ''

		const name = (form.querySelector('#name') as HTMLInputElement | null)?.value ?? ''
		const email = (form.querySelector('#email') as HTMLInputElement | null)?.value ?? ''
		const phone = (form.querySelector('#phone') as HTMLInputElement | null)?.value ?? ''
		const message = (form.querySelector('#message') as HTMLTextAreaElement | null)?.value ?? ''

		const subject = serviceText
			? `お問い合わせ (${serviceText}) - Chuluut 合同会社`
			: 'お問い合わせ - Chuluut 合同会社'

		const overviewLines = [
			'【送信概要 / Submission Overview / Илгээлийн тойм】',
			`お名前 / Name / Нэр: ${name}`,
			`メール / Email / И-мэйл: ${email}`,
			`電話 / Phone / Утас: ${phone}`,
			`サービス / Service / Үйлчилгээ: ${serviceText || serviceValue}`,
			'—',
			'【会社情報 / Company / Компанийн мэдээлэл】',
			'Chuluut 合同会社',
			'電話: 04-2306-1844',
			'住所: 〒189-0026 東京都東村山市多摩湖4-2-5 高野ハイツ201',
			'メール: sh.adyasvren@gmail.com',
		]
		const submissionOverview = overviewLines.join('\n')

		// Ensure fields exist for Netlify email
		formData.set('subject', subject)
		if (serviceText) formData.set('service_label', serviceText)
		formData.set('submission_overview', submissionOverview)

		try {
			const params = new URLSearchParams()
			formData.forEach((value, key) => {
				params.append(key, typeof value === 'string' ? value : value.name)
			})

			const res = await fetch('/netlify-form-shadow.html', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: params.toString(),
			})

			if (!res.ok) {
				throw new Error(`Request failed with status ${res.status}`)
			}

			router.push('/form-thanks.html')
		} catch (error) {
			setErrorMessage(
				'送信に失敗しました。しばらくしてから再度お試しください。/ Failed to submit. Please try again later. / Илгээж чадсангүй. Дараа дахин оролдоно уу.'
			)
		} finally {
			setSubmitting(false)
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
			<input type="hidden" name="subject" value="お問い合わせ: Chuluut 合同会社 Web フォーム" />
			<input type="hidden" name="service_label" value="" />
			<input type="hidden" name="submission_overview" value="" />
			<input type="hidden" name="company_name" value="Chuluut 合同会社" />
			<input type="hidden" name="company_phone" value="04-2306-1844" />
			<input type="hidden" name="company_email" value="sh.adyasvren@gmail.com" />
			<input type="hidden" name="company_address" value="〒189-0026 東京都東村山市多摩湖4-2-5 高野ハイツ201" />

			{errorMessage && (
				<div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
					{errorMessage}
				</div>
			)}

			<p className="hidden">
				<label>
					Don’t fill this out if you’re human: <input name="bot-field" />
				</label>
			</p>
			<div>
				<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
					お名前 / Name / Нэр *
				</label>
				<input
					type="text"
					id="name"
					name="name"
					required
					className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
					placeholder="山田太郎 / Taro Yamada / Таро Ямада"
				/>
			</div>

			<div>
				<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
					メールアドレス / Email / И-мэйл *
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
					電話番号 / Phone / Утас
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
					ご希望のサービス / Desired service / Үйлчилгээний төрөл
				</label>
				<select
					id="service"
					name="service"
					className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
				>
					<option value="">選択してください / Select / Сонгоно уу</option>
					<option value="gobi-tour/ゴビ砂漠探険ツアー/Говийн аялал">ゴビ砂漠探険ツアー / Gobi Desert Expedition / Говийн аялал</option>
					<option value="nomad-tour/遊牧民体験ツアー/Нүүдэлчдийн аялал">遊牧民体験ツアー / Nomad Experience / Нүүдэлчдийн аялал</option>
					<option value="horse-tour/乗馬体験ツアー/Морь унах аялал">乗馬体験ツアー / Horseback Riding / Морь унах аялал</option>
					<option value="culture-tour/文化体験ツアー/Соёлын аялал">文化体験ツアー / Cultural Experience / Соёлын аялал</option>
					<option value="garden-design/庭園設計・施工/Цэцэрлэгийн зураг төсөл ба барилгa">庭園設計・施工 / Garden Design & Build / Цэцэрлэгийн зураг төсөл, барилга</option>
					<option value="landscaping/造園工事/Ландшафтын ажил">造園工事 / Landscaping / Ландшафтын ажил</option>
					<option value="maintenance/植木の手入れ/Мод арчилгаа">植木の手入れ / Tree Care / Мод арчилгаа</option>
					<option value="other/その他/Бусад">その他 / Other / Бусад</option>
				</select>
			</div>

			<div>
				<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
					お問い合わせ内容 / Message / Зурвас *
				</label>
				<textarea
					id="message"
					name="message"
					rows={6}
					required
					className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
					placeholder="ご質問やご要望をご記入ください / Please describe your inquiry / Асуулт, хүсэлтээ бичнэ үү"
				/>
			</div>

			<div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
				<p>会社情報 / Company / Компанийн мэдээлэл</p>
				<ul className="list-disc pl-5">
					<li>Chuluut 合同会社</li>
					<li>電話: 04-2306-1844</li>
					<li>住所: 〒189-0026 東京都東村山市多摩湖4-2-5 高野ハイツ201</li>
					<li>メール: sh.adyasvren@gmail.com</li>
				</ul>
			</div>

			<button
				type="submit"
				disabled={submitting}
				className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors"
			>
				{submitting ? '送信中… / Sending… / Илгээж байна…' : '送信する / Send / Илгээх'}
			</button>
		</form>
	)
} 