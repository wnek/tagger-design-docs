import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
    return (
        <div className='logo'>
            <Link href={'../'}>
                <Image src={'/img/tagger-logo-dark.svg'} width={100} height={26} alt="Tagger Logo" />
            </Link>
        </div>
    )
}
