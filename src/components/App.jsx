import { Component } from "react";

import { Box } from "./Box/Box";
import { GlobalStyle } from "./GlobalStyle";
// import * as API from './Services/Services';
import getMaterial from "./Services/Services";
import SearchBar from "./SearchBar";
import ItemGallery from "./ImageGallery";
import Loader from "./Loader";
import Button from "./Button";


class App extends Component {

  state = {
    arrayItems: [],
    loading: false,
    imageName: '',
    page: 1,
  }

  async componentDidUpdate(_, prevState) {

    const { imageName, page } = this.state;
    
    if (prevState.imageName !== imageName || prevState.page !== page) {
      try {
        this.setState({ loading: true });
        const array = await getMaterial(imageName, page);
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
    this.setState({
      imageName,
      page: 1,
      arrayItems: [],
    })
  }
  
  render() {
    
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
        <GlobalStyle />
      </Box>
    )
  }
}

export default App;