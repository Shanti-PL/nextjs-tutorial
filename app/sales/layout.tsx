import { ReactNode } from "react";

export default function Layout({children} : {children: ReactNode}) {
    return (
        <div>
            <h1 className="bg-green-500">Hello from Sales Layout</h1>
            {children}
        </div>
    )
}