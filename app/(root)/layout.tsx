import { ReactNode } from 'react'
import Link from "next/link";

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="root-layout">
            <nav>
                <Link href="/" className="flex items-center gap-2">
                <Image src="/logo.svg" alt="Logo" width={38} height={38} />


                </Link>
            </nav>
        </div>
    )
}
export default RootLayout