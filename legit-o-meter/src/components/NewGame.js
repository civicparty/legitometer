import React from 'react';
import Header from './Header';
import { userData, collections } from '../seedData';
import CollectionItem from './CollectionItem';


//make a new game - selecting collection [articles]
class NewGame extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <p>Hi I'm a new game</p>
        <p>you can select a collection</p>
        <p>and give it a name</p>
        <button>Create Your Own Collection</button>
        <h4>Choose a Collection:</h4>
        <table>
          <tbody>
            {collections.map((collection) => {
              return(
                <CollectionItem
                  name={collection.name}
                  createdBy={collection.createdBy}
                  key={collection.id}
                />

              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default NewGame;

// <CollectionItem
//   name={collection.name}
//   createdBy={collection.createdBy}
//   key={collection.id}
// />
