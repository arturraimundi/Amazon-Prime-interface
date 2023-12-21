
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import AmazonLogo from '../../assets/amazon_logo.png';
import PrimeVideo from '../../assets/prime_video.png';
import movieTheWheel from '../../assets/movies/the_wheel_of_time.png';
import {MOVIESCRIME} from '../../utils/moviesCrimes';
import {MOVIESWATCH} from '../../utils/moviesWatch';
import { MOVIESWATCHING } from '../../utils/moviesWatching';
import { MoviesCard } from '../../components/movieCard';


export const Home = () =>{
    return(
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>
            <View style={styles.header}>
                <Image style={styles.primeLogoImg} source={PrimeVideo}/>
                <Image style={styles.amazonLogoImg} source={AmazonLogo}/>
            </View>
            <View style={styles.category}>
                
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>TV Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Kids</Text>
                </TouchableOpacity>

            </View>
            <TouchableOpacity style={styles.movieImageThumbnail}>
                <Image source={movieTheWheel} style={styles.movieImage}/>
            </TouchableOpacity>
            <Text style={styles.movieText}>Continue Watching</Text>
            <FlatList 
                data={MOVIESWATCHING}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <MoviesCard movieURL={item.moviesURL}/>}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}

            />
            <Text style={styles.movieText}>Crime Movies</Text>
            <FlatList 
                data={MOVIESCRIME}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <MoviesCard movieURL={item.moviesURL}/>}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}

            />
            <Text style={styles.movieText}>Watch in your language</Text>
            <FlatList 
                data={MOVIESWATCH}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <MoviesCard movieURL={item.moviesURL}/>}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
            />
            </ScrollView>
        </View>

        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232F3E",
        alignItems: "flex-start",
    },
    header: {
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center",
    },


    primeLogoImg: {
        marginTop: 50,
    },

    amazonLogoImg: {
        marginTop: -35,
        marginLeft: 50,
    },

    category: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 20,
        marginBottom: 15,
    },

    categoryText: {
        fontSize: 14,
        fontWeight: '700',
        color: '#ffffff',
    },
    movieText: {
        color: '#ffff',
        fontSize: 18,
        fontWeight: '700',
        padding: 15,
    },
    movieImageThumbnail: {
        width: '100%',
        alignItems: 'center',


    },
    contentList: {
        paddingLeft: 18,
        paddingRight: 30,

    },
    contentMovies: {

    },




})