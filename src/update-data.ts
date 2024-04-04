import { getClient } from "./utils";

async function updateTodo(todoId: number) {
    const client = await getClient();
    
    const updateTodoText = 'UPDATE todos SET done = $1 WHERE id = $2';
    const updateTodoValue = [true,todoId];
    // await client.query(updateTodoText, [true, todoId]);
    await client.query(updateTodoText, updateTodoValue);
    
    console.log(`Todo with ID ${todoId} updated to done!`);
}

const todoIdToUpdate = 1;
updateTodo(todoIdToUpdate);
