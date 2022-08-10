import Controller from '@ember/controller';
import {action} from '@ember/object';
export default class PostsController extends Controller {
    newTitle;
    newDescription;
    @action
    addPost(){
        this.store.createRecord('post',{
            title: this.newTitle,
            description:this.newDescription,
            publishedAt: new Date()
        }).save();
        this.set('newTitle',"");
        this.set('newDescription',"");
    }
}

