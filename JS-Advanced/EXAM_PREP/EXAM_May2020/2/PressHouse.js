function solveClasses() {
    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString(){
            let result = `Title: ${this.title}\n`;
            result += `Content: ${this.content}`;
            return result;
        }
    }
    class ShortReports extends Article {
        constructor(title, content, originalResearch) {
            super(title, content)
            if (title != null, content != null) {
                if (content.length < 150) {
                    this.content = content;
                }
                else{
                    throw new Error('Short reports content should be less then 150 symbols.');
                }
                if (originalResearch.author != null && originalResearch.title != null) {
                    this.originalResearch = originalResearch;
                }
                else{
                    throw new Error('The original research should have author and title.')
                }
                this.comments = [];
            }
            
        }
        addComment(comment){
            this.comments.push(comment);
            return 'The comment is added.';
        }
        toString(){
            let result = super.toString();
            result += `\nOriginal Research: ${this.originalResearch.title} by ${this.originalResearch.author}\n`;
            if (this.comments.length > 0) {
                result += `Comments:\n`;
                result += this.comments.join('\n');
            }
            return result.trim();
        }
    }
    class BookReview extends Article{
        constructor(title, content, book) {
            super(title, content)
            this.book = book;
            this.clients = [];
        }
        addClient(clientName,  orderDescription){
            if (this.clients.length != 0 && Object.values(this.clients).some(x => x.clientName == clientName) && Object.values(this.clients).some(x => x.orderDescription == orderDescription)) {
                throw new Error('This client has already ordered this review.');
            }
            let client = {
                clientName, 
                orderDescription,
            }
            this.clients.push(client);
            return `${clientName} has ordered a review for ${this.book.name}`;
        }
        toString(){
            let result = super.toString();
            result += `\nBook: ${this.book.name}\n`;
            if (this.clients.length > 0) {
                result += `Orders:\n`;
                this.clients.forEach(el => {
                    result += `${el.clientName} - ${el.orderDescription}\n`
                });
            }
            return result.trim();
        }
    }
    return{
        Article,
        ShortReports,
        BookReview,
    }
}

let classes = solveClasses()
let short = new classes.ShortReports('SpaceX and Javascript', 'Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?', { title: 'Dragon 2', author: 'wikipedia.org' });
console.log(short.toString());
`Title: SpaceX and Javascript
Content: Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?
Original Research: Dragon 2 by wikipedia.org`