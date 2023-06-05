import Tiles from "../components/Tiles/Tiles";

import { categories } from '../constants/Categories';

import Theme from "../Theme/Theme";

const HomeScreen = ({ navigation }) => {
  return (
    <Theme>
        <Tiles 
            list={ categories } 
            navigation={ navigation }
            paddingHorizontal={ 18 }
        />
    </Theme>
  );
}

export default HomeScreen;