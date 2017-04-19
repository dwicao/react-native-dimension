import Dimensions from 'Dimensions';
import handleSize from './utils';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const width = num => screenWidth * handleSize(num);
const height = num => screenHeight * handleSize(num);

export { width, height };
