import RoomBooking from './index';
import Enzyme,{shallow} from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe("<RoomBooking /> default button status",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallow(<RoomBooking />);
    })

    test("decrement button disabled",()=>{
        const decrementButton=wrapper.find("[data-test='decrementRooms']");
        expect(decrementButton.props().disabled).toBe(true);
    })

    test("decrement button not disabled  when increment button click",()=>{
      
   const incrementButton=wrapper.find("[data-test='incrementRooms']");
     incrementButton.simulate("click");
     const decrementButton=wrapper.find("[data-test='decrementRooms']");
    expect(decrementButton.props().disabled).toBe(false);
    })
})

describe("<RoomBooking /> update state",()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper=shallow(<RoomBooking/>);
  })

  test("rooms update to 2 when increment button click",()=>{
    const incrementButton=wrapper.find("[data-test='incrementRooms']");
     incrementButton.simulate("click");
     expect(wrapper.state().rooms).toBe(2);
  });

  test("rooms update to 1 when decrement button click",()=>{
    const incrementButton=wrapper.find("[data-test='incrementRooms']");
    incrementButton.simulate("click");
    const decrementButton=wrapper.find("[data-test='decrementRooms']");
    decrementButton.simulate("click");
    expect(wrapper.state().rooms).toBe(1);
  });

});

