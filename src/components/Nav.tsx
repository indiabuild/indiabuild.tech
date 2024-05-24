import { useLocation } from "@solidjs/router";
import { A } from "@solidjs/router";
import User from "./User";

export default function Nav() {
  const location = useLocation();

  const active = (path: string) =>
    path == location.pathname
      ? "border-black"
      : "border-transparent hover:border-gray-300";

  return (
    <nav class="border-b px-2 py-2">
      <div class="flex items-center justify-between mx-auto container">
        {/* 
            Branding: Logo and Icon on the Left Side of Navigation
          */}
        <A href="/" class="flex items-center gap-2">
          <img
            src="/foi_icon.svg"
            alt="Indian Flag"
            class="w-8 h-8 md:w-10 md:h-10"
          />
          <p class="text-md md:text-xl font-bold tracking-wide">IndiaBuild</p>
          <span class="text-xs text-blue-700 bg-blue-200 border rounded-xl border-blue-400 px-1 py-0 font-semibold">
            beta
          </span>
        </A>

        {/* 
            Navigations for big Screens: Different pages
            
            Hidden on small screen
          */}
        <ul class="flex items-center hidden md:flex gap-8">
          <li class={`border-b-2 ${active("/")}`}>
            <A href="/">Home</A>
          </li>

          <li class={`border-b-2 ${active("/new")}`}>
            <A href="/new">New</A>
          </li>

          <li class={`border-b-2 ${active("/past")}`}>
            <A href="/past">Past</A>
          </li>

          <li class={`border-b-2 ${active("/Ask")}`}>
            <A href="/Ask">Ask</A>
          </li>
          {/* <li class={`border-b-2 ${Active("/comments")}`}>
            <A href="/comments">Comments</A>
          </li> */}
          <li class={`border-b-2 ${active("/submit")}`}>
            <A href="/submit">Submit</A>
          </li>
        </ul>

        {/* 
            Navigations for small screens: Different pages
            
            Hidden on big screen
          */}
        <ul class="flex items-center fixed bottom-0 border-t justify-Around w-full p-2 container md:hidden">
          <li>
            <A href="/">
              <img src="/home.svg" class="w-6" />
            </A>
          </li>

          <li>
            <A href="/new">
              <img src="/new.svg" class="w-6" />
            </A>
          </li>

          <li>
            <A href="/past">
              <img src="/past.svg" class="w-6" />
            </A>
          </li>

          <li>
            <A href="/Ask">
              <img src="/Ask.svg" class="w-6" />
            </A>
          </li>

          <li>
            <A href="/submit">
              <img src="/submit.svg" class="w-6" />
            </A>
          </li>
        </ul>

        {/* 
            User: Login, Logout and Profile
          */}
        <User />
      </div>
    </nav>
  );
}
