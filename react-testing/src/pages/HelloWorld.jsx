import { useState, useEffect } from 'react';

const HelloWorld = () => 
{
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(false);

    const onClick = () => 
    { 
        setToggle(prev => !prev); 
        value === 'hello' && setVisible(prev => !prev);
    }
    
    const onChange = (e) => setValue(e.target.value);

    useEffect(() => 
    {
        let timer = setTimeout(() => setData({}), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <h1 data-testid="value-elem">{value}</h1>
                <h1>hello world!</h1>
                { toggle === true && <div data-testid="toggle-elem" id="toggle-elem">toggle</div> }
                { data && <div style={{color: 'red'}}>data</div> }
                { visible && <h1 id="hello">HELLO WORLD!</h1> }
            <button data-testid="toggle-btn" id="toggle-btn" onClick={ onClick }>Click Me</button>
            <input onChange={ onChange } type="text" id="input-elem" placeholder="Input anything..."/>
        </div>
    );
};

export default HelloWorld;