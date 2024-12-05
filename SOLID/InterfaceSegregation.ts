export interface Printer {
  print(document: Document): void;
}

export interface Scanner {
  scan(document: Document): void;
}

export interface FaxMachine {
  fax(document: Document): void;
}

export class SimplePrinter implements Printer {
  print(document: Document) {
    console.log("The machine is printing");
  }
}

export class MultiFunctionPrinter implements Printer, Scanner, FaxMachine {
  print(document: Document) {
    console.log("The machine is printing");
  }

  scan(document: Document) {
    console.log("The machine is scanning");
  }

  fax(document: Document) {
    console.log("The machine is sending a fax");
  }
}

export interface AdminUser {
  createPost(): void;

  commentPost(): void;

  sharePost(): void;
}

export interface Post {
  title: string;
  content: string;
}

export interface Comment {
  title: string;
  content: string;
}

interface PostCreator {
  createPost(post: Post): void;
}

interface CommentCreator {
  createComment(comment: Comment): void;
}

interface PostSharer {
  sharePost(post: Post): void;
}

class Admin implements PostCreator, CommentCreator, PostSharer {
  createPost(post: Post) {
    console.log("Admin is creating a post");
  }

  createComment(comment: Comment) {
    console.log("Admin is creating a comment");
  }

  sharePost(post: Post) {
    console.log("Admin is sharing a post");
  }
}

class RegularUser implements CommentCreator, CommentCreator {
  createComment(comment: Comment) {
    console.log("Regular user is creating a comment");
  }

  sharePost(post: Post) {
    console.log("Regular user is sharing a post");
  }
}
