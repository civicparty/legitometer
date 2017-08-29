import React from 'react';
import { Link } from 'react-router-dom';

class ReviewList extends React.Component {
  render() {
    return(
      <tr key={this.props.id}>
        <td><h5 className="strong">{this.props.name} - {this.props.collection}</h5></td>
        <td className="collapsing">
          <Link to={`/form`} className='ui button blue'>Start</Link>
        </td>
      </tr>

    )
  }
}

export default ReviewList;
// TODO send casefile_id along with the Link in order to only display articles with that id
// TODO why are there two links? ---> <td><h5><Link to="/form">{this.props.url}</Link></h5></td>
//  what is this meant to do?

// params={{collection_id: this.props.collection.id}}


// <table>
//   <tbody>
//     {this.state.articles.map((list) => {
//       return(
//         <ReviewList
//           name={list.article.headline}
//           url={list.article.url}
//           id={list.id}
//           key={list.id}
//         />
//       )
//     })}
//   </tbody>
// </table>
