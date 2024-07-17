import { useState, ReactNode, createContext, Dispatch, SetStateAction } from 'react';

interface correctAnswerNoProviderProps {
    children: ReactNode;
}

interface correctAnswerNoContextProps {
    correctAnswerNo: boolean;
    setcorrectAnswerNo: Dispatch<SetStateAction<boolean>>;
    correctAnswerNotifyFunc: () => void;
}

export const correctAnswerNoContext = createContext<correctAnswerNoContextProps>({
    correctAnswerNo: false,
    setcorrectAnswerNo: () => { },
    correctAnswerNotifyFunc: () => { },
});

export default function CorrectAnswerNoProvider({ children }: correctAnswerNoProviderProps) {
    const [correctAnswerNo, setcorrectAnswerNo] = useState<boolean>(false);
    const correctAnswerNotifyFunc = () => {
        setcorrectAnswerNo(true);
        setTimeout(() => {
            setcorrectAnswerNo(false);
        }, 1200); // Assuming a 3-second duration for the notification
    }
    return (
        <correctAnswerNoContext.Provider value={{ correctAnswerNo, setcorrectAnswerNo, correctAnswerNotifyFunc }}>
            {children}
        </correctAnswerNoContext.Provider>
    );
}