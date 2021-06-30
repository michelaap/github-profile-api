import GithubProfile from "../entity/GithubProfile";

export default interface GithubGateway {
    getProfile(username: string): Promise<GithubProfile>;
}