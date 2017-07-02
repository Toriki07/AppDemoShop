import { StackNavigator } from 'react-navigation';

import Home from '../Home/Home';
import ListProduct from '../listproduct/ListProduct';
import ProductDetail from '../productdetail/ProductDetail';



//dieu huong cho manh hinh click to detail products
export const HomeStack = StackNavigator({
    Screen_Home:{
        screen: Home,
        navigationOptions:{
            title: 'Home'
        }
    },
     Screen_Detail: {
    screen: ProductDetail,
    navigationOptions: {
      title: 'Chi tiet'
    }
  },
  Screen_List: {
    screen: ListProduct,
    navigationOptions: {
      title: 'Danh sach SP'
    }
  },
});
//__ - - - - - - - - - - - - - - -

 export default HomeStack;
