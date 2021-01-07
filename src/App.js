import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './ParentComponents/Header';
import Main from './ParentComponents/Main';
import SideBar from './ParentComponents/SideBar';
import MainSideBar from './Main/MainSideBar';
import FolderSideBar from './Folder/FolderSidebar';
import NoteSideBar from './Note/NoteSidebar';
import AddFolderSideBar from './AddFolderForm/AddFolderSideBar';
import AddNoteSideBar from './AddNoteForm/AddNoteSideBar'
import MainMain from './Main/Main';
import Folder from './Folder/Folder';
import Note from './Note/Note';
import AddFolder from './AddFolderForm/AddFolder';
import AddNote from './AddNoteForm/AddNote'
import ClearMessage from './Buttons/ClearMessageButton';
import ApiContext from './ApiContext';
import ErrorBoundary from './ErrorBoundary';
import config from './config'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      folders: [],
      loading: false,
      error: null,
      updateMessage: null
    }
  }

  componentDidMount = () => {
    this.setState({ loading: true })
    fetch(`${config.API_ENDPOINT}/`)
      .then(resp => {
        if (!resp.ok) {
          throw new Error('Unable to contact server. Please try again later!')
        } else {
          return resp.json()
        }
      })
      .then(data => {
        this.setState({
          ...data,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error.message
        })
      })
  }

  handleDelete = (id) => {
    const toDelete = this.state.notes.find(note => {
      return note.id === id
    })
    this.setState({
      notes: this.state.notes.filter(notes =>
        notes !== toDelete)
    })
  }

  updateError = (message) => {
    this.setState({
      error: message
    })
  }

  updateMessage = (message) => {
    this.setState({
      updateMessage: message
    })
  }

  clearMessage = () => {
    this.setState({
      error: null,
      updateMessage: null
    })
  }

  handleAddNote = (note) => {
    this.setState({
      notes: [...this.state.notes, note]
    })
  }

  handleAddFolder = (folder) => {
    this.setState({
      folders: [...this.state.folders, folder]
    })
  }

  render() {

    const contextValues = {
      ...this.state,
      handleDelete: this.handleDelete,
      updateMessage: this.updateMessage,
      handleError: this.updateError,
      clearMessage: this.clearMessage,
      handleAddFolder: this.handleAddFolder,
      handleAddNote: this.handleAddNote
    }

    const loading = this.state.loading ?
      <div className='banner'>Loading...</div>
      : '';

    const error = this.state.error ?
      <div className='banner'>{this.state.error}<ClearMessage /></div>
      : '';

    const updateMessage = this.state.updateMessage ?
      <div className='banner'>{this.state.updateMessage}<ClearMessage /></div>
      : '';

    return (
      <BrowserRouter>
        <div className="App">
          <ApiContext.Provider value={contextValues}>
            <div className="header">
            <Header>
              <Route path='/' component={Header} />
            </Header>
            </div>
            {loading}{error}{updateMessage}

            <main className='group'>
              <div className="sidebar">
              <ErrorBoundary>
                <SideBar >
                  <Route exact path='/' component={MainSideBar} />
                  <Route path='/folder/:folderId' component={FolderSideBar} />
                  <Route path='/note/:noteId' component={NoteSideBar} />
                  <Route path='/AddNote' component={AddNoteSideBar} />
                  <Route path='/AddFolder' component={AddFolderSideBar} />
                </SideBar>
              </ErrorBoundary>
              </div>

              <ErrorBoundary>
                <Main >
                  <Route exact path='/' component={MainMain} />
                  <Route path='/folder/:folderId' component={Folder} />
                  <Route path='/note/:noteId' component={Note} />
                  <Route path='/AddNote' component={AddNote} />
                  <Route path='/AddFolder' component={AddFolder} />
                </Main>
              </ErrorBoundary>
            </main>

          </ApiContext.Provider>
        </div>
      </BrowserRouter>
    );
  }
}

