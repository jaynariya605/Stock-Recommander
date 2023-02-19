import { StockTable } from "../../components/StockTable";

import { shallow, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({
    adapter: new Adapter()
})

let wrapper , getData

beforeEach(()=>{
    getData = jest.fn()
    wrapper = shallow(<StockTable getData={getData} state={null}/>)
})

test('should render Stock Table correctly', ()=>{
    expect(wrapper).toMatchSnapshot()
})
