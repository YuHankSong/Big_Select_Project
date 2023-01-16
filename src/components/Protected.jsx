import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const Protected = (props) => {
    let Cmp = props.Cmp;
    const history = useHistory();

    // if nothing is inside localstorage , will redirect to the register page
    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            history.push('/login')
        }
    },[])

    // if yes, will return the Cmp prop, which contains the Content component
    return (
        <div>
            <Cmp />
        </div>
    );
}

export default Protected;