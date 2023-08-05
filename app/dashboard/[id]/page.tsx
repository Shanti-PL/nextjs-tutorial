export default function Dynatic({params}: { params: {id: string}}) {
    return (
        <div>
            <h1>Hello dynamic {params.id}</h1>
        </div>
    )
}