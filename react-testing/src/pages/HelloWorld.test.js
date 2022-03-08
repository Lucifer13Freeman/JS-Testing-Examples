import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import App from './App';
import HelloWorld from './HelloWorld';


describe('HELLO WORLD TEST', () => 
{
  test('test 1', () => 
  {
    render(<HelloWorld />);
  
    const helloWorldElement = screen.getByText(/hello world/i);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input anything/i);
  
    expect(helloWorldElement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test('test 2', async () => 
  {
    render(<HelloWorld />);
    screen.debug();
    const helloWorldElement = await screen.findByText(/data/i);
    expect(helloWorldElement).toBeInTheDocument();
    expect(helloWorldElement).toHaveStyle({color: 'red'});
    screen.debug();
  });

  test("CLICK EVENT", () => 
  {
    render(<HelloWorld />);
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  });

  test("INPUT EVENT", () => 
  {
    render(<HelloWorld />);
    const input = screen.getByPlaceholderText(/input anything/i);
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    userEvent.type(input, 'blabla');
    expect(screen.queryByTestId('value-elem')).toContainHTML('blabla');
  });
});