import GithubGatewayHttp from "./adapter/gateway/GithubGatewayHttp";
import HttpServer from "./infra/http/HttpServer";

const githubGatewayHttp = new GithubGatewayHttp();
HttpServer.start(githubGatewayHttp);