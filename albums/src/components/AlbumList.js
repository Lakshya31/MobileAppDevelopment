import { ScrollView, Text } from 'react-native';
import React from 'react';
import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Albums: []
        };
    }

    componentDidMount() {
        this.getData();
    }
    getData = () => {
        fetch("http://rallycoding.herokuapp.com/api/music_albums", {
            method: "GET"
        })
            .then(res => res.json())
            .then(resp => {
                // console.log(resp, "HERE BABY");
                this.setState({ Albums: resp });
            })
    }

    render() {
        if(this.state.Albums.length === 0){
            return(
                <Text style={{fontSize:40, color:"black"}}>
                     Loading...
                </Text>
            )
        }
        else{
            return (
                <ScrollView style={{backgroundColor:"black"}}>
                    {
                        this.state.Albums.map((album, i) => {
                            return <AlbumDetail album={album} key={i} />
                        })
                    }
                </ScrollView>
            )
        }
    }
}

export default AlbumList;