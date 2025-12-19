import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";


// ---- Language Type ---- //
export type Language = "en" | "fi";


// ---- Context Type ---- //
interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
}


// ---- Create Context ---- //
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);


// ---- Language Provider Component ---- //
interface LanguageProviderProps {
    children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguage] = useState<Language>("en");

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}


// ---- Custom Hook to Use Language Context ---- //
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
