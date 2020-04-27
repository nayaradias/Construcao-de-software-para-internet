export class Message {
    content: string;
    messageId: string;
    username?:string;
    userId?:string;
    

    constructor(content:string,username:string,messageId?:string,userId?:string){
        this.messageId = messageId;
        this.content = content;
        this.userId = userId;
        this.username = username;
    }
    // constructor(messageId:string,content:string,userId:string,username:string){
    //     this.messageId = messageId;
    //     this.content = content;
    //     this.userId = userId;
    //     this.username = username;
    // }
}