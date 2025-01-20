import Image from "next/image";
import Link from "next/link";
import { DotterSeparator } from "./dotted-seperator";
import { Navigation } from "./navigation";
import { WorkspaceWitcher } from "./workspace-switcher";


export const Sidebar = () => {



    return (
        <aside className="h-full bg-neutral-100 p-4 w-full">

            <Link href="/">
                <Image src="/logo.svg" alt="logo" width={164} height={48} />
            </Link>

            
            <DotterSeparator className="my-4" />

                <WorkspaceWitcher />

            <DotterSeparator className="my-4" />
            
            <Navigation />

        </aside>
    );

};