import { useState, ReactNode, createContext, Dispatch, SetStateAction } from 'react';

interface wrongAnswerNoProviderProps {
    children: ReactNode;
}

interface wrongAnswerNoContextProps {
    wrongAnswerNo: boolean;
    setwrongAnswerNo: Dispatch<SetStateAction<boolean>>;
    wrongAnswerNotifyFunc: () => void;
}

export const wrongAnswerNoContext = createContext<wrongAnswerNoContextProps>({
    wrongAnswerNo: false,
    setwrongAnswerNo: () => { },
    wrongAnswerNotifyFunc: () => { },
});

export default function WrongAnswerNoProvider({ children }: wrongAnswerNoProviderProps) {
    const [wrongAnswerNo, setwrongAnswerNo] = useState<boolean>(false);
    const wrongAnswerNotifyFunc = () => {
        setwrongAnswerNo(true);
        setTimeout(() => {
            setwrongAnswerNo(false);
        }, 1200); // Assuming a 3-second duration for the notification
    }
    return (
        <wrongAnswerNoContext.Provider value={{ wrongAnswerNo, setwrongAnswerNo, wrongAnswerNotifyFunc }}>
            {children}
        </wrongAnswerNoContext.Provider>
    );
}