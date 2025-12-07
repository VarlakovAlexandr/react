import React, { useEffect, useState } from 'react';
import List from './components/List';


//https://grygorian.com/wp-json/wp/v2/product
//https://jsonplaceholder.typicode.com/todos
function App() {
    const [list, setList] = useState( [] );
    const [loading, setLoading] = useState( false );

    const handleLoading = async () => {

        setLoading( true );

        try{
            const response = await fetch('https://jsonplaceholder.com/todos/1');
            if (response.ok ){
                const data = await response.json();
                console.log(data);
                setList(data);

                
            } else {
                console.log('adadasd');
                throw new Error("Network error!");
            } 
        } catch( error ){
            console.log( error );
        } finally {
            setLoading(false);
        }
    }
    
    useEffect( ()=> {
        handleLoading();
    }, [] )


  return (
    


    <div className="container is-fluid">
        <nav className='navbar is-light'>
            <div className="navbar-brand px-5">
                <span className="navbar-item is-uppercase">
                    Todos
                </span>
            </div>
        </nav>  
            <main className="content px-5 py-5">
                <h1>Todos</h1>

                { loading ?  "Загрузка" : (
                    <List 
                        list = { list }
                    />
                )}

                
            </main>    
    </div>
  );
}

export default App;
