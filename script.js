var ul = document.getElementById('myList')
var li;
var itemId;
var item;
addTask = function(){
  if(document.getElementById('task').value != ''){
    item = document.getElementById('task')
    itemId = ul.childElementCount;
    li = createElItem(item.value ,itemId)
    li.appendChild(createButtonBtn(itemId))
    ul.appendChild(li)
  }
  }
removeTask = function(itemId){
  for(i = 0; i < ul.children.length; i++){
    if(ul.children[i].getAttribute("index") == itemId){
      ul.children[i].remove();
    }
  }
}
createElItem = function(itemValue, itemId){
  let li = document.createElement("li")
  li.setAttribute("index", itemId)
  li.appendChild(document.createTextNode(itemValue));
  return li;
}
createButtonBtn = function(itemId) {
  let btn = document.createElement('button');
  btn.setAttribute("onclick", "removeTask("+itemId+")");
  btn.innerHTML ='X'
  return btn;
}
