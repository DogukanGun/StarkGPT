import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/Sheet";
import { PanelLeftIcon } from "lucide-react";
import { Suspense } from "react";

export default function LeftPanel() {
    return (
        <Sheet>
            <SheetTrigger>
                <div className="flex flex-row items-center gap-2">
                    <PanelLeftIcon className="w-5 h-5 mt-1" />
                    <span className="mt-1 sm:hidden flex">Menu</span>
                </div>
            </SheetTrigger>
            <SheetContent side="left" className="min-w-[390px] px-0">
                <div>
                    <h3 className="px-7 text-xl font-semibold">Conversations</h3>
                    <Suspense
                        fallback={
                            <p>Loading...</p>
                        }
                    >
                    </Suspense>
                </div>
            </SheetContent>
        </Sheet>
    );
}