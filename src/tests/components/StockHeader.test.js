import { StockHeader} from "../../components/StockHeader"

import { shallow, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({
    adapter: new Adapter()
})

test('should render Stock Header correctly', ()=>{
    const state={
        title: 'Apple'
    }
    const wrapper = shallow(<StockHeader state={state}/>)
    expect(wrapper).toMatchSnapshot()
})