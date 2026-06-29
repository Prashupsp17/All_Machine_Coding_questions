import {render,screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ModalPopUp from './ModalPopUp';
import "@testing-library/jest-dom"; 

test('renders modal component',() => {
   render(<ModalPopUp />)

   const button = screen.getByRole("button",{
    name:/open/i
   });

   expect(button).toBeInDocument();
});