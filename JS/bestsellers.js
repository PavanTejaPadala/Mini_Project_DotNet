

let BestURL1 = "http://localhost:3000/bestsel";
const getTodoItems = async () => {
    const res = await fetch(BestURL1);
    const data = await res.json();
    return data;
};

const createTodoElement = item => {
    let divCol = document.createElement('div');
    divCol.className = 'cols';
    divCol.setAttribute("data-id", item.id);
    let link=document.createElement('a');
    link.href="/HTML/view.html?book="+item.title;
    let img = document.createElement('img');
    img.src = item.img; 
    img.style.width = "250px";
    img.style.marginLeft = "30%";
    let para = document.createElement('p');
    para.textContent = item.author; 
    para.style.textAlign="right";
    para.style.marginRight="20%";
    divCol.appendChild(link);
    link.append(img);
    divCol.appendChild(para);

    return divCol; 
};

const updateTodoList = async () => {
    const todoItems = await getTodoItems();
    const todoList = document.getElementById('imgflex');

    if (Array.isArray(todoItems) && todoItems.length > 0) {
        todoItems.forEach(todoItem => {
            todoList.appendChild(createTodoElement(todoItem));
        });
    } else if (todoItems) {
        todoList.appendChild(createTodoElement(todoItems));
    }
};

const main = async () => {
    await updateTodoList();
};

main();