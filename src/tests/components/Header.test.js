import { Header } from "../../components/Header";
import { shallow, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({
    adapter: new Adapter()
})

test('should render Header correctly', ()=>{
    const wrapper = shallow(<Header/>)
    expect(wrapper).toMatchSnapshot()
})