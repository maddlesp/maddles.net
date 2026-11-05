import Project from './project';
import { Octokit } from 'octokit';

async function getGithubProjects(): string[] {
    const octo = new Octokit();
    
    const req = await octo.request('GET /users/maddlesp/repos', {
        username: "maddlesp"
    })
    if (req.status == 200)
        JSON.parse(req.data)
    return [];
}

export default function Projects() {
    const arr = [1, 2, 3, 4, 5 ,6 ,7];
    return (
        <div id="projects">
            {arr.map((_, idx) => {
                return (
                    <Project src={`${idx}`} key={idx}/>
                );
            })}
        </div>
    )
}