export class ListBinding{
  constructor(element){
    this.element = element; // an odered or under list
    this.textList = ['hello', 'hi', 'morning'];
    
  }
  /* delete all element from list*/
  deleteAll(){
    while(this.element.firstChild)
      this.element.removeChild(this.element.firstChild);
       
  }
  
  /*  update the GUI*/
  update(){
    this.deleteAll();
    for(let text of this.textList){
      let item = document.createElement('li');
      item.textContent = text;
      this.element.appendChild(item);
    }
  }
  
 /*add elemte into list */ 
  add(item){
    this.textList.push(item);
    this.update();
    
  };
  /* delete first elemte of the list  */
  deleteFirst(){
    this.textList.shift();
    this.update();

  }
  
  
}
