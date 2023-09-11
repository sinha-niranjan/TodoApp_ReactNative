import React, { useState } from "react";

import { Text } from "react-native";

import Header from "./Header";

import ListItems from "./ListItems";

import InputModel from "./InputModel";

const Home = () => {
  // initial toodos

  const initialTodos = [
    {
      title: "Get some snacks",
      date: "Fri , 08 Jan 2024 16:32:11 GMT",
      key: "1",
    },
    {
      title: "Get some groceries",
      date: "Fri , 08 Jan 2024 16:32:11 GMT",
      key: "2",
    },
    {
      title: "Prepare Youtube  script",
      date: "Fri , 08 Jan 2024 16:32:11 GMT",
      key: "3",
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  // clear all toods

  const handleClearTodos = () => {
    setTodos([]);
  };

  // Modal Visibility

  const [modalVisible, setModalVisible] = useState(false);
  const [todoInputValue, setTodoInputValue] = useState("");

  // Editing

  const [todoToBeEdited, setTodoToBeEdited] = useState();
  const handleTriggerEdit = (item) => {
    setTodoToBeEdited(item);
    setModalVisible(true);
    setTodoInputValue(item.title);
  };

  const handleEditTodo = (editedTodo) => {
    const newTodo = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.key === editedTodo.key);
    newTodo.splice(todoIndex, 1, editedTodo);
    setTodos(newTodo);
    setTodoToBeEdited(null);
    setModalVisible(false);
  };

  return (
    <>
      <Header handleClearTodos={handleClearTodos} />
      <ListItems
        todos={todos}
        setTodos={setTodos}
        handleTriggerEdit={handleTriggerEdit}
      />
      <InputModel
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
        todoToBeEdited={todoToBeEdited}
        setTodoToBeEdited={setTodoToBeEdited}
        handleEditTodo={handleEditTodo}
        todos={todos}
        setTodos={setTodos}
      />
    </>
  );
};

export default Home;
