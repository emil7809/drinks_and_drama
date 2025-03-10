"use client";
import { createContext, useContext, useState } from "react";

// Create a context for managing the pop-up state
const ComingSoonContext = createContext({ showPopup: () => { } });

export const ComingSoonProvider = ({ children }: { children: React.ReactNode }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <ComingSoonContext.Provider value={{ showPopup: () => setIsVisible(true) }}>
            {children}

            {/* The actual pop-up */}
            {isVisible && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>Coming Soon</h2>
                        <button onClick={() => setIsVisible(false)}>Back</button>
                    </div>
                </div>
            )}
        </ComingSoonContext.Provider>
    );
};

// Custom hook to trigger the pop-up
export const useComingSoon = () => useContext(ComingSoonContext);
