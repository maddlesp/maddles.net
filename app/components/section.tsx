import { ReactNode } from "react";

export default function Section({ title, children }: { title: string, children: ReactNode | undefined }) {
    return (
        <div className="section">
            <h1>{title}</h1>
            {children}
        </div>
    )
}