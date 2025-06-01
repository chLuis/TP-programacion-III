import { useState, useEffect } from 'react'
import { FaRegCheckCircle } from 'react-icons/fa'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { MdReportGmailerrorred } from 'react-icons/md'

export type ToastParams = {
  icon?: React.ReactNode
  result?: 'success' | 'error' | 'info'
  title: string
  text?: string
}

export function useToast() {
  const [toast, setToast] = useState<ToastParams | null>(null)

  const showToast = ({ icon, result, title, text }: ToastParams) => {
    setToast({ icon, result, title, text })
  }

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000)
      return () => clearTimeout(timer)
    }
  }, [toast])

  const ToastComponent = toast ? (
    <div
      className={`fixed animate-toaster top-4 right-4 z-50 min-w-[280px] max-w-[320px] rounded-md border px-4 py-3 shadow-lg bg-white text-black dark:bg-black dark:text-white
        ${
          toast.result === 'success'
            ? 'border-green-500'
            : toast.result === 'error'
            ? 'border-red-500'
            : 'border-blue-500'
        }`}
    >
      <div className="grid grid-cols-7 w-full gap-2">
        <div className="my-auto col-span-1">
          {toast.result === 'success' && <FaRegCheckCircle className="text-green-500 text-2xl" />}
          {toast.result === 'error' && <MdReportGmailerrorred className="text-red-500 text-3xl" />}
          {toast.result === 'info' && <IoMdInformationCircleOutline className="text-blue-500 text-3xl" />}
        </div>
        <div className='col-span-6'>
          <div className="font-semibold">{toast.title}</div>
          <div className="text-sm text-gray-500 truncate max-w-full">{toast.text} </div>
        </div>
      </div>
    </div>
  ) : null

  return { showToast, ToastComponent }
}
