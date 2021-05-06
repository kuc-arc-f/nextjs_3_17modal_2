
//
export default {
  get_category_items: function(){
    var arr = [
      {id: 1 , name: 'news'} ,
      {id: 2 , name: 'food'} ,
      {id: 3 , name: 'Other'} ,
    ]
    return arr
  },
  get_tag_items: function(){
    var arr = [
      {id: 1 , name: '小学生向け'} ,
      {id: 2 , name: '新着の書籍'} ,
      {id: 3 , name: '絵本こども用'} ,
    ]
    return arr
  },
  get_category_item : function(id , categories){
    try{
      var ret = {id:0, name:""}
      categories.forEach(function (category){
        if( id === category.id ){
          ret = category
        }
      });
      return ret;  
    } catch (e) {
      console.log(e);
      throw new Error('Error , get_category_item');
    } 
  },    
  get_tags : function(ids , tags){
    try{
      var ret = []
      ids.forEach(function (item){
        tags.forEach(function (tag){
          if( item === tag.id ){
//            ret = category
            ret.push(tag)
          }
        });
//        item.category = { name: ""}
//console.log(item)
      });
      return ret;  
    } catch (e) {
      console.log(e);
      throw new Error('Error , get_tags');
    } 
  }    
}
