import React from 'react'
import { useDispatch } from 'react-redux'

import { addNote } from '../Redux/actions/notes'

import '../Styles/empty-editor.css'

export default function EmptyEditor() {
    const dispatch = useDispatch()
    const addNoteHandler = () => {
        dispatch(addNote())
    }
  return (
    <div className='empty-editor-container'>
        <div className='empty-editor'>
            <span className='no-notes-text'>
                У вас нет заметок
            </span>
            <button className='add-note-button--empty' onClick={addNoteHandler}>
                Добавить заметку
            </button>
        </div>
    </div>
  )
}
