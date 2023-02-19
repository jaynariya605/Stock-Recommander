import {SearchForm} from "../../components/SearchForm"
import { shallow, configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({
    adapter: new Adapter()
})

let wrapper , fetchSearchQuery

beforeEach(()=>{
    fetchSearchQuery = jest.fn()
    wrapper = shallow(<SearchForm fetchSearchQuery={fetchSearchQuery}/>)
})

test('should render SearchForm correctly', ()=>{
    expect(wrapper).toMatchSnapshot()
})

test('should handle input text', ()=>{
    wrapper.find('input.text-input').simulate('change', { 
        target: {
        value: 'apple'
    }
})  
    
    expect(wrapper.find('input.text-input').prop('defaultValue')).toEqual('apple')
})

test('should visible search list', ()=>{
    wrapper.find('input.text-input').simulate('change', { 
        target: {
        value: 'apple'
    }
})  
    
    expect(fetchSearchQuery).toHaveBeenLastCalledWith('apple')
})