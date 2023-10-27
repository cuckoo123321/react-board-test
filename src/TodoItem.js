import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY_MD,MEDIA_QUERY_LG } from './constants/style';

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border: 1px solid black;

  & + & {
    margin-top: 12px;
  }
`
const TodoContent = styled.div`
  color: ${props => props.theme.primary_300};
  font-size: ${props => props.size === "XL" ? '20px' : '12px'};
  text-decoration: ${props => props.isDone ? 'line-through' : 'none'};
`
const TodoButtonWrapper = styled.div``

const Button = styled.button`
  padding: 4px;
  color: black;
  font-size: 20px;

  ${MEDIA_QUERY_MD}{
   font-size:16px;
  }
  ${MEDIA_QUERY_LG}{
    font-size:12px;
  }

  & + & {
    margin-left: 4px;
  }

  &:hover {
    color: red;
  }
`

const RedButton = styled(Button)`
  color: red;
`

export default function TodoItem ({className, size, todo, handleDeleteTodo, handleToggleIsDone}) {
  const handleToggleClick = ()=>{
    handleToggleIsDone(todo.id)
  }
  return(
    <TodoItemWrapper className={className} data-todo-id={todo.id}>
      <TodoContent size={size} isDone={todo.isDone}>{todo.content}</TodoContent>
      <TodoButtonWrapper>
        <Button onClick={handleToggleClick}>
          {todo.isDone ? '未完成' : '已完成'}
        </Button>        
        <RedButton onClick={()=>{
          handleDeleteTodo(todo.id)
        }}>刪除</RedButton>
      </TodoButtonWrapper>
    </TodoItemWrapper>
  );
}
