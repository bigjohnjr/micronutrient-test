// import React, { Component } from 'react';
//
// class AminoAcids extends Component {
//   state = {micros: []};
//
//   componentDidMount() {
//     fetch('/users')
//       .then(res => res.json())
//       .then(micros => {
//         this.setState({
//           micros: micros.aminoacids
//         });
//       })
//   }
//
//   renderData() {
//     const aminoacids = this.state.micros;
//     return aminoacids.map((micro, index) => {
//       return (
//         <option value={micro.value} key={index}>{micro.name}</option>
//       )
//     })
//   }
//
//   render() {
//     return (
//       <form>
//         <label className="nutrient-label">
//           Amino Acids
//         </label>
//         <select value={this.props.value} onChange={this.handleChange}>
//           <option value="" selected>--Amino Acids--</option>
//           {this.renderData()}
//         </select>
//       </form>
//     )
//    }
// }
//
// export default AminoAcids;
