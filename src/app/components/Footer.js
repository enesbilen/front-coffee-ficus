export default function Footer() {
    return (
        <div className="text-center py-8 text-sm text-[#777] mt-10 border-t border-[#eee] space-y-6">

            {/* Address */}
            <div>
                <div className="font-semibold mb-1 text-[#111]">ADRES</div>
                <div>Güvenevler, Alaçam Sk. 12-14 D:A</div>
                <div>06690 Çankaya/Ankara</div>
            </div>

            {/* Opening Hours */}
            <div>
                <div className="font-semibold mb-2 text-[#111]">ÇALIŞMA SAATLERİ</div>
                <div className="space-y-1 text-xs">
                    <div className="flex justify-between max-w-[200px] mx-auto"><span>Pazartesi</span><span>08:30–22:00</span></div>
                    <div className="flex justify-between max-w-[200px] mx-auto"><span>Salı</span><span>08:30–22:00</span></div>
                    <div className="flex justify-between max-w-[200px] mx-auto"><span>Çarşamba</span><span>08:30–22:00</span></div>
                    <div className="flex justify-between max-w-[200px] mx-auto"><span>Perşembe</span><span>08:30–22:00</span></div>
                    <div className="flex justify-between max-w-[200px] mx-auto"><span>Cuma</span><span>08:30–22:00</span></div>
                    <div className="flex justify-between max-w-[200px] mx-auto"><span>Cumartesi</span><span>12:00–21:00</span></div>
                    <div className="flex justify-between max-w-[200px] mx-auto"><span>Pazar</span><span>12:00–21:00</span></div>
                </div>
            </div>

            {/* Social */}
            <div>
                <div className="font-semibold mb-1 text-[#111]">INSTAGRAM</div>
                <a
                    href="https://instagram.com/ficusbotanicscoffee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#555] hover:text-[#a88955] transition-colors"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span>@ficusbotanicscoffee</span>
                </a>
            </div>

            <div className="text-[10px] text-[#999] pt-4">
                &copy; {new Date().getFullYear()} Ficus Botanics Coffee. All rights reserved.
            </div>
        </div>
    );
}
