import React from 'react'
import { AnalyticsContext } from '../providers/index';

// Create an analytics hook that we can use with other components.
export const useAnalytics = () => {
    const result = React.useContext(AnalyticsContext);
    if (!result) {
        throw new Error("Context used outside of its Provider!");
    }
    return result;
};
