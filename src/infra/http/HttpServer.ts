import express from 'express';
import GithubGateway from '../../domain/gateway/GithubGateway';
import GithubProfileController from '../../adapter/controller/GithubProfileController';

export default class HttpServer {

    static start(githubGateway: GithubGateway) {
        const app = express();

        app.use(express.json());

        app.get('/', (req, res) => {
            res.send('Hi there!');
        });

        app.get('/profile/:username', async (req, res) => {
            const { username } = req.params;
            const controller = new GithubProfileController(githubGateway);
            const githubProfile = await controller.getProfile(username);
            res.send(githubProfile);
        });

        app.listen(3000, () => {
            console.log("Server up!")
        });
    }
}