import {NavTitle, NavLinks } from '@/app/ui/navlinks';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-blue-400">
        <NavTitle/>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow md:block"></div>
      </div>
    </div>
  );
}
