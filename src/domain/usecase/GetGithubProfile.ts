import GithubGateway from "../gateway/GithubGateway";
import GithubProfileOutputData from "./data/GithubProfileOutputData";

export default class GetGithubProfile {
    githubGateway: GithubGateway

    constructor(githubGateway: GithubGateway) {
        this.githubGateway = githubGateway;
    }

    async execute(username: string): Promise<GithubProfileOutputData> {
        const { name, bio } = await this.githubGateway.getProfile(username);
        return new GithubProfileOutputData(name, bio);
    }
}