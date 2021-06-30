import GetGithubProfile from "../../domain/usecase/GetGithubProfile";
import GithubGateway from "../../domain/gateway/GithubGateway";
import GithubProfileOutputData from "../../domain/usecase/data/GithubProfileOutputData";

export default class ProfileController {
    githubGateway: GithubGateway;

    constructor(githubGateway: GithubGateway) {
        this.githubGateway = githubGateway;
    }

    async getProfile(username: string): Promise<GithubProfileOutputData> {
        return new GetGithubProfile(this.githubGateway).execute(username)
    }
}