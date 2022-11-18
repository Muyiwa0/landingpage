import { useState } from 'react'

export function NavLinks() {
  return [
    ['Features', '#features'],
    ['Reviews', '#reviews'],
    ['Pricing', '#pricing'],
    ['FAQs', '#faqs'],
  ].map(([label, href], index) => (
    <a
      key={label}
      href={href}
      className="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-gray-700 transition-colors delay-150 hover:bg-slate-200 hover:text-gray-900 hover:delay-[0ms]"
    >
      {label}
    </a>
  ))
}
