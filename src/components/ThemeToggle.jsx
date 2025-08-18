import { useEffect, useState } from 'react'

function ThemeToggle(){
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')
  useEffect(() => {
    const root = window.document.documentElement
    if(dark){ root.classList.add('dark'); localStorage.setItem('theme','dark') }
    else { root.classList.remove('dark'); localStorage.setItem('theme','light') }
  }, [dark])
  return (
    <button onClick={()=>setDark(d=>!d)} className="rounded-full border border-gray-300 dark:border-gray-700 px-3 py-1 text-sm">
      {dark ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}
export {ThemeToggle}