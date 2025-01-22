import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          className="dark:invert"
          src="/logo.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-2xl font-medium">ระแนงบังตา – หน้านี้ยังไม่พร้อมใช้งาน</p>
          <p className="text-base">หน้านี้สำหรับนักพัฒนา หากคุณสนใจติดต่อ กรุณาไปที่เว็บไซต์หลัก</p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://xn--72ca6bng5c5ell7l.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ไปหน้าเว็บไซต์
          </a>          
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a>2025 – Iconroof State Engine Server</a>
        <div className="flex gap-4">        
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://xn--72ca6bng5c5ell7l.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          ไปหน้าเว็บไซต์ ระแนงบังตา
        </a>
        </div>
      </footer>
    </div>
  );
}
