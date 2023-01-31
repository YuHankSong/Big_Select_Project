import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const Protected = (props) => {
    let Cmp = props.Cmp;
    const history = useHistory();

    // if nothing is inside localStorage , will redirect to the register page
    useEffect(() => {
        if (!localStorage.getItem('user')) {
            history.push('/login')
        }
    }, [history])

    // if yes, will return the Cmp prop, which contains the Content component
    return (
        <div>
            <Cmp />
        </div>
    );
}

export default Protected;