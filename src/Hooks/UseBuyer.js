import { useEffect, useState } from 'react';

const UseBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://used-products-resale-server-alpha.vercel.app/user/buyers/${email}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setIsBuyer(data.isBuyer);
                    setIsBuyerLoading(false);
                });
        }
    }, [email]);
    return [isBuyer, isBuyerLoading];
};

export default UseBuyer;
