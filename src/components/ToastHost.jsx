import { useSelector, useDispatch } from 'react-redux'
import { hideToast } from '../redux/uiSlice'

export default function ToastHost() {
  const toast = useSelector(s => s.ui.toast)
  const dispatch = useDispatch()
  if (!toast) return null

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="rounded-xl bg-white border border-gray-200 text-gray-900 px-4 py-2 shadow-lg">
        {toast}
      </div>
      <button
        onClick={() => dispatch(hideToast())}
        className="block mx-auto mt-2 text-xs text-gray-600 hover:text-gray-900 transition"
      >
        dismiss
      </button>
    </div>
  )
}
