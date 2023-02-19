import Item from "../../components/Item";
import { shallow, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({
    adapter: new Adapter()
})

test('should render Item correctly', ()=>{
    const data = {
        date: new Date().toDateString(),
        price: 52,
        facebook:75
    }
    const wrapper = shallow(<Item data={data} recommand={0}/>)
    expect(wrapper).toMatchSnapshot()
})
