import { Component } from "react";

import { Box } from "./Box/Box";
import * as API from './Services/Services';
import SearchBar from "./SearchBar";
import ItemGallery from "./ImageGallery";
import Loader from "./Loader";
import Button from "./Button";


class App extends Component {

  state = {
    arrayItems: [],
    showModal: false,
    loading: false,
    imageName: '',
    page: 1,
  }

  async componentDidUpdate(_, prevState) {

    const { imageName, page } = this.state;
    
    if (prevState.imageName !== imageName || prevState.page !== page) {
      try {
        this.setState({ loading: true });
        const array = await API.getMaterial(imageName, page);
        this.setState((prevState) => ({
          arrayItems: [...prevState.arrayItems, ...array],
          loading: false
        }))
      } catch (error) {
        console.log(error)
      }
    }
  }
  
  loadMoreBtn = () => {
    this.setState((prev) => ({
      page: prev.page + 1,
    }))
  }

  handleSubmitForm = ({ imageName }) => {
    console.log(imageName)
    this.setState({
      imageName,
      page: 1,
      arrayItems: [],
    })
  }
  
  render() {
    console.log(this.state.arrayItems)
    console.log(this.state.imageName)
    const { arrayItems, loading, imageName } = this.state;
    return (
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        as='main'
      >
        <SearchBar onSubmit={this.handleSubmitForm} />
        {loading && <Loader />}
        {imageName && (
          <>
            <ItemGallery items={arrayItems} />
            {loading ? <Loader /> : <Button loadMore={this.loadMoreBtn}/>}
          </>
        )}
      </Box>
    )
  }
}

export default App;