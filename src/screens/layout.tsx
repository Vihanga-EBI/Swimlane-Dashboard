import Header from "@/components/Header"
import Appbar from "@/components/Appbar"
import SwimlaneHeader from "@/components/SwimlaneHeader"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            <Appbar />
            <div className="flex-1 flex flex-col lg:ml-0">
                <Header />
                <SwimlaneHeader/>
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    )
}