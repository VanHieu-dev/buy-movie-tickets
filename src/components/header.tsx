import { CircleUser } from 'lucide-react';
import Link from 'next/link';
export default function Header() {
  return (
    <>
      <header className="flex justify-between text-[20px] p-5">
        <div className="logo ml-5">
          <span>Movie Tickets</span>
        </div>
        <div className="nav">
          <ul className="flex gap-4">
            <li>
              <Link href="/movie-showing">Phim Đang Chiếu</Link>
            </li>
            <li>
              <Link href="/movie-coming-soon">Phim Sắp Chiếu</Link>
            </li>
            <li>
              <Link href="/my-tickets">Vé Của Tôi</Link>
            </li>
          </ul>
        </div>
        <div className="account flex gap-2.5 mr-8">
          <Link href="/sign-in" className="underline">
            Đăng Nhập/Đăng Kí
          </Link>
          <CircleUser />
        </div>
      </header>
    </>
  );
}
