import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

export interface Item {
    id: string;
    title: string;
}

export interface Props {
    items: Item[];
    removeItem: (id: string) => void;
    editItem: (id: string) => void;
}

export const List: React.FC<Props> = ({ items, removeItem, editItem }) => {
  return (
    <div className='list'>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className='item' key={id}>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button
                type='button'
                className='edit-btn'
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type='button'
                className='delete-btn'
                onClick={() => removeItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};
