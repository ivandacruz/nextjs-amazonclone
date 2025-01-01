import {APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './menu'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-react'
import data from '@/lib/data' 
import Search from './search'


export default function Header(){
    return(
        <header className='bg-black text-white'>
            <div className='px-2'>
                <div className='flex items-center justify-between'>
                    <div className='flex item-center'>
                        <Link 
                            href='/'
                            className='flex items-center header-button font-extrabold text-2xl m-1'
                        ></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
