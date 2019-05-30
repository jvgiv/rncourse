import React from 'react'
import { View, StyleSheet, ScrollView, FlatList } from 'react-native'
import ListItem from '../ListItem/ListItem'

const placeList = props => {
    
        
    return (
        <FlatList 
            style={styles.listContainer}
            data={props.places}
            renderItem={(info) => (
                <ListItem
                    // key={info.item}
                    placeName={info.item.name}
                    placeImage={info.item.image}
                    placeImage2={info.item.image2} 
                    onItemPressed={() => props.onItemDeleted(info.item.key)} 
                />
            )}          
        />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
      }
})

export default placeList