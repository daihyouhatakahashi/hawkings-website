'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      // Formspreeに送信
      // FORMSPREE_FORM_IDは環境変数から取得（デプロイ時に設定）
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || 'YOUR_FORM_ID'
      
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          category: formData.category,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setShowMessage(true)
        setFormData({ name: '', email: '', category: '', message: '' })
        
        // Hide message after 5 seconds
        setTimeout(() => setShowMessage(false), 5000)
      } else {
        setErrorMessage('送信に失敗しました。もう一度お試しください。')
      }
    } catch (error) {
      setErrorMessage('送信に失敗しました。もう一度お試しください。')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
      <div className="mb-8">
        <label htmlFor="name" className="block text-xs uppercase tracking-wide text-hawkings-gray mb-3">
          お名前 *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          aria-required="true"
          aria-label="お名前（必須）"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-6 py-4 border border-hawkings-border bg-hawkings-bg focus:border-hawkings-charcoal focus:outline-none transition-hawkings"
        />
      </div>

      <div className="mb-8">
        <label htmlFor="email" className="block text-xs uppercase tracking-wide text-hawkings-gray mb-3">
          メールアドレス *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          aria-required="true"
          aria-label="メールアドレス（必須）"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-6 py-4 border border-hawkings-border bg-hawkings-bg focus:border-hawkings-charcoal focus:outline-none transition-hawkings"
        />
      </div>

      <div className="mb-8">
        <label htmlFor="category" className="block text-xs uppercase tracking-wide text-hawkings-gray mb-3">
          お問い合わせ種別 *
        </label>
        <select
          id="category"
          name="category"
          required
          aria-required="true"
          aria-label="お問い合わせ種別（必須）"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="w-full px-6 py-4 border border-hawkings-border bg-hawkings-bg focus:border-hawkings-charcoal focus:outline-none transition-hawkings"
        >
          <option value="">選択してください</option>
          <option value="beta">ベータ版事前登録</option>
          <option value="service">サービスについて</option>
          <option value="business">ビジネス・協業について</option>
          <option value="media">取材について</option>
          <option value="recruit">採用について</option>
          <option value="other">その他</option>
        </select>
      </div>

      <div className="mb-8">
        <label htmlFor="message" className="block text-xs uppercase tracking-wide text-hawkings-gray mb-3">
          お問い合わせ内容 *
        </label>
        <textarea
          id="message"
          name="message"
          required
          aria-required="true"
          aria-label="お問い合わせ内容（必須）"
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-6 py-4 border border-hawkings-border bg-hawkings-bg focus:border-hawkings-charcoal focus:outline-none transition-hawkings resize-none"
        />
      </div>

      {showMessage && (
        <div
          role="alert"
          aria-live="polite"
          className="mb-8 p-4 bg-green-50 text-green-800 border border-green-200 rounded"
        >
          お問い合わせを受け付けました。ご連絡ありがとうございます。
        </div>
      )}

      {errorMessage && (
        <div
          role="alert"
          aria-live="polite"
          className="mb-8 p-4 bg-red-50 text-red-800 border border-red-200 rounded"
        >
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mx-auto px-8 md:px-14 py-[1.125rem] bg-hawkings-black text-white text-[11px] font-medium uppercase tracking-extra-wide border border-hawkings-black hover:bg-white hover:text-hawkings-black transition-hawkings disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? '送信中...' : '送信する'}
      </button>
    </form>
  )
}
