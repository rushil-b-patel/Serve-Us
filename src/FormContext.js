import React, { useState } from 'react';

const FormContext = React.createContext([{}, () => { }]);

const FormProvider = ({ children }) => {
    const [state, setState] = useState([]);

    return (
        <FormContext.Provider value={[state, setState]}>
            {children}
        </FormContext.Provider>
    );
}

export { FormContext, FormProvider };