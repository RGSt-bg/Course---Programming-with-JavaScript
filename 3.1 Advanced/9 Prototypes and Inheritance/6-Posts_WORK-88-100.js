function posts() {

    class Post {
        constructor(postTitle, postContent) {
        this.postTitle = postTitle;
        this.postContent = postContent;
        }
    
        toString() {
        return `Post: ${this.postTitle}\nContent: ${this.postContent}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(postTitle, postContent, likes, dislikes) {
            super(postTitle, postContent);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comment = [];
        }

        addComment(comment) {
            this.comment.push(comment);
        }

        toString() {
            let outputStr = `Post: ${this.postTitle}\nContent: ${this.postContent}\nRating: ${this.likes - this.dislikes}`;
            
            if (this.comment.length > 0) {
                outputStr += "\nComments:\n";
                outputStr += this.comment.map(comment => ` * ${comment}`).join("\n");
            }
            
            return outputStr;
        }
    }

    class BlogPost extends Post {
        constructor(postTitle, postContent, views) {
          super(postTitle, postContent);
          this.views = views;
        }
      
        view() {
          this.views++;
          return this;
        }
      
        toString() {
          return `Post: ${this.postTitle}\nContent: ${this.postContent}\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

const classes = posts();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!