'use client'

import SearchInput from '@/components/common/search-input'
import MyAdvertisement from './_components/my-advertisement'
import { Advertisement } from '@/types/advertisement'
import { useSelectedTab } from './_hooks/useSelectedTab'
import { useMockFetch } from '@/hooks/useMockFetch'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { advertisements } from '@/data/advertisements'

export default function MyAds() {
  const { data: ads, isLoading } = useMockFetch<Advertisement[]>(advertisements)
  const { selectedTab, selectAll, selectActive, selectPaused } =
    useSelectedTab()

  if (isLoading || !ads) {
    return (
      <div className="h-screen px-12 py-10">
        <SearchInput />
        <div className="mt-10 flex flex-col text-strong">
          <div className="flex items-center justify-between">
            <div>
              <Skeleton className="h-6 w-48" />
              <Skeleton className="mt-2 h-5 w-56" />
            </div>
            <Skeleton className="h-10 w-32" />
          </div>
          <div className="border-border-primary mt-4 border-b">
            <div className="h-10" />
          </div>

          <ul>
            {Array.from({ length: 10 }).map((_, index) => (
              <MyAdvertisement key={index} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  if (ads.length === 0) {
    return (
      <div className="relative h-full w-full">
        <div className="absolute top-64 flex w-full flex-col items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <h1>Você ainda não possui anúncios</h1>
            <h2>Encontre pessoas e forme uma república.</h2>
          </div>

          <Button className="hover:bg-button-primaryHover h-12 bg-button-primary px-6 font-semibold">
            Criar anúncio
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen px-12 py-10">
      <SearchInput />
      <div className="mt-10 flex flex-col text-strong">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-bold">Meus anúncios</h2>
            <span>10 resultados encontrados</span>
          </div>
          <Button className="bg-button-primary hover:bg-button-primary-hover">
            Criar anúncio
          </Button>
        </div>

        <div className="border-border-primary mt-4 border-b">
          <button
            onClick={selectAll}
            data-success={selectedTab === 'all'}
            className="h-10 w-32 border-tabActive text-gray-300 data-[success=true]:border-b-2 data-[success=true]:text-strong"
          >
            Todos
          </button>
          <button
            onClick={selectActive}
            data-success={selectedTab === 'active'}
            className="h-10 w-32 border-tabActive text-gray-300 data-[success=true]:border-b-2 data-[success=true]:text-strong"
          >
            Ativo
          </button>
          <button
            onClick={selectPaused}
            data-success={selectedTab === 'paused'}
            className="h-10 w-32 border-button-primary text-gray-300 data-[success=true]:border-b-2 data-[success=true]:text-strong"
          >
            Pausado
          </button>
        </div>

        <ul>
          {selectedTab === 'all' &&
            ads.map((ad) => (
              <li key={ad.id}>
                <MyAdvertisement advertisement={ad} />

                {/* Divisor */}
                <div className="h-[1px] w-full bg-divisor" />
              </li>
            ))}

          {selectedTab === 'active' &&
            ads
              .filter((ad) => ad.isActive)
              .map((ad) => (
                <li key={ad.id}>
                  <MyAdvertisement advertisement={ad} />

                  {/* Divisor */}
                  <div className="h-[1px] w-full bg-divisor" />
                </li>
              ))}

          {selectedTab === 'paused' &&
            ads
              .filter((ad) => !ad.isActive)
              .map((ad) => (
                <li key={ad.id}>
                  <MyAdvertisement advertisement={ad} />

                  {/* Divisor */}
                  <div className="h-[1px] w-full bg-divisor" />
                </li>
              ))}
        </ul>
      </div>
    </div>
  )
}
