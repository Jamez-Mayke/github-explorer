
import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

interface Repository {
    name: string
    description: string
    html_url: string
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect( () => {
        fetch('https://api.github.com/users/Jamez-Mayke/repos')
        .then( response => response.json())
        .then( data => setRepositories(data))
    }, [])

    return (
        <>
            <section className="reposiroty-list">
                <h1>Lista de repositórios</h1>

                <ul>
                    {
                        repositories.map( repository => <RepositoryItem repository={repository} key={repository.name} />)
                    }
                </ul>
            </section>
        </>
    )
}