import { ReactNode } from "react";

export default function Layout({children} : {children: ReactNode}) {
  return (
    <div>
      <h1 className="bg-blue-500">Hello from dashboard layout</h1>
      {children}
    </div>
  );
}
