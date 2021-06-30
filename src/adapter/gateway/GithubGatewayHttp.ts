import axios from 'axios'
import GithubProfile from '../../domain/entity/GithubProfile';
import GithubGateway from "../../domain/gateway/GithubGateway";

export default class GithubGatewayHttp implements GithubGateway {
    async getProfile(username: string): Promise<GithubProfile> {
        const { data } = await axios.get(`https://api.github.com/users/${username}`);
        const { name, bio } = data;
        return new GithubProfile(name, bio);
    }
}