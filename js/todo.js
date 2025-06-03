class Todo {
    constructor(name ="" ,content =""){
        this.name=name;
        this.content=content;
    }
   createTodoItem(){
    const li=document.createElement("li");
    li.innerHTML=`${this.name} : ${this.content}`;
    return li;
   }
}
class Todos{
    todos=new Array();
    ol=document.querySelector("#todolist");
    constructor(){
        this.showTodos();
    }
    showTodos(){
        this.ol.innerHTML="";
        this.todos.forEach((todo)=>{
            const newTodo=todo.createTodoItem();
            const i=document.createElement("i");
            i.classList.add("fa");
            i.classList.add("fa-trash");
            i.addEventListener("click",()=>{
                this.deleteTodo(todo);
            });
            newTodo.appendChild(i);
            this.ol.appendChild(newTodo);
        });
    }
    addTodo=(name,content)=>{
        const todo=new Todo(name,content);
        this.todos.push(todo);
        this.showTodos();
    };
    deleteTodo(todo){
        console.log("delete",todo);
        this.todos=this.todos.filter((actualTodo)=>actualTodo !=todo);
        this.showTodos();
    }
}
const todos =new Todos();
const disableButton=(button, ...dependencies)=>{
    button.disabled=false;
    dependencies.forEach((dependency)=>{
        if(!dependency.value.trim().length){
            button.disabled=true;
            return;
        }
    });
};
const nameInput=document.querySelector("#name");
const contentInput=document.querySelector("#content");
const addButton=document.querySelector("button");
addButton.disabled=true;
nameInput.addEventListener("keyup",()=>{
    disableButton(addButton,nameInput,contentInput);

});
contentInput.addEventListener("keyup",()=>{
    disableButton(addButton,nameInput,contentInput);
});
addButton.addEventListener("click",()=>{
    todos.addTodo(nameInput.value,contentInput.value);
    nameInput.value="";
    contentInput.value="";
});