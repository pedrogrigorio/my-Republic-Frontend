import persona from '@/assets/img/persona.png'
import Image from 'next/image'

import { SignOut } from '@phosphor-icons/react/dist/ssr'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface UserSectionProps {
  sidebarIsOpen: boolean
}

export default function UserSection({ sidebarIsOpen }: UserSectionProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 hover:bg-gray-50">
          <Image
            src={persona}
            width={32}
            height={32}
            className="h-8 w-8 rounded-full border-[1px] border-gray-300"
            alt="Profile image"
          />
          <h3
            className={cn(
              'whitespace-nowrap text-sm font-semibold text-gray-800 opacity-100 transition-opacity duration-200',
              !sidebarIsOpen && 'pointer-events-none opacity-0',
            )}
          >
            John Doe
          </h3>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side={sidebarIsOpen ? 'top' : 'right'}
        className="max-h-[--radix-dropdown-menu-content-available-height] w-[--radix-dropdown-menu-trigger-width]"
      >
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <div className="flex gap-3 text-gray-800">
              <SignOut size={24} />
              <span>Sair</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
