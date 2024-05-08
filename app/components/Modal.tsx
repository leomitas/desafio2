import { ReactNode } from 'react'

interface ModalProps {
  isOpen: boolean
  children: ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null
  return (
    <div className='fixed z-10 inset-0 overflow-y-auto'>
      <div className='flex items-center justify-center min-h-screen'>
        <div className='fixed inset-0 transition-opacity' aria-hidden='true'>
          <div className='absolute inset-0 backdrop-filter backdrop-blur-sm'></div>
        </div>
        <div className='z-20 flex justify-center'>{children}</div>
      </div>
    </div>
  )
}

export default Modal
