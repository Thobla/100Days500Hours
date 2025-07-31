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
//  { name: 'Hobbies', href: '/hobbies'},//, icon: UserGroupIcon },
//  { name: 'Ask Nils', href: '/ask_nils'}
];

const refToTitle : {[key: string] : string} = { '/' : 'Thorgal.no',
'/projects' : 'Projects',
'/hobbies' : 'Hobbies',
'/ask_nils' : 'Ask Nils',
'/projects/worldpeace' : 'World Peace',
'/projects/sandwitch' : 'Hammer Sand witch',
'/hobbies/sleep' : 'Sleep',
'/hobbies/usleep' : 'No Sleep',
'/ask_nils/faq' : 'Faq'}




const refToSubtitle : {[key: string]: string[]} = {
    '/' : [],
    'projects' : []
//    '/projects' : ['World Peace', 'Hammer Sand witch'],
//    '/hobbies' : ['Sleep', 'Unlimited Sleep', 'No Sleep'],
//    '/ask_nils' : ['Faq']
}

// Merge with refToSubtitle?
const subtitleToRef : {[key: string] : string} = {
    'World Peace' : '/projects/worldpeace',
    'Hammer Sand witch' : '/projects/sandwitch',
    'Sleep' : '/hobbies/sleep',
    'Unlimited Sleep' : '/hobbies/usleep',
    'No Sleep' : '/hobbies/nosleep',
    'Faq' : '/ask_nils/faq'
}

function getSubpaths(path: string): string[]{
    const paths = path.split('/');
    paths[0] = "/"
    for (let i : number = 1; i < paths.length; i++){
        paths[i] = i === 1 ? paths[0] + paths[1] : paths[i-1] + '/' + paths[i];
    }
    return paths
}


function SubLinks(props: {parentPath : string}) {
    const pathname = usePathname();
    const subDirs: string[] | undefined = refToSubtitle[props.parentPath];
    if (typeof subDirs === "undefined"){
        return(<></>)
    }
    return (
        <ul key={props.parentPath} className={clsx('text-center md:ml-[10%] md:text-left',
                                                   {'hidden' : getSubpaths(pathname).indexOf(props.parentPath) === -1})}
        >
        {subDirs.map((subTitle: string) => {
            const k: number = subDirs.indexOf(subTitle);
            return(
                <li key = {k}
                className={clsx(`hover:bg-gray-50 hover:text-black`, 
                                    {'bg-sky-200 text-blue-800': pathname === subtitleToRef[subTitle]},
                                   )}
                >
                    <Link
                    key = {subTitle}
                    href = {subtitleToRef[subTitle]}
                    >
                        <p>{subTitle}</p>
                    </Link>
                </li>
            )
            })}
        </ul>    );
}

export function NavLinks() {
    const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
            <div key={link.name} className='flex flex-col min-h-[48px] grow gap-2 bg-blue-600 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3'>
                <Link
                    href={link.href}
//                    className={clsx(`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-blue-600 p-3 text-sm font-medium hover:bg-gray-50 hover:text-black md:flex-none md:justify-start md:p-2 md:px-3`, 
//                                    {'bg-sky-200 text-blue-800': pathname === link.href,},
                    className={clsx(`hover:bg-gray-50 hover:text-black`, 
                                    {'bg-sky-200 text-blue-800': pathname === link.href,},
                    )}
                >
                    <p className="text-center md:text-left">{link.name}</p>
                </Link>
                <SubLinks parentPath={link.href}/>
            </div>
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
        className="mb-2 flex items-end justify-center bg-blue-600 p-8 md:justify-start"
      >
        <div className="w-32 text-white text-center md:w-40">
            <h1>{val}</h1>
        </div>
      </div>)
}


