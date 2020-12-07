import React, { FormEvent, useState, useEffect } from 'react';

import './styles.css';

import Alert from './Alert';
import { List, Item } from './List';

const Todo: React.FC = () => {
  
  const getLocalStorage = () => {
    let list = localStorage.getItem('@RExtodolist');
    if(list){
      return (list = JSON.parse(list))
    }else {
      return [];
    }
  }
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState("");
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(!name) {
      showAlert(true, 'danger', 'please enter value');
    } else if (name && isEditing) {
        setList(
          list.map((item : Item) => {
            if(item.id === editID){
              return {...item, title: name};
            }
            return item;     
          })
        )
        setName('');
        setEditID("");
        setIsEditing(false);
        setAlert({ show: true, type: 'success', msg: 'value changed' });
    } else {
        showAlert(true, 'success', 'item added to the list');
        const newItem = { id: new Date().getTime().toString(), title: name };
  
        setList([...list, newItem]);
        setName('');
    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  };

  const removeItem = (id: string) => {
    showAlert(true, 'danger', 'item removed');
    setList(list.filter((item: Item) => item.id !== id));
  };

  const editItem = (id: string) => {
    const specificItem = list.find((item: Item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="form" onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Todo list</h3>
        <div className="form-control">
          <input 
            type="text"
            className="todo"
            placeholder="Digite sua nota"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="todo-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button
            className="clear-btn"
            onClick={clearList}
            >
              'clear items'
          </button>
        </div>
      )}
    </section>
  );
}
export default Todo;