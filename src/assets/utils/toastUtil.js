import { useRef } from 'react';
export const useToast = () => {
    const toast = useRef(null);

    const showToast = (msg, severity = 'success') => {
        toast.current.show({
            severity: severity,
            summary: '', // You can remove the summary if not needed
            detail: msg,
            life: 3000, // Adjust the display duration as needed
            style: {
                width: '300px',
                background: severity === 'error' ? '#ffe6e6' : '#e6ffe6',
                borderRadius: '8px',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                fontSize: '14px',
            },
            contentStyle: {
                padding: '8px 16px',
                fontWeight: 'bold',
            },
            closable: false,
        });
    };

    return { toast, showToast };
};
