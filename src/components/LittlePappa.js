import React from 'react';
import AddProdForm from './AddProd';
import NavBar from './NavBar';
import ProdDisplay from './ProdDisplay';
import ViewProd from './ViewProd';

class LittlePappa extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listVisible: true,
      formVisible: false,
      addVisible: false,
      viewVisible: false,
      updateVisible: false,
      productsList: [{
        name: 'BFF Bracelet',
        description: 'This is for the best of friends',
        image: 'img',
        price: '20',
        count: '5',
        id: 'hi5'
      },
      {
        name: 'BFFFF Bracelet',
        description: 'This is for best friends fffforever',
        image: 'img',
        price: '25',
        count: '2',
        id: 'hi4'
      },
      {
        name: 'Not friends no more',
        description: 'let them know you don\'t like them anymore',
        image: 'img',
        price: '20',
        count: '2',
        id: 'hi3'
      },
      {
        name: 'bracelet',
        description: 'just a generic bracelet',
        image: 'img',
        price: '20',
        count: '2',
        id: 'hi2'
      },
      {
        name: 'you don\'t want this one',
        description: 'seriously, you don\'t want this one',
        image: 'img',
        price: '200',
        count: '10',
        id: 'hi'
      }]
    }
  }

  handleAddingNewProduct = (newProduct) => {
    const newProductList = this.state.productsList.concat(newProduct);
    this.setState({productsList: newProductList, formVisible: false, listVisible: true});
  }

  handleAddProdClick = () => {
    this.setState({formVisible: true, listVisible: false, viewVisible:false})
  }

  handleViewAllClick = () => {
    this.setState({formVisible:false, listVisible:true, viewVisible:false})
  }

  handleViewProdClick = () => {
    this.setState({fromVisible:false, listVisible:false, viewVisible:true})
  }

  render() {
    let currentlyVisibleState = null;
    if (this.state.formVisible) {
      currentlyVisibleState = <AddProdForm onNewProductCreation={this.handleAddingNewProduct} />
    }
    if (this.state.listVisible) {
      currentlyVisibleState = <ProdDisplay productsList={this.state.productsList}/>
    }
    if (this.state.viewVisible) {
      currentlyVisibleState = <ViewProd individualProd={this.state.handleViewProdClick} />
    }
    return (
      <React.Fragment>
        <NavBar onAddProdClick={this.handleAddProdClick}
          onViewAllClick={this.handleViewAllClick}/>
        {currentlyVisibleState}
      </React.Fragment>
    )
  }
}

export default LittlePappa;

