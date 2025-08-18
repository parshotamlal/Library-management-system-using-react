function Modal({ open, title, children, onClose, onConfirm, confirmText='Confirm' }){
  if(!open) return null
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50">
      <div className="w-full max-w-md rounded-2xl bg-white dark:bg-gray-900 p-5 shadow-xl">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-lg">{title}</h3>
          <button onClick={onClose} className="text-gray-500">✕</button>
        </div>
        <div className="text-sm">{children}</div>
        <div className="mt-5 flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-1.5 rounded border">Cancel</button>
          <button onClick={onConfirm} className="px-3 py-1.5 rounded bg-red-600 text-white">{confirmText}</button>
        </div>
      </div>
    </div>
  )
}
export {Modal}