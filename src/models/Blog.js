

export class Blog{
    constructor(data){
        this.id = data.id
        this.title = data.title 
        this.body = data.body
        this.imgUrl = data.imgUrl
        this.tag = data.tag
        this.published = data.published
        this.creatorId = data.creatorId
        this.creator = data.creator 
    }
}