import Image from 'next/image'
import { priceToCurrency } from '@/utils/priceToCurrency'
import { Advertisement } from '@/types/advertisement'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import {
  Bed,
  CaretLeft,
  CaretRight,
  GenderFemale,
  GenderMale,
  Heart,
  MapPin,
  Person,
  Toilet,
} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import HouseTag from './house-tag'

interface AdvertisementCardProps {
  ad: Advertisement
}

export default function AdvertisementCard({ ad }: AdvertisementCardProps) {
  return (
    <Link href={`/student-housing/${ad.id}`}>
      <div className="group flex flex-col rounded-xl bg-white shadow-custom">
        <div className="relative">
          <Image
            src={ad.img_url}
            alt="advertisement_image"
            width={692}
            height={372}
            className="h-full w-full rounded-t-xl"
          />
          <button className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black bg-opacity-75 opacity-0 transition duration-300 group-hover:opacity-100 hover:bg-gray-800">
            <CaretLeft size={24} className="text-white" />
          </button>
          <button className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black bg-opacity-75 opacity-0 transition duration-200 group-hover:opacity-100 hover:bg-gray-800">
            <CaretRight size={24} className="text-white" />
          </button>
          <button className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-black bg-opacity-75 opacity-0 transition duration-300 group-hover:opacity-100 hover:bg-gray-800">
            <Heart
              size={24}
              className={`${ad.isFavorite ? 'text-red-500' : 'text-white'}`}
              weight={`${ad.isFavorite ? 'fill' : 'regular'}`}
            />
          </button>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <h3 className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-lg">
                    {ad.title}
                  </h3>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{ad.title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <span className="font-semibold text-currency">
              {priceToCurrency(ad.price)}
            </span>
          </div>

          <div className="mt-1 flex items-center gap-1 text-sm">
            <MapPin weight="fill" size={20} />
            <span>{ad.locale}</span>
          </div>

          <div className="mt-6 flex justify-between">
            <HouseTag text="Misto">
              <GenderMale size={16} />
              <GenderFemale size={16} />
            </HouseTag>

            <div className="flex gap-2">
              <HouseTag text="1/3">
                <Person size={16} />
              </HouseTag>

              <HouseTag text="1/3">
                <Bed size={16} />
              </HouseTag>

              <HouseTag text="1/3">
                <Toilet size={16} />
              </HouseTag>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
