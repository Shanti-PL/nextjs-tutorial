import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Next tutorial Dashboard title',
    description: 'tutorial Dashboard description',
}

export default function Dashboard() {

    return (
        <div>
            <h1>Hello from Dashboard</h1>
        </div>
    )
}