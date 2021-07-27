class Article {

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        let msg = '';
        if (this._likes.length == 0) {
            msg = `${this.title} has 0 likes`;
        }
        else if (this._likes.length == 1) {
            msg = `${this._likes[0]} likes this article!`;
        }
        else{
            msg = `${this._likes[0]} and ${this._likes.length - 1} others like this article!`
        }
        return msg;
    }

    like(username){
        if (this._likes.some(x => x == username)) {
            throw new Error(`You can't like the same article twice!`);
        }
        else if (this.creator == username) {
            throw new Error(`You can't like your own articles!`);
        }
        else{
            this._likes.push(username);
            return `${username} liked ${this.title}!`
        }
    }

    dislike(username){
        let msg = '';
        if (this._likes.some(x => x == username)) {
            this._likes.pop(username);
            return `${username} disliked ${this.title}`
        }
        else{
            throw new Error(`You can't dislike this article!`);
        }
    }
    comment(username, content, id){
        let msg = '';
       if (id == undefined || !this._comments.some(x => x.id == id)) {
           let comment = {
               id: this._comments.length + 1,
               username,
               content,
               replies: [],
           }
           this._comments.push(comment);
           msg = `${username} commented on ${this.title}`;
       }
       else {
           let comment = this._comments.find(x => x.id == id);
           let reply = {
               id: `${id}.${comment.replies.length + 1}`,
               username,
               content,
           }
           comment.replies.push(reply);
           msg = 'You replied successfully';
       }
       return msg;
    }
    toString(sort){
        let arr;
        let msg = `Title: ${this.title}\n`;
        msg += `Creator: ${this.creator}\n`;
        msg += `Likes: ${this._likes.length}\n`;
        msg += `Comments:\n`
        if (sort == 'asc') {
            arr = Object.values(this._comments).sort((a, b) => {
                return a.id - b.id;
            });
        }
        else if (sort == 'desc') {
            arr = Object.values(this._comments).sort((a, b) => {
                return b.id - a.id;
            });
        }
        else if (sort == 'username') {
            arr = Object.values(this._comments).sort((a, b) => {
                return a.username.localeCompare(b.username);
            });
        }
        arr.forEach(el => {
            let obj = el;
            msg += `-- ${obj.id}. ${obj.username}: ${obj.content}\n`;
            if (sort == 'asc') {
                obj.replies = Object.values(obj.replies).sort((a, b) => {
                    console.log(a);
                    return a.id - b.id;
                });
            }
            else if (sort == 'desc') {
                obj.replies = Object.values(obj.replies).sort((a, b) => {
                    return b.id - a.id;
                });
            }
            else if (sort == 'username') {
                obj.replies = Object.values(obj.replies).sort((a, b) => {
                    return a.username.localeCompare(b.username);
                });
            }
            obj.replies.forEach(reply => {
                let replyObj = reply;
                msg += `--- ${replyObj.id}. ${replyObj.username}: ${replyObj.content}\n`;
            });
        });
        return msg.trim();
    }
}
let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));


//  Unexpected error: expected 
//  'Title: My Article\n
//  Creator: Anny\n
//  Likes: 3\n
//  -- 1. Anny: Some Content\n
//  --- undefined. undefined: undefined\n
//  -- 2. Zane: Reply\n
//  --- undefined. undefined: undefined\n
//  -- 3. Jessy: Nice :)' 
//  to equal 
//  'Title: My Article\n
//  Creator: Anny\n
//  Likes: 3\n
//  Comments:\n
//  -- 1. Anny: Some Content\n
//  --- 1.1. Ammy: New Content\n
//  -- 2. Zane: Reply\n
//  --- 2.1. SAmmy: Reply@\n
//  -- 3. Jessy: Nice :)'