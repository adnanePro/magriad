export class BaseModel {
    public nullable =  [];
    protected attributRequired = [];
    id:any;
    created_at:any;
    updated_at:any;


    isNewObject(){
     return   this.id === undefined ? true : false
    }

    make(input: any) {
        Object.assign(this, input);
        return this;
      }

    isValid(){
      let valid = true;


      for(let key of this.attributRequired){
        if(!this[key])valid= false;
      }
      return valid;
    }
}