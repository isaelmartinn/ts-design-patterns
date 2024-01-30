export interface MailTemplate {
  generate(): string;
}

export class WelcomeMailTemplate implements MailTemplate {
  public generate(): string {
    return "Welcome aboard! Thanks for signin up!";
  }
}

export class NewsLetterMailTemplate implements MailTemplate {
  public generate(): string {
    return "Please enjoy our newsletter!";
  }
}

export abstract class Mailer {
  public abstract generateMailTemplate(): MailTemplate;

  public sendMail(): string {
    const mailTemplate = this.generateMailTemplate();

    return `Sending the followin mail: ${mailTemplate.generate()}`;
  }
}

export class WelcomeMailGenerator extends Mailer {
  public generateMailTemplate(): MailTemplate {
    return new WelcomeMailTemplate();
  }
}

export class NewsLetterMailGenerator extends Mailer {
  public generateMailTemplate(): MailTemplate {
    return new NewsLetterMailTemplate();
  }
}

export function clientCode(mailer: Mailer) {
  console.log(mailer.sendMail());
}

clientCode(new WelcomeMailGenerator());
console.log("---");
clientCode(new NewsLetterMailGenerator());
