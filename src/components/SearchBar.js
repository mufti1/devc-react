import React from 'react'
import TextField from '@material-ui/core/TextField';

const SearchBar = props => {
    return(
        <TextField
        label="Search anuthing...."
        onChange={props.onChangeSearch}
        margin="normal"
        style={styles.inputSearch}
      />
    )
}

const styles = {
    inputSearch:{
        width: "100%",
        height: 50
    }
}

export default SearchBar;