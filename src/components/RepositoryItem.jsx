export function RepositoryItem(props) {
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