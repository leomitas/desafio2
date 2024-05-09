'use client'

import { useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
import { imgsCarousel } from '../database'
import Modal from './Modal'

export default function CarouselImgs() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [linkImg, setLinkImg] = useState('')

  const openModal = (img: string) => {
    setLinkImg(img)
    setIsModalOpen(true)
  }

  const closeModal = (): void => {
    setIsModalOpen(false)
  }
  return (
    <main className='bg-blue-900 h-screen'>
      <Carousel className='max-w-3xl mx-auto pt-8 px-8 xl:px-0 flex flex-col gap-6 p-16'>
        <CarouselContent>
          {imgsCarousel.map((img) => {
            return (
              <CarouselItem
                className='flex items-center justify-center  hover:scale-110'
                key={img.id}
              >
                <button className='w-max' onClick={() => openModal(img.link)}>
                  <img src={img.link} alt='' />
                </button>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <div className='w-full flex justify-center gap-8'>
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
      <Modal isOpen={isModalOpen}>
        <div className='text-center w-4/6'>
          <img src={linkImg} alt='' />
          <button
            onClick={closeModal}
            className='mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded'
          >
            Fechar
          </button>
        </div>
      </Modal>
    </main>
  )
}
