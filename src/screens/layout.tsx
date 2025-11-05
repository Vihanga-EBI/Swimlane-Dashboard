import Header from "@/components/Header"
import Appbar from "@/components/Appbar"
import SwimlaneHeader from "@/components/SwimlaneHeader"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Appbar />
            <div className="lg:ml-64 flex flex-col min-h-screen">
                <div className="sticky top-0 z-30 bg-white">
                    <Header />
                    <SwimlaneHeader />
                </div>

                {/* Scrollable Main Content */}
                <main className="flex-1 overflow-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}