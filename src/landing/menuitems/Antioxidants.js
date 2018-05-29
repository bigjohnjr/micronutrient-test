// import React, { Component } from 'react';
//
// class Antioxidants extends Component {
//   state = {micros: []};
//
//   componentDidMount() {
//     fetch('/users')
//       .then(res => res.json())
//       .then(micros => {
//         this.setState({
//           micros: micros.antioxidants
//         });
//       })
//   }
//
//   renderData() {
//     const antioxidants = this.state.micros;
//     return antioxidants.map((micro, index) => {
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
//           Antioxidants
//         </label>
//         <select value={this.props.value} onChange={this.handleChange}>
//           <option value="" selected>--Antioxidants--</option>
//           {this.renderData()}
//         </select>
//       </form>
//     )
//    }
// }
//
// export default Antioxidants;
