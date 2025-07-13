'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/'},//, icon: HomeIcon },
  {
    name: 'Projects',
    href: '/projects',
    //icon: DocumentDuplicateIcon,
  },
  { name: 'Hobbies', href: '/hobbies'},//, icon: UserGroupIcon },
  { name: 'Ask Nils', href: '/ask_nils'}
];

const refToTitle : {[key: string] : string} = { '/' : 'Thorgal.no',
'/projects' : 'Projects',
'/hobbies' : 'Hobbies',
'/ask_nils' : 'Ask Nils'}



export function NavLinks() {
    const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        //const LinkIcon = link.icon;
        //<LinkIcon className="w-6" />
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-blue-600 p-3 text-sm font-medium hover:bg-gray-50 hover:text-black md:flex-none md:justify-start md:p-2 md:px-3`, 
                            {'bg-sky-200 text-blue-800': pathname === link.href,},
            )}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

export function NavTitle() {
    const pathname = usePathname();
    const val = refToTitle[pathname];
      return(
        <div
        className="mb-2 flex items-end justify-start rounded-md bg-blue-600 p-8"
      >
        <div className="w-32 text-white text-center md:w-40">
            <h1>{val}</h1>
        </div>
      </div>)
}


