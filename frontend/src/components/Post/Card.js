import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux'
import { isEmpty } from '../Utils';

const Card = (post) => {
    const [isLoading, setIsLoading] = useState(true);
    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);

    useEffect(() => {
        !isEmpty(userData[0]) && setIsLoading(false);
    })


    return (
        <li className="card-container" key={post._id}>
            {isLoading ? (
                <i className="fas fa-spinner fa-spin"></i>
            ) : (
                <h2>test</h2>
            )}
        </li>
    );
};

export default Card;