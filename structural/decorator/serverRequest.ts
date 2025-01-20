export interface ServerRequest {
  handle(request: any): void;
}

export class BaseServer implements ServerRequest {
  handle(request: any): void {
    console.log(`Handling Request: ${JSON.stringify(request)}`);
  }
}

export abstract class ServerRequestDecorator implements ServerRequest {
  constructor(protected serverRequest: ServerRequest) {}

  abstract handle(request: any): void;
}

export class LogginMiddleware extends ServerRequestDecorator {
  constructor(serverRequest: ServerRequest) {
    super(serverRequest);
  }

  handle(request: any): void {
    console.log(`Handle Logging request: ${JSON.stringify(request)}`);
    this.serverRequest.handle(request);
  }
}

export class AuthMiddleware extends ServerRequestDecorator {
  constructor(serverRequest: ServerRequest) {
    super(serverRequest);
  }

  handle(request: any): void {
    if (request.isAuthenticated) {
      console.log("Request is authenticated");
      this.serverRequest.handle(request);
    } else {
      console.log("Unauthorised access");
    }
  }
}

/// Client Code

const request = {
  isAuthenticated: false,
  boddy: "Hellor world",
};

let server = new BaseServer();
server = new LogginMiddleware(server);
server = new AuthMiddleware(server);
server.handle(request);
