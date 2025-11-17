import { navs } from '@/datas/nav-admin-data';
import Link from 'next/link';

export function NavAdmin() {
  return (
    <>
      <div className="wrap-nav-admin w-fit pt-5 pb-5 pl-8 pr-8 border-r-2 border-r-[#3932325a] bg-[#fff] rounded-[10px]">
        <span className="text-center block w-full mb-10 text-2xl" >Admin</span>
        <ul>
          {navs.map((nav, index) => (
            <li key={index} className="flex mb-6">
              {nav.icon}
              <Link href={nav.url}>{nav.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
