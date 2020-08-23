import React from 'react'
import UserCreate from './UserCreate'
import LanguageCreate from '../context/LanguageContext'
import ColorContext from '../context/ColorContext'

class App extends React.Component{ 
    
    state={language : 'english'}

    onLanguageChange = language =>{
        this.setState({language })
    }

    render(){
        return(
            <div className='ui container'>
               <div>
                   Select a Language: 
                   <br/>
                   <i className='flag us' onClick={()=>this.onLanguageChange('english')}/>
                   <i className='flag es' onClick={()=>this.onLanguageChange('Spanish')}/>
               </div> 
               <br/> 
               <ColorContext.Provider value='primary'>
                   <LanguageCreate.Provider value={this.state.language}>
                        <UserCreate/>
                   </LanguageCreate.Provider>  
               </ColorContext.Provider>                     
            </div>
        ) 
    }
}

export default App

