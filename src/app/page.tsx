import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Phone from '@/components/Phone'
import { Check, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-slate-50 grainy-light'>
      <section>
        <MaxWidthWrapper className='pb-24 pt-3 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pb-52'>
          <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
            <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
              <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl'>
                Your Image on a{' '}
                <span className='bg-green-600 px-2 text-white'>Custom</span>{' '}
                Phone Case
              </h1>
              <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
                Capture your favorite memories with your own,{' '}
                <span className='font-semibold'>one-of-one</span> phone case.
                CaseGallery allows you to protect your memories, not just your
                phone case.
              </p>

              <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
                <li className='flex gap-1.5 items-center text-left'>
                  <Check className='h-5 w-5 shrink-0 text-green-600' />
                  High-quality, durable material
                </li>
                <li className='flex gap-1.5 items-center text-left'>
                  <Check className='h-5 w-5 shrink-0 text-green-600' />
                  5 year print guarantee
                </li>
                <li className='flex gap-1.5 items-center text-left'>
                  <Check className='h-5 w-5 shrink-0 text-green-600' />
                  Modern Android & iPhone models supported
                </li>
              </ul>

              <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
                <div className='flex -space-x-4'>
                  <Image
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/profile1.png'
                    alt='User profile 1'
                    width={40}
                    height={40}
                  />
                  <Image
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/profile-5.png'
                    alt='User profile 2'
                    width={40}
                    height={40}
                  />
                  <Image
                    className='inline-block h-10 w-10 object-cover rounded-full ring-2 ring-slate-100'
                    src='/users/profile-4.png'
                    alt='User profile 3'
                    width={40}
                    height={40}
                  />
                  <Image
                    className='inline-block h-10 w-10 object-cover rounded-full ring-2 ring-slate-100'
                    src='/users/profile-3.png'
                    alt='User profile 4'
                    width={40}
                    height={40}
                  />
                  <Image
                    className='inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100'
                    src='/users/profile-2.png'
                    alt='User profile 5'
                    width={40}
                    height={40}
                  />
                </div>

                <div className='flex flex-col justify-between items-center sm:items-start'>
                  <div className='flex gap-0.5'>
                    <Star className='h-4 w-4 text-green-600 fill-green-600' />
                    <Star className='h-4 w-4 text-green-600 fill-green-600' />
                    <Star className='h-4 w-4 text-green-600 fill-green-600' />
                    <Star className='h-4 w-4 text-green-600 fill-green-600' />
                    <Star className='h-4 w-4 text-green-600 fill-green-600' />
                  </div>

                  <p>
                    <span className='font-semibold'>12,750+</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit'>
            <div className='relative md:max-w-xl'>
              <Image
                src='/your-image.png'
                className='absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block'
                alt='Decorative image'
                width={160}
                height={160}
              />
              <Image
                src='/line.png'
                className='absolute w-20 -left-6 -bottom-6 select-none'
                alt='Decorative line'
                width={80}
                height={80}
              />
              <Phone className='w-64' imgSrc='/testimonials/1.jpg' />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
