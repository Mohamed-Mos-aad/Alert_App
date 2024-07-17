import { createElement } from 'react';
import { OctagonAlert, BookMarked, OctagonX, Ban, CheckCheck } from 'lucide-react';

const AlertDetails = [
    {
        id: '1',
        type: "alert-note",
        icon: createElement(OctagonAlert),
        title: "High Memory Usage Detected",
        description: "The application is consuming a significant amount of memory, which could impact performance and user experience. High memory usage can be caused by memory leaks, large data sets, or inefficient algorithms. Regularly monitor your application’s memory consumption and utilize tools such as React's Profiler to identify and optimize memory-intensive components. Consider implementing pagination, lazy loading, and memoization to reduce memory footprint.",
    },
    {
        id: '2',
        type: "alert-info",
        icon: createElement(BookMarked),
        title: "New Feature Released",
        description: "A new feature has been successfully deployed to the application. This feature includes user-requested enhancements and bug fixes aimed at improving functionality and user satisfaction. Make sure to inform users about the new feature and provide clear documentation or tutorials to help them understand and utilize the new functionality. Regularly gather user feedback to continuously improve the feature.",
    },
    {
        id: '3',
        type: "alert-warning",
        icon: createElement(OctagonX),
        title: "Deprecated API Usage",
        description: "Your project is currently using deprecated APIs which have been superseded by newer, more efficient alternatives. It's crucial to update your codebase to utilize the latest React APIs. Failure to do so may result in compatibility issues with future versions of React, potentially leading to runtime errors or suboptimal performance. Regularly review the React documentation for updates and best practices.",
    },
    {
        id: '4',
        type: "alert-error",
        icon: createElement(Ban),
        title: "Failed API Request",
        description: "An attempt to fetch data from the API has failed, resulting in an error. Possible causes include network issues, incorrect endpoints, or server-side problems. Ensure that your API requests are correctly configured and handle errors gracefully to provide feedback to the user. Implement retry mechanisms and fallback options to improve resilience and user experience during such failures.",
    },
    {
        id: '5',
        type: "alert-success",
        icon: createElement(CheckCheck),
        title: "Component Optimization Successful",
        description: "Your recent optimization efforts have successfully reduced the component's rendering time by 50%. This improvement is achieved by minimizing unnecessary re-renders, implementing React.memo, and optimizing the state management. As a result, users will experience smoother interactions and faster load times. Continue to profile and test your application regularly to maintain optimal performance.",
    }
]

export default AlertDetails;
