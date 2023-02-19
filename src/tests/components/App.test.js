import { shallow } from 'enzyme';
import App from "../../components/App";
import { configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({
    adapter: new Adapter()
})

test('should render App correctly', ()=>{
    const wrapper = shallow(<App/>)
    expect(wrapper).toMatchSnapshot()
})