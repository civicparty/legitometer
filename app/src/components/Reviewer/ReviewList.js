import React from 'react';
import { Link } from 'react-router-dom';

class ReviewList extends React.Component {
  render() {
    return(
      <tr key={this.props.id}>
        <td><h5 className="gameName">{this.props.name} - {this.props.collection}</h5></td>
        <td><h5><Link to="/form">{this.props.url}</Link></h5></td>
      </tr>

    )
  }
}

export default ReviewList;


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
