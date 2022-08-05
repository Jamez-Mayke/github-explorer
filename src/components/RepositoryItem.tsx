interface RepositoryItemProps {
    repository: {
        name: string
        description: string
        html_url: string
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <strong>{props.repository.name ?? 'Repo sem nome.'}</strong>
            <p>{props.repository.description ?? 'Sem descrição no repo. :('}</p>
            <a href={props.repository.html_url} target="_blank">
                Acessar Repo
            </a>
        </li>
    )
}