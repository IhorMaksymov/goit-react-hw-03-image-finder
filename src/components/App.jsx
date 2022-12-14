import { Component } from "react";

import { Box } from "./Box/Box";
import { GlobalStyle } from "./GlobalStyle";
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
    const perPage = 12;
    
    if (prevState.imageName !== imageName || prevState.page !== page) {
      try {
        this.setState({ loading: true });
        const { hits, totalHits } = await getMaterial(imageName, page, perPage);
        this.setState((prevState) => ({
          arrayItems: [...prevState.arrayItems, ...hits],
          totalPage: totalHits,
          loading: false,
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
    
    const { arrayItems, totalPage, loading, imageName } = this.state;
  
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
            {totalPage !== arrayItems.length && (
              <Button type='button' loadMore={this.loadMoreBtn}/>
            ) }
            {loading && <Loader />}
          </>
        )}
        <GlobalStyle />
      </Box>
    )
  }
}

export default App;