export default function Post({params}) {
    const {id} = params

    return (
        <div>
            <h1>Esto es un Post {id}</h1>
        </div>
    )
}
