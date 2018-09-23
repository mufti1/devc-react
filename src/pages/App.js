import React from 'react'
import SearchBar from '../components/SearchBar'
import BlogList from '../components/BlogList'

const link =
  "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

class App extends React.Component {
    constructor(){
        super()

        this.state = {
            loading: true,
            blogs: [],
            blogsFiltered: []
        }
    }

    componentDidMount() {
        this.handleGetBlog()
    }

    handleTypeSearch = event => {
        const blogsFiltered = this.state.blogs.filter((blog) => {
           return blog.title.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
        })

        this.setState({ blogsFiltered: blogsFiltered })
    }

    handleGetBlog = () => {
        fetch(link)
        .then(res => res.json())
        .then(res => this.setState({blogs: res, blogsFiltered:res, loading: false}))
    }

    // componentDidMount() {
    //     setTimeout(()=>{
    //         this.setState({loading: false})
    //     }, 1000)
    // }

    render(){
        // console.log(this.state.blogs)

        if (this.state.loading) {
            return (
                <h1>Loading</h1>
            )
        }   
        return(
            // <h1>This pages build with Vue JS {JSON.stringify(this.state.loading)}</h1>
            <div>
                <h1 style={styles.centered} >React News</h1>
                <SearchBar 
                    search={this.state.search} 
                    onChangeSearch={this.handleTypeSearch} 
                />
                {this.state.blogsFiltered.map((blog, index) => (
                     <BlogList 
                        key={index} 
                        title={blog.title} 
                        content={blog.content}
                        author={blog.author}
                        date={blog.created_at}
                     />
                ))}
            </div>
        )     
    }
}
const styles = {
    centered:{
        textAlign: "center"
    }
}


export default App