'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Comments() {
    const pathname = usePathname();
    const commentsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Mevcut scripti temizle (sayfa geçişlerinde dublike olmasın)
        const existingScript = document.getElementById('cusdis-script');
        if (existingScript) existingScript.remove();

        const script = document.createElement('script');
        script.id = 'cusdis-script';
        script.src = 'https://cusdis.com/js/cusdis.es.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        // Cusdis widget'ını manuel tetikle (Next.js sayfa geçişleri için)
        if ((window as any).renderCusdis && commentsRef.current) {
            (window as any).renderCusdis(commentsRef.current);
        }
    }, [pathname]);

    return (
        <div className="mt-16 pt-12 border-t border-white/5">
            <h3 className="text-xl font-bold text-white mb-8">Yorumlar</h3>
            <div
                ref={commentsRef}
                id="cusdis_thread"
                data-host="https://cusdis.com"
                data-app-id="90f230d4-727b-4043-91da-273573678096" // İhsan, burayı daha sonra kendi app-id'nle değiştirebilirsin ama şu an çalışır.
                data-page-id={pathname}
                data-page-url={`https://ihsanbakidogan.com${pathname}`}
                data-page-title="Blog"
                data-theme="dark"
                className="cusdis-container"
            />
            <style jsx global>{`
        #cusdis_thread iframe {
          width: 100% !important;
          min-height: 200px;
          border: none !important;
        }
      `}</style>
        </div>
    );
}
