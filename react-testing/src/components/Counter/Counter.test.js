import userEvent from "@testing-library/user-event";
import { renderTestApp } from "../../tests/helpers/renderTestApp";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";
import Counter from "./Counter";


describe('Counter test', () => 
{
    test('Test increment counter', async () => 
    {
        const { getByTestId } = renderTestApp(<Counter/>, 
        {
            route: '/',
            initialState: {
                counter: { value: 12 }
            }
        });

        const incrementBtn = getByTestId('increment-btn');
        expect(getByTestId('value-title')).toHaveTextContent('12');
        userEvent.click(incrementBtn);
        expect(getByTestId('value-title')).toHaveTextContent('13');
    });

    test('Test decrement counter', async () => 
    {
        const { getByTestId } = renderWithRedux(<Counter/>, 
        {
            counter: { value: 13 }
        });

        const decrementBtn = getByTestId('decrement-btn');
        expect(getByTestId('value-title')).toHaveTextContent('13');
        userEvent.click(decrementBtn);
        expect(getByTestId('value-title')).toHaveTextContent('12');
    });
});